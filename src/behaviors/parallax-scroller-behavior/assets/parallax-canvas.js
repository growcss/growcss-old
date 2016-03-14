'use strict';

/* eslint-disable no-unused-vars */
class GrowCssParallaxCanvas extends GrowCssEventEmitter {
  constructor(dom, img, opt) {
    super();

    this.options = opt;
    this.image = img;
    this.wrapper = dom;
    this.isLoaded = false;
  }

  hasTranslate3D() {
    const div = document.createElement('div');

    this.prefix(div.style, 'transform', 'translate3d(0, 0, 0)');

    return /translate3d/g.test(div.style.cssText);
  }

  /**
   * Load the image.
   */
  load() {
    const img = this.image;

    if (!img.width || !img.height || !img.complete) {
      img.onload = () => this.onImageLoaded();
    } else {
      this.onImageLoaded();
    }
  }

  /**
   * Callback triggered when the image gets loaded.
   */
  onImageLoaded() {
    this.isLoaded = true;
    this.update();
    this.fire('loaded', this.image);
  }

  /**
   * Center the image in its wrapper.
   */
  update() {
    const iw = this.image.naturalWidth || this.image.width;
    const ih = this.image.naturalHeight || this.image.height;
    const ratio = iw / ih;
    const size = this.size;
    const img = this.image;

    if (size.width / ratio <= size.height) {
      img.height = size.height;
      img.width = size.height * ratio;
    } else {
      img.width = size.width;
      img.height = size.width / ratio;
    }

    img.style.top = `${-~~((img.height - size.height) / 2)}px`;
    img.style.left = `${-~~((img.width - size.width) / 2)}px`;

    return this;
  }

  /**
   * Draw the image on the canvas.
   */
  draw(stage) {
    const size = this.size;
    const img = this.image;

    // this value will be:
    //  < 0 when the image is on the top
    //  0 when the image is in the center of the screen
    //  > 0 when the image is at the bottom
    let perc = (
      this.offset.top + size.height *
      this.options.center + stage.height /
      2 - stage.scrollTop) / stage.height - 1;

    // increase the percentage effect according to the intensity
    // and the current image height
    perc *= img.height / size.height / 2 * this.options.intensity;

    if (this.hasTranslate3D()) {
      this.prefix(img.style, 'transform', `translate3d(0, ${-perc}%, 0)`);
    } else {
      this.prefix(img.style, 'transform', `translate(0, ${-perc}%)`);
    }
  }

  /**
   * Get the parent wrapper bounds.
   *
   * @returns {Object} - parent tag bounds properties
   */
  get bounds() {
    return this.wrapper.getBoundingClientRect();
  }

  /**
   * Get the parent wrapper offset.
   *
   * @returns {Object} - top and left position of the image parent tag
   */
  get offset() {
    return {
      top: this.wrapper.offsetTop,
      left: this.wrapper.offsetLeft,
    };
  }

  /**
   * Get the parent wrapper size.
   *
   * @returns {Object} - the height and the width of the image parent tag
   */
  get size() {
    const props = this.bounds;

    return {
      height: props.height | 0,
      width: props.width | 0,
    };
  }

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
  }
}
/* eslint-enable no-unused-vars */
