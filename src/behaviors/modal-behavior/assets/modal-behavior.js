'use strict';

/*eslint-disable */
const GrowCss = GrowCss || {};
/*eslint-enable */

const GcModal = {
  properties: {
    closeOnConfirm: {
      type: Boolean,
      value: true,
    },
    closeOnCancel: {
      type: Boolean,
      value: true,
    },
    closeOnEscape: {
      type: Boolean,
      value: true,
    },
    closeOnOutsideClick: {
      type: Boolean,
      value: true,
    },
    'modal-namespace': {
      type: String,
      value: 'growcss-modal',
    },
  },

  keyBindings: {
    esc: '_close',
  },

  hostAttributes: {
    role: 'alertdialog',
    tabindex: '-1',
  },

  /**
   * closes the modal
   */
  _close() {
    this.modal.close();
  },

  getModal(element) {
    const modal = new GrowCssModal(element, {
      namespace: this['modal-namespace'],
      closeOnConfirm: this.closeOnConfirm,
      closeOnCancel: this.closeOnCancel,
      closeOnEscape: this.closeOnEscape,
      closeOnOutsideClick: this.closeOnOutsideClick,
    });

    this.modal = modal;

    return modal;
  },
};

GrowCss.ModalBehavior = [
  Polymer.IronA11yKeysBehavior,
  GrowCss.EventEmitterBehavior,
  GcModal,
];
