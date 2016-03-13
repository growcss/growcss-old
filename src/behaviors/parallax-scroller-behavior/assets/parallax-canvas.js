'use strict';

/*eslint-disable */
const GrowCss = GrowCss || {};
/*eslint-enable */

const GcParallaxCanvas = {
  properties: {
    'parallax-img': {
      type: Object,
      value: {},
    },
    'parallax-wrapper': {
      type: String,
      value: '',
    },
    isLoaded: {
      type: Boolean,
      value: false,
    },
  },

  hasTranslate3D() {
    const div = document.createElement('div');

    this.prefix(div.style, 'transform', 'translate3d(0, 0, 0)');

    return /translate3d/g.test(div.style.cssText);
  },

  /**
   * Load the image.
   *
   * @returns { Object } - Canvas
   */
  load() {
    const img = this['parallax-img'];

    if (!img.width || !img.height || !img.complete) {
      img.onload = () => this.onImageLoaded();
    } else {
      this.onImageLoaded();
    }
  },

  /**
   * Callback triggered when the image gets loaded.
   *
   * @returns { Object } - Canvas
   */
  onImageLoaded() {
    this.isLoaded = true;
    this.update();
    this.fire('loaded', this['parallax-img']);
  },

  /**
   * Center the image in its wrapper.
   *
   * @returns { Object } - Canvas
   */
  update() {
    const iw = this['parallax-img'].naturalWidth || this['parallax-img'].width;
    const ih = this['parallax-img'].naturalHeight || this['parallax-img'].height;
    const ratio = iw / ih;
    const size = this.size;
    const img = this['parallax-img'];

    if (size.width / ratio <= size.height) {
      img.height = size.height;
      img.width = size.height * ratio;
    } else {
      img.width = size.width;
      img.height = size.width / ratio;
    }

    img.style.top = `${-~~((img.height - size.height) / 2)}px`;
    img.style.left = `${-~~((img.width - size.width) / 2)}px`;
  },

  /**
   * Draw the image on the canvas.
   *
   * @returns { Object } - Canvas
   */
  draw(stage) {
    const size = this.size;
    const img = this['parallax-img'];

    // this value will be:
    //  < 0 when the image is on the top
    //  0 when the image is in the center of the screen
    //  > 0 when the image is at the bottom
    let perc = (
      this.offset.top + size.height *
      this['parallax-options'].center + stage.height /
      2 - stage.scrollTop) / stage.height - 1;

    // increase the percentage effect according to the intensity
    // and the current image height
    perc *= img.height / size.height / 2 * this['parallax-options'].intensity;

    if (this.hasTranslate3D()) {
      this.prefix(img.style, 'transform', `translate3d(0, ${-perc}%, 0)`);
    } else {
      this.prefix(img.style, 'transform', `translate(0, ${-perc}%)`);
    }
  },

    /**
   * Get the parent wrapper bounds.
   *
   * @returns { Object } - parent tag bounds properties
   */
  get bounds() {
    return this['parallax-wrapper'].getBoundingClientRect();
  },

  /**
   * Get the parent wrapper offset.
   *
   * @returns { Object } - top and left position of the image parent tag
   */
  get offset() {
    return {
      top: this['parallax-wrapper'].offsetTop,
      left: this['parallax-wrapper'].offsetLeft,
    };
  },

  /**
   * Get the parent wrapper size.
   *
   * @returns { Object } - the height and the width of the image parent tag
   */
  get size() {
    const props = this.bounds;

    return {
      height: props.height | 0,
      width: props.width | 0,
    };
  },

  prefix(obj, prop, value) {
    const object = obj;
    const prefixes = ['ms', 'o', 'Moz', 'webkit', ''];
    let i = prefixes.length;

    while (i--) {
      const prefix = prefixes[i];
      // check if the prefix exists othewise we will use the unprefixed version
      // 4 ex using Transform: transform, webkitTransform, MozTransform, oTransform, msTransform
      const p = prefix ?
        prefix + prop[0].toUpperCase() + prop.substr(1) :
        prop.toLowerCase() + prop.substr(1);

      if (p in object) {
        object[p] = value;

        return true;
      }
    }

    return false;
  },
};

GrowCss.ParallaxCanvas = GcParallaxCanvas;
