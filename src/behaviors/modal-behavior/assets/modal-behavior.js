'use strict';

/*eslint-disable */
const GrowCss = GrowCss || {};
/*eslint-enable */

const GcModal = {
  properties: {
    hashTracking: {
      type: Boolean,
      value: true,
    },
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
    esc: 'close',
  },

  /**
   * closes the modal
   */
  close() {
    this._shown = false;
    this.modal.close();
  },

  /**
   * opens the modal
   */
  show() {
    this._shown = true;
  },

  /**
   * opens or closes the modal
   */
  toggle() {
    this._shown = !this._shown;
  },

  getModal(element) {
    return new GrowCssModal(element, {
      namespace: this['modal-namespace'],
    });
  },
};

GrowCss.ModalBehavior = [
  Polymer.IronA11yKeysBehavior,
  GrowCss.EventEmitterBehavior,
  GcModal,
];
