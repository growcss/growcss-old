'use strict';

class GcModal {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior, ...GrowCss.ModalBehavior, GrowCss.MidwayBehavior];
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
      'iron-resize': '_onModalResize',
    };
  }

  // Define other lifecycle methods as you need
  registered() {}
  created() {}

  ready() {
  }

  factoryImpl() {}

  attached() {
    this.getModal(this);

    if (this['screen-format'] !== 'xsmall') {
      this.center(this);
    }

    this._onModalResize();
  }

  detached() {}

  attributChanged() {
    this.attached();
  }

  _onModalResize() {
    if (this['screen-format'] === 'xsmall') {
      const newWidth = window.innerWidth;
      const comuted = window.getComputedStyle(this, null);
      const width = (
        newWidth -
        parseInt(comuted.getPropertyValue('padding-right'), 10) -
        parseInt(comuted.getPropertyValue('padding-left'), 10)
      );

      this.style.width = `${width}px`;
      this.style.left = '0px';
      this.centerVertical(this);
    } else {
      this.style.width = null;
      this.style.left = '50%';
    }
  }
}

/*eslint-disable */
Polymer(GcModal);
/*eslint-enable */
