'use strict';

/*eslint-disable */
const GrowCss = GrowCss || {};
/*eslint-enable */

const GcVideoUrlParser = {
  properties: {
    provider: String,
    mediaType: String,
  },

  get parser() {
    /*eslint-disable */
    return urlParser;
    /*eslint-enable */
  },

  urlParser(url) {
    const videourl = this.parser.parse(url);

    this.provider = videourl.provider;
    this.mediaType = videourl.mediaType;

    this.fire('video-parsed', true);

    return this.parser.create({
      videoInfo: videourl,
      format: 'embed',
    });
  },
};

GrowCss.VideoUrlParserBehavior = GcVideoUrlParser;
