'use strict';

/* eslint-disable no-unused-vars */
class GrowCssLoadingImage extends GrowCssEventEmitter {
  constructor(img) {
    super();

    this.image = img;
  }

  check() {
    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    const isComplete = this.isImageComplete();
    const img = this.image;

    if (isComplete) {
      // report based on naturalWidth
      this.confirm(img.naturalWidth !== 0, 'naturalWidth');

      return;
    }

    // If none of the checks above matched, simulate loading on detached element.
    this.proxyImage = new Image();
    const proxyImage = this.proxyImage;

    proxyImage.addEventListener('load', this);
    proxyImage.addEventListener('error', this);

    // bind to image as well for Firefox.
    img.addEventListener('load', this);
    img.addEventListener('error', this);

    proxyImage.src = img.src;
  }

  isImageComplete() {
    const img = this.image;

    return img.complete && img.naturalWidth !== undefined;
  }

  confirm(isLoaded, message) {
    this.isloaded = isLoaded;

    this.emit('progress', this, this.image, message);
  }

  handleEvent(event) {
    const method = `on${event.type}`;

    if (this[method]) {
      this[method](event);
    }
  }

  onload() {
    this.confirm(true, 'onload');

    this.unbindEvents();
  }

  onerror() {
    this.confirm(false, 'onerror');

    this.unbindEvents();
  }

  unbindEvents() {
    const img = this.image;
    const proxyImage = this.proxyImage;

    proxyImage.removeEventListener('load', this);
    proxyImage.removeEventListener('error', this);

    img.removeEventListener('load', this);
    img.removeEventListener('error', this);
  }
}
/* eslint-enable no-unused-vars */
