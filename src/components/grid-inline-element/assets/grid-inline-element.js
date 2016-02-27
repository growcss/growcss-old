(function () {
  'use strict';
  class GridInlineElement {
    get behaviors () {
      return [...GrowCss.ScreenSizeBehavior];
    }

    beforeRegister () {
      this.is = 'grid-inline-element';
    }
  }

  Polymer(GridInlineElement);
})();
