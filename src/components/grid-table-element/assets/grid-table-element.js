(function () {
  'use strict';
  class GridTableElement {
    get behaviors () {
      return [...GrowCss.ScreenSizeBehavior];
    }

    beforeRegister () {
      this.is = 'grid-table-element';
    }
  }

  Polymer(GridTableElement);
})();
