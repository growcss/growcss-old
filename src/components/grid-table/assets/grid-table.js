'use strict';

class GcGridTable {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior];
  }

  beforeRegister() {
    this.is = 'grid-table';
  }
}

/*eslint-disable */
Polymer(GcGridTable);
/*eslint-enable */
