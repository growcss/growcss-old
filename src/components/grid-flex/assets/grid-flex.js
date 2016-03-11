'use strict';

class GridFlexElement {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior];
  }

  beforeRegister() {
    this.is = 'grid-flex';
  }
}

/*eslint-disable */
Polymer(GridFlexElement);
/*eslint-enable */
