'use strict';

/*eslint-disable */
let GrowCss = GrowCss || {};
/*eslint-enable */

const GcScreenSizeBehavior = {
  properties: {
    log: {
      type: Boolean,
      value: false,
    },
    xsmall: {
      type: Number,
      value: 480,
    },
    small: {
      type: Number,
      value: 960,
    },
    medium: {
      type: Number,
      value: 1280,
    },
    large: {
      type: Number,
      value: 1600,
    },
    xlarge: {
      type: Number,
      value: 1920,
    },
    'screen-format': {
      type: String,
      value: '',
    },
    'screen-width': {
      type: Number,
      value: '',
    },
  },

  listeners: {
    'iron-resize': '_onResize',
  },

  _onResize() {
    const newWidth = window.innerWidth;
    const screenFormat = this._getScreenFormat(newWidth);

    this['screen-width'] = newWidth;
    this['screen-format'] = screenFormat;

    // this.classList.add(`screen-${screenFormat}`);

    if (this.log) {
      /*eslint-disable */
      console.log(`width : ${newWidth}`, `screenFormat = ${screenFormat}`);
      /*eslint-enable */
    }
  },

  _getScreenFormat(newWidth) {
    if (newWidth <= this.xsmall) {
      return 'xsmall';
    } else if (newWidth <= this.small) {
      return 'small';
    } else if (newWidth <= this.medium) {
      return 'medium';
    } else if (newWidth <= this.large) {
      return 'large';
    } else if (newWidth <= this.xlarge) {
      return 'xlarge';
    }

    return 'xlarge';
  },

  ready() {
    this._onResize();
  },

  attached() {
    this.async(this.notifyResize, 1);
  },
};

GrowCss.ScreenSizeBehavior = [Polymer.IronResizableBehavior, GcScreenSizeBehavior];
