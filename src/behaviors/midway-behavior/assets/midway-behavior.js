'use strict';

/*eslint-disable */
const GrowCss = GrowCss || {};
/*eslint-enable */

const GcMidway = {
  properties: {
    'rem-base': {
      type: Number,
      value: 16,
    },
    unit: {
      type: String,
      value: 'rem',
    },
  },

  get midway() {
    return new GrowCssMidway({
      'rem-base': this['rem-base'],
      unit: this.unit,
    });
  },

  center(element) {
    return new GrowCssMidway({
      'rem-base': this['rem-base'],
      unit: this.unit,
    }).center(element);
  },

  centerHorizontal(element) {
    this.midway.centerHorizontal(element);
  },

  centerVertical(element) {
    this.midway.centerVertical(element);
  },

  resetPosition(element, position) {
    this.midway.resetPosition(element, position);
  },
};

GrowCss.MidwayBehavior = GcMidway;
