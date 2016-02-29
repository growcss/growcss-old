(function () {
  'use strict';
  class GridBlockElement {
    get behaviors () {
      return [...GrowCss.ScreenSizeBehavior];
    }

    beforeRegister () {
      this.is = 'grid-block-element';
    }
  }

  Polymer(GridBlockElement);
})();
