'use strict';

class FullWidthHeader {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior];
  }

  beforeRegister() {
    this.is = 'gc-ui-full-width-header';
    this.properties = {
      source: {
        type: String,
        value: '',
      },
    };
  }

  registered() {}
  created() {}
  ready() {
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
