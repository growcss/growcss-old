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
      unit: {
        type: String,
        value: 'px',
      },
    };

    this.listeners = {
      'iron-resize': '_onModalResize',
    };
  }

  attached() {
    this.modalwindow = this.getModal(this);

    this.modalwindow.addEventListener('gc-ui-modal-is-opened', () => {
      const backdropElement = document.createElement('gc-ui-modal-backdrop');
      const backdrop = document.querySelector('gc-ui-modal-backdrop');

      if (!backdrop) {
        backdropElement.setAttribute('opened', 'true');
        document.querySelector('body').appendChild(backdropElement);
      }
    });

    this.modalwindow.addEventListener('gc-ui-modal-is-closed', () => {
      const backdrop = document.querySelector('gc-ui-modal-backdrop');

      backdrop.remove();
    });

    this._onModalResize();
  }

  attributChanged() {
    this.attached();
  }

  _onModalResize() {
    if (this['screen-format'] === 'xsmall') {
      this.resetPosition(this);
      this.centerVertical(this);
    } else {
      this.center(this);
    }
  }
}

/*eslint-disable */
Polymer(GcModal);
/*eslint-enable */
