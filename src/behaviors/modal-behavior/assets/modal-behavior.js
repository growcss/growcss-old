'use strict';

/*eslint-disable */
const GrowCss = GrowCss || {};
/*eslint-enable */

const GcModal = {
  keyBindings: {
    esc: 'close',
  },

  /**
   * closes the modal
   */
  close() {
    this._shown = false;
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

  /**
   * change handler which will either call show or close based on the shown value.
   */
  // _shownHandler(newVal, oldVal) {
  //   const func = newVal ? show : close;

  //   if (oldVal === undefined) {
  //     return;
  //   }

  //   func.call(this);
  // },

  attached() {

  },
};

GrowCss.ModalBehavior = [Polymer.IronA11yKeysBehavior, GcModal];
