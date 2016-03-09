'use strict';

class Class {
  get behaviors() {
    return [GrowCss.VideoUrlParser, Polymer.IronResizableBehavior];
  }

  // Element setup goes here instead of created() callback
  beforeRegister() {
    this.is = 'gc-ui-video-embed';
    this.properties = {
      source: {
        type: String,
        value: '',
      },
      '_video-source': {
        type: String,
        value: '',
      },
      'video-width': {
        type: String,
        value: '',
      },
      'video-height': {
        type: String,
        value: '',
      },
      '_video-width': {
        type: String,
        value: '',
      },
      '_video-height': {
        type: String,
        value: '',
      },
      _html5video: {
        type: Boolean,
        value: false,
      },
      _iframevideo: {
        type: Boolean,
        value: false,
      },
    };

    this.listeners = {
      'iron-resize': '_onVideoResize',
    };
  }

  ready() {
    const htmlvideo = Polymer.dom(this).children;
    const windowWidth = window.innerWidth;
    const videoHeight = this['video-height'] !== '' ?
        this['video-height'] :
        Math.round((windowWidth / 16) * 9);
    const width = this['video-width'];

    this['_video-height'] = videoHeight;
    this['_video-width'] = width !== '' ? `width="${width}"` : '100%';

    if (htmlvideo.length >= 1) {
      this._html5video = true;
    } else if (this.source !== '') {
      this._iframevideo = true;
      this['_video-source'] = this.urlParser(this.source);
    }
  }

  _onVideoResize() {
    const windowWidth = window.innerWidth;

    if (this['video-height'] === '') {
      this['_video-height'] = Math.round((windowWidth / 16) * 9);
    }
  }
}

/*eslint-disable */
Polymer(Class);
/*eslint-enable */
