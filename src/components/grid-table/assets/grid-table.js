'use strict';

class GridTableElement {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior];
  }

  beforeRegister() {
    this.is = 'grid-table';
  }
}

/*eslint-disable */
Polymer(GridTableElement);
/*eslint-enable */
