'use strict';

/*eslint-disable */
const GrowCss = GrowCss || {};
/*eslint-enable */

const GcMidway = {
  properties: {
    remBase: {
      type: Number,
      value: 16,
    },
  },

  center(element) {
    return new GrowCssMidway(this.remBase).center(element);
  },

  centerHorizontal(element) {
    return new GrowCssMidway(this.remBase).centerHorizontal(element);
  },

  centerVertical(element) {
    return new GrowCssMidway(this.remBase).centerVertical(element);
  },
};

GrowCss.MidwayBehavior = GcMidway;
