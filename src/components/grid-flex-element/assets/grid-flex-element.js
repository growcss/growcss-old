'use strict';

class GridFlexElement {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior];
  }

  beforeRegister() {
    this.is = 'grid-flex-element';
  }
}

/*eslint-disable */
Polymer(GridFlexElement);
/*eslint-enable */
