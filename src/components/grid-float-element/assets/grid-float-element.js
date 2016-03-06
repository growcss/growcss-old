'use strict';

class GridFloatElement {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior];
  }

  beforeRegister() {
    this.is = 'grid-float-element';
  }
}

/*eslint-disable */
Polymer(GridFloatElement);
/*eslint-enable */

