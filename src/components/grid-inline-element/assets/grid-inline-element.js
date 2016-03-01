'use strict';

class GridInlineElement {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior];
  }

  beforeRegister() {
    this.is = 'grid-inline-element';
  }
}

/*eslint-disable */
Polymer(GridInlineElement);
/*eslint-enable */
