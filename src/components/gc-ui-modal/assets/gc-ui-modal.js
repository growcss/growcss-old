'use strict';

class Class {
  get behavior() {
    return [Polymer.IronResizableBehavior, ...GrowCss.ModalBehavior, GrowCss.MidwayBehavior];
  }
  beforeRegister() {
    this.is = 'gc-ui-modal';
    this.properties = {};

    this.listeners = {
      'iron-resize': '_onResize',
    };
  }

  // Define other lifecycle methods as you need
  registered() {}
  created() {}
  ready() {}
  factoryImpl() {}

  attached() {
    this.center(this);
  }

  detached() {}
  attributChanged() {

  }

  _onResize() {
    this.center(this);
  }
}

/*eslint-disable */
Polymer(Class);
/*eslint-enable */
