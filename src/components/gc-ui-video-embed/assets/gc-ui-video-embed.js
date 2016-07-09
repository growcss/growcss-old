class GcVideo {
  get behaviors() {
    return [GrowCss.VideoUrlParserBehavior, Polymer.IronResizableBehavior];
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
    const elementWidth = this.offsetWidth;
    const videoHeight = this['video-height'] !== '' ?
        this['video-height'] :
        Math.round((elementWidth / 16) * 9);
    const width = this['video-width'];

    this['_video-height'] = videoHeight;

    if (htmlvideo.length >= 1) {
      this._html5video = true;
      this.classList.add('has-html-video');

      this.addEventListener('dom-change', function () {
        const video = this.querySelector('video');

        if (video !== null) {
          video.setAttribute('width', width !== '' ? width : '100%');
        }
      });
    } else if (this.source !== '') {
      this._iframevideo = true;
      this['_video-source'] = this.urlParser(this.source);
      this['_video-width'] = width !== '' ? width : '100%';

      this.classList.add(`has-${this.provider}-video`);
    }
  }

  _onVideoResize() {
    const elementWidth = this.offsetWidth;

    if (this['video-height'] === '') {
      this['_video-height'] = Math.round((elementWidth / 16) * 9);
    }
  }
}

/*eslint-disable */
Polymer(GcVideo);
/*eslint-enable */
