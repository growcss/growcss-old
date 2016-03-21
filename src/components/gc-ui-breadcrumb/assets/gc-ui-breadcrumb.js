'use strict';

class GcBreadcrumb {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior];
  }

  beforeRegister() {
    this.is = 'gc-ui-breadcrumb';
    this.properties = {
      size: {
        type: String,
        value: '',
      },
      label: {
        type: String,
        value: 'You are here:',
      },
    };
  }

  ready() {
    this._addSizeClass(this.size);
    this._addCurrentClass();
  }

  _addSizeClass(size) {
    if (size === 'small') {
      this.classList.add('small');
    } else if (size === 'medium') {
      this.classList.add('medium');
    } else if (size === 'large') {
      this.classList.add('large');
    }
  }

  _addCurrentClass() {
    const steps = this.querySelectorAll('gc-ui-breadcrumb-step');

    steps[steps.length - 1].classList.add('current');
    steps[steps.length - 1].setAttribute('current', true);
  }

  attributChanged() {
    // just do same thing if any of the arguments change
    this.ready();
  }
}

/*eslint-disable */
Polymer(GcBreadcrumb);
/*eslint-enable */
