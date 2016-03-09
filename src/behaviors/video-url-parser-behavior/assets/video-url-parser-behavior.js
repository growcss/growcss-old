'use strict';

/*eslint-disable */
const GrowCss = GrowCss || {};
/*eslint-enable */

const GcVideoUrlParser = {
  properties: {
    parser: {
      type: Object,
      value: {},
    },
    provider: {
      type: String,
      value: '',
    },
    mediaType: {
      type: String,
      value: '',
    },
  },

  registered() {
    /*eslint-disable */
    this.parser = urlParser;
    /*eslint-enable */
  },

  urlParser(url) {
    const videourl = this.parser.parse(url);

    this.provider = videourl.provider;
    this.mediaType = videourl.mediaType;

    return this.parser.create({
      videoInfo: videourl,
      format: 'embed',
    });
  },
};

GrowCss.VideoUrlParser = GcVideoUrlParser;
