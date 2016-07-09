/*eslint-disable */
const GrowCss = GrowCss || {};
/*eslint-enable */

const GcWaterfallBehavior = {
  listeners: {
    'iron-resize': '_onResize',
  },

  _onResize() {
    /*eslint-disable */
    waterfall(Polymer.dom(this).node);
    /*eslint-enable */
  },

  attached() {
    this._onResize();
  },
};

GrowCss.WaterfallBehavior = [Polymer.IronResizableBehavior, GcWaterfallBehavior];
