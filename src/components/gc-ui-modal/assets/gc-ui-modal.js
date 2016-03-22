'use strict';

class GcModal {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior, ...GrowCss.ModalBehavior];
  }

  beforeRegister() {
    this.is = 'gc-ui-modal';
    this.properties = {
      'modal-namespace': {
        type: String,
        value: 'gc-ui-modal',
      },
    };

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
    this.getModal(this);
  }

  detached() {}

  attributChanged() {

  }

  _onResize() {
  }
}

/*eslint-disable */
Polymer(GcModal);
/*eslint-enable */
