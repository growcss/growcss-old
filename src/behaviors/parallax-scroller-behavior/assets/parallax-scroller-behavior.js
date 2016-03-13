'use strict';

/*eslint-disable */
const GrowCss = GrowCss || {};
/*eslint-enable */

const GcParallaxScrollerBehavior = {
  properties: {
    parallax: {
      type: Object,
      value: {},
    },
    'parallax-class': {
      type: String,
      value: '.parallax',
    },
    'parallax-options': {
      type: Object,
      value: {},
    },
    'parallax-canvases': {
      type: Array,
      value: [],
    },
  },

  ready() {
    if (!this['parallax-canvases'].length) {
      console.warn(`No images were found with the selector "${this['parallax-class']}"`);
    } else {
      this.imagesLoaded = 0;
      this.bind();
    }
  },

  bind() {
  },
};

GrowCss.ParallaxScrollerBehavior = [
  GrowCss.EventEmitterBehavior,
  GrowCss.ParallaxCanvas,
  GrowCss.ParallaxStage,
  GcParallaxScrollerBehavior,
];
