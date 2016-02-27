(function () {
  'use strict';
  class GridFloatElement {
    get behaviors () {
      return [...GrowCss.ScreenSizeBehavior];
    }

    beforeRegister () {
      this.is = 'grid-float-element';
    }
  }

  Polymer(GridFloatElement);
})();
