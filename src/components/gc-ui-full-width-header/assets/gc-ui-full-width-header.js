'use strict';

class FullWidthHeader {
  get behaviors() {
    return [
      ...GrowCss.ScreenSizeBehavior,
      ...GrowCss.ParallaxScrollerBehavior,
      GrowCss.ImagesLoaded,
    ];
  }

  beforeRegister() {
    this.is = 'gc-ui-full-width-header';
    this.properties = {
      source: {
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
  }

  registered() {
  }

  created() {
    this.hasImagesLoaded(
      Polymer.dom(this).querySelector('img'), (instance) => {
        const result = instance.isComplete;

        if (result) {
          return true;
        }

        return false;
      }
    );
  }

  ready() {
    this._handleImg();

    // const image = this.source.match('/.jpg/');
    // const video = '';
    // const html5video = '';
  }

  _handleImg() {
  }

  _handleVideo() {
  }

  _handleHtml5Video() {
  }
}

/*eslint-disable */
Polymer(FullWidthHeader);
/*eslint-enable */
