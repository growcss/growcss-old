'use strict';

/*eslint-disable */
const GrowCss = GrowCss || {};
/*eslint-enable */

class GrowCssParallaxScroller extends GrowCssEventEmitter {
  constructor(dom, selector, opts) {
    super();

    // lazy stage instance initialization
    if (!this.stage) {
      this.stage = new GrowCssParallaxStage();
    }

    this.dom = dom;

    // set the options extending the _defaults
    this.options = opts || {
      offsetYBounds: 50,
      intensity: 30,
      center: 0.5,
    };

    this.selector = Array.prototype.slice.call(
      this.nodeWrapper(
        dom.querySelector(selector)
      )
    );

    this.canvases = [];

    this.add(this.selector);
  }

  /**
   * Initialize the parallax
   *
   * @return {Object} - Parallax
   */
  init() {
    if (!this.canvases.length) {
      console.warn(`No images were found with the selector "${this.selector}"`);
    } else {
      this.imagesLoaded = 0;
      this.bind();
    }

    return this;
  }

  /**
   * Bind the instance events setting all the callbacks.
   *
   * @return {Object} - Parallax
   */
  bind() {
    // cache these function in order to unbind them when
    // this instance will be destroyed
    this._onResize = (...args) => this.resize.apply(this, args);
    this._onScroll = (...args) => this.scroll.apply(this, args);

    this.stage.listen('resize', this._onResize);
    this.stage.listen('scroll', this._onScroll);

    this.canvases.forEach((canvas) => {
      canvas.listenOnce('loaded', () => this.onCanvasLoaded(canvas));
      canvas.load();
      console.log(canvas);
    });

    return this;
  }

  /**
   * Force manually a redraw
   *
   * @return {Object} - Parallax
   */
  refresh() {
    this.onResize(this.stage.size).onScroll(this.stage.scrollTop);

    return this;
  }

  /**
   * Callback triggered once a canvas has loaded its image.
   *
   * @param {Object} canvas - canvas instance
   *
   * @return {Object} - Parallax
   */
  onCanvasLoaded(canvas) {
    this.fire('image:loaded', canvas.img, canvas);
    this.imagesLoaded ++;
    canvas.draw(this.stage);

    if (this.imagesLoaded === this.canvases.length) {
      this.fire('images:loaded');
    }

    return this;
  }

  /**
   * Callback triggered on scroll.
   *
   * @returns {Object} - Parallax
   */
  scroll() {
    let i = this.canvases.length;
    const offsetYBounds = this.options.offsetYBounds;
    const stageScrollTop = this.stage.scrollTop;

    while (i--) {
      const canvas = this.canvases[i];
      const canvasHeight = canvas.size.height;
      const canvasOffset = canvas.offset;
      const canvasScrollDelta = canvasOffset.top + canvasHeight - stageScrollTop;

      if (
        canvas.isLoaded &&
        canvasScrollDelta + offsetYBounds > 0 &&
        canvasScrollDelta - offsetYBounds < stageScrollTop + this.stage.height
      ) {
        canvas.draw(this.stage);
        this.fire('draw', canvas.img);
      }
    }

    this.fire('update', stageScrollTop);

    return this;
  }

  /**
   * Add parallax elements to this parallax instance.
   *
   * @param {String|Array} elements - DOM selector or node list
   *
   * @returns {Object} - Parallax
   */
  add(elements) {
    this.canvases = this.canvases.concat(this.createCanvases(elements));

    return this;
  }

  /**
   * Remove parallax elements from this parallax instance;
   *
   * @param {String|Array} elements - DOM selector or node list
   *
   * @returns {Object} - Parallax
   */
  remove(elements) {
    elements.forEach((el) => {
      let i = this.canvases.length;

      while (i--) {
        if (el === this.canvases[i].img) {
          this.canvases.splice(i, 1);
          break;
        }
      }
    });

    return this;
  }

  /**
   * Kill all the internal and external callbacks listening this instance events
   *
   * @returns {Object} - Parallax
   */
  destroy() {
    this.forget('*');
    this.canvases = [];
    this.stage.forget('resize', this._onResize);
    this.stage.forget('scroll', this._onScroll);

    return this;
  }

  /**
   * Callback triggered on window resize
   */
  resize() {
    let i = this.canvases.length;

    while (i--) {
      const canvas = this.canvases[i];

      if (!canvas.isLoaded) {
        return;
      }

      canvas.update().draw(this.stage);
    }

    this.fire('resize');
  }

  /**
   * Set the canvases instances
   *
   * @param {Array} elements - list of the images we want to parallax
   *
   * @return {Array} - list of canvas instances
   */
  createCanvases(elements) {
    return elements.map(el => {
      const data = this.elementData(el);

      return new GrowCssParallaxCanvas(this.dom, el, {
        intensity: (typeof data.intensity !== 'undefined') ?
          + data.intensity :
          this.options.intensity,
        center: (typeof data.center !== 'undefined') ?
          + data.center :
          this.options.center,
      });
    });
  }

  elementData(el, attr) {
    if (attr) {
      return el.dataset[attr] || el.getAttribute(`data-${attr}`);
    }

    return el.dataset || Array.prototype.slice.call(el.attributes).reduce((ret, attribute) => {
      const r = ret;

      if (/data-/.test(attribute.name)) {
        r[attribute.name] = attribute.value;
      }

      return r;
    }, {});
  }

  nodeWrapper(element) {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(element);

    return fragment.childNodes;
  }
}


const GcParallaxScrollerBehavior = {
  parallax(selector, element) {
    return new GrowCssParallaxScroller(selector, element);
  },
};

GrowCss.ParallaxScrollerBehavior = GcParallaxScrollerBehavior;
