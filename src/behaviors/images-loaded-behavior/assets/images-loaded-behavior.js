'use strict';

/*eslint-disable */
const GrowCss = GrowCss || {};
/*eslint-enable */

class GrowCssImagesLoaded extends GrowCssEventEmitter {
  constructor(element, options, callback) {
    super();
    let elem = element;
    let cb = callback;

    if (elem === null) {
      return;
    }

    this.options = {};

    // use elem as selector string
    if (typeof elem === 'string') {
      elem = document.querySelectorAll(elem);
    }

    this.elements = this.createArray(elem);

    if (typeof options === 'function') {
      cb = options;
    } else {
      this.options = options;
    }

    if (cb) {
      this.listen('always', cb);
    }

    this.getImages();

    // HACK check async to allow time to bind listeners
    setTimeout(this.check());
  }

  getImages() {
    this.images = [];

    // filter & find items if we have an item selector
    this.elements.forEach(this.addElementImages, this);
  }

  addElementImages(element) {
    const elem = element;
    const nodeType = elem.nodeType;
    const childImgs = elem.querySelectorAll('img');
    const elementNodeTypes = {
      1: true,
      9: true,
      11: true,
    };
    let i = 0;

    // filter siblings
    if (elem.nodeName === 'IMG') {
      this.addImage(elem);
    }

    // get background image on element
    if (this.options.background === true) {
      this.addElementBackgroundImages(elem);
    }

    // find children
    // no non-element nodes
    if (!nodeType || !elementNodeTypes[nodeType]) {
      return;
    }

    // concat childElems to filterFound array
    for (; i < childImgs.length; i++) {
      this.addImage(childImgs[i]);
    }

    // get child background images
    if (typeof this.options.background === 'string') {
      const children = elem.querySelectorAll(this.options.background);

      for (i = 0; i < children.length; i++) {
        const child = children[i];

        this.addElementBackgroundImages(child);
      }
    }
  }

  addElementBackgroundImages(element) {
    const elem = element;
    const style = getComputedStyle(elem);

    if (!style) {
      // Firefox returns null if in a hidden iframe https://bugzil.la/548397
      return;
    }

    // get url inside url("...")
    const reURL = /url\((['"])?(.*?)\1\)/gi;
    let matches = reURL.exec(style.backgroundImage);

    while (matches !== null) {
      const url = matches && matches[2];

      if (url) {
        this.addBackground(url, elem);
      }

      matches = reURL.exec(style.backgroundImage);
    }
  }

  addImage(img) {
    const loadingImage = new GrowCssLoadingImage(img);

    this.images.push(loadingImage);
  }

  addBackground(url, elem) {
    const background = new GrowCssBackground(url, elem);

    this.images.push(background);
  }

  check() {
    const _this = this;
    const images = this.images;

    this['progressed-count'] = 0;
    this['has-any-broken'] = false;

    // complete if no images
    if (!images.length) {
      this.complete();
      return;
    }

    const onProgress = function (image, elem, message) {
      // HACK - Chrome triggers event before object properties have changed.
      setTimeout(() => {
        _this.progress(image, elem, message);
      });
    };

    images.forEach((loadingImage) => {
      loadingImage.once('progress', onProgress);
      loadingImage.check();
    });
  }

  progress(image, elem, message) {
    const images = this.images;

    this['progressed-count']++;
    this['has-any-broken'] = this['has-any-broken'] || !image.isLoaded;

    // progress event
    this.emit('progress', this, image, elem);

    // check if completed
    if (this['progressed-count'] === images.length) {
      this.complete();
    }

    if (this.options.debug) {
      console.log(`progress: ${message}`, image, elem);
    }
  }

  complete() {
    const eventName = this['has-any-broken'] ? 'fail' : 'done';

    this.isComplete = true;
    this.emit(eventName, this);
    this.emit('always', this);
  }

  // turn element or nodeList into an array
  createArray(obj) {
    let array = [];
    let i = 0;

    if (Array.isArray(obj)) {
      // use object if already an array
      array = obj;
    } else if (typeof obj.length === 'number') {
      // convert nodeList to array
      for (; i < obj.length; i++) {
        array.push(obj[i]);
      }
    } else {
      // array of single index
      array.push(obj);
    }

    return array;
  }
}

const GcImagesLoaded = {
  hasImagesLoaded(element, options, callback) {
    return new GrowCssImagesLoaded(element, options, callback);
  },
};

GrowCss.ImagesLoaded = GcImagesLoaded;
