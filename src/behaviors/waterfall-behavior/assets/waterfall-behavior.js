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

    this.async(this._onResize(), 200);
    this.async(this.notifyResize, 1);
  },

  created() {
    this.classList.add('opt-waterfall');
  },
};

GrowCss.WaterfallBehavior = [Polymer.IronResizableBehavior, GcWaterfallBehavior];
