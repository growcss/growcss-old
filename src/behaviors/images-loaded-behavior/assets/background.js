'use strict';

/* eslint-disable no-unused-vars */
class GrowCssBackground extends GrowCssLoadingImage {
  constructor(url, element) {
    super();

    this['background-image-url'] = url;
    this['background-image-element'] = element;
    this['background-image-image'] = new Image();
  }

  check() {
    const img = this['background-image-image'];

    img.addEventListener('load', this);
    img.addEventListener('error', this);
    img.src = this.url;

    // check if image is already complete
    const isComplete = this.getIsImageComplete();

    if (isComplete) {
      this.confirm(img.naturalWidth !== 0, 'naturalWidth');
      this.unbindEvents();
    }
  }

  unbindEvents() {
    const img = this['background-image-image'];

    img.removeEventListener('load', this);
    img.removeEventListener('error', this);
  }

  confirm(isLoaded, message) {
    this.isloaded = isLoaded;

    this.emit('progress', this, this['background-image-element'], message);
  }
}
/* eslint-enable no-unused-vars */
