'use strict';

class GcBreadcrumb {
  beforeRegister() {
    this.is = 'gc-ui-breadcrumb-step';
    this.properties = {
      href: {
        type: String,
        value: '',
      },
      current: {
        type: Boolean,
        value: false,
      },
      sr_text: {
        type: String,
        value: 'Current:',
      },
      disabled: {
        type: Boolean,
        value: false,
      },
    };
  }

  created() {
    this.classList.add('breadcrumb-step');
  }

  ready() {
    this._is_link = this.href !== '';
  }

  attributChanged() {
    this._is_link = this.href !== '';
  }
}

/*eslint-disable */
Polymer(GcBreadcrumb);
/*eslint-enable */
