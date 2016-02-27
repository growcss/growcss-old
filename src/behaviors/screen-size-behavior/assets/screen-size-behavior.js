let GrowCss = GrowCss || {};

(function () {
  'use strict';
  let GcScreenSizeBehavior = {
    properties: {
      'log': {
        type: Boolean,
        value: false
      },
      'small': {
        type: Number,
        value: 640
      },
      'medium': {
        type: Number,
        value: 1024
      },
      'large': {
        type: Number,
        value: 1200
      },
      'xlarge': {
        type: Number,
        value: 1440
      },
      'format': {
        type: String,
        value: ''
      },
      'width': {
        type: Number,
        value: ''
      }
    },

    listeners: {
      'iron-resize': '_onResize'
    },

    _onResize: function (event) {
      let newWidth     = window.innerWidth;
      let screenFormat = this._getScreenFormat(newWidth);

      this.width  = newWidth;
      this.format = screenFormat;

      if (this.log) {
        console.log('width : ' + newWidth);
        console.log('screenFormat = ' + screenFormat);
      }
    },

    _getScreenFormat: function (newWidth) {
      if (newWidth <= this.small) {
        return 'small';
      } else if (newWidth <= this.medium) {
        return 'medium';
      } else if (newWidth <= this.large) {
        return 'large';
      } else if (newWidth <= this.xlarge) {
        return 'xlarge';
      } else {
        return 'xxlarge';
      }
    },

    attached: function () {
      this.async(this.notifyResize, 1);
    }
  };

  GrowCss.ScreenSizeBehavior = [Polymer.IronResizableBehavior, GcScreenSizeBehavior];
})();
