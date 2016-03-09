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
  },

  ready() {
  },

  parallaxInit() {
  },
};

GrowCss.ParallaxScrollerBehavior = [GcParallaxCanvas, GcParallaxStage, GcParallaxScrollerBehavior];
