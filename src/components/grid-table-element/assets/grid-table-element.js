'use strict';

class GridTableElement {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior];
  }

  beforeRegister() {
    this.is = 'grid-table-element';
  }
}

/*eslint-disable */
Polymer(GridTableElement);
/*eslint-enable */
