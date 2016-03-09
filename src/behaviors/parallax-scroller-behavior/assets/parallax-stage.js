'use strict';

/*eslint-disable */
const GrowCss = GrowCss || {};
/*eslint-enable */

const GcParallaxStage = {
  properties: {
    parallax: {
      type: Object,
      value: {},
    },
  },

  requestAnimationFrame() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      function (cb) {
        setTimeout(cb, 1000 / 60);
      }
    );
  },

  ready() {
    window.addEventListener('scroll', () => this.scroll(), true);
    window.addEventListener('mousewheel', () => this.scroll(), true);
    window.addEventListener('touchmove', () => this.scroll(), true);
    window.addEventListener('resize', () => this.resize(), true);
    window.addEventListener('orientationchange', () => this.resize(), true);
    window.onload = () => this.scroll(); // force an update event
  },
};

GrowCss.ParallaxStage = GcParallaxStage;
