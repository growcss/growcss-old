'use strict';

class GcUiWell {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior];
  }

  beforeRegister() {
    this.is = 'gc-ui-well';

    this.properties = {
      img: {
        type: String,
        value: '',
      },
      'img-xsmall': {
        type: String,
        value: '',
      },
      'img-small': {
        type: String,
        value: '',
      },
      'img-medium': {
        type: String,
        value: '',
      },
      'img-large': {
        type: String,
        value: '',
      },
    };

    this.listeners = {
      'iron-resize': '_onImageResize',
    };
  }

  ready() {
    let background;

    if (
      this.img !== '' ||
      this['img-xsmall'] !== '' ||
      this['img-small'] !== '' ||
      this['img-medium'] !== '' ||
      this['img-large'] !== ''
    ) {
      this.classList.add('has-background-image');
    }

    if (this.img === '') {
      if (this['img-large'] !== '') {
        background = this['img-large'];
      } else if (this['img-medium'] !== '') {
        background = this['img-medium'];
      } else if (this['img-small'] !== '') {
        background = this['img-small'];
      } else if (this['img-xsmall'] !== '') {
        background = this['img-xsmall'];
      }
    } else if (this.img !== '') {
      background = this.img;
    }

    if (background) {
      this.setAttribute('style', `background-image: url("${background}")`);
    }
  }

  _onImageResize() {
    const newWidth = window.innerWidth;
    let background;

    if (newWidth <= this.xsmall) {
      background = this['img-xsmall'];
    } else if (newWidth <= this.small) {
      background = this['img-small'];
    } else if (newWidth <= this.medium) {
      background = this['img-medium'];
    } else if (newWidth <= this.large) {
      background = this['img-large'];
    }

    if (background) {
      this.setAttribute('style', `background-image: url("${background}")`);
    }
  }
}

/*eslint-disable */
Polymer(GcUiWell);
/*eslint-enable */
