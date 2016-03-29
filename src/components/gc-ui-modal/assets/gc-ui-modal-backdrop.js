'use strict';

class GcModalBackdrop {
  beforeRegister() {
    this.is = 'gc-ui-modal-backdrop';
    this.properties = {};
  }

  /**
   * Appends the backdrop to document body and sets its `z-index` to be below the latest overlay.
   */
  prepare() {
    if (!this.parentNode) {
      Polymer.dom(document.body).appendChild(this);
    }
  }
}

/*eslint-disable */
Polymer(GcModalBackdrop);
/*eslint-enable */
