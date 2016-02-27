(function () {
  'use strict';
  class GridFlexElement {
    get behaviors () {
      return [...GrowCss.ScreenSizeBehavior];
    }

    beforeRegister () {
      this.is = 'grid-flex-element';
    }
  }

  Polymer(GridFlexElement);
})();
