'use strict';

class GridInlineElement {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior];
  }

  beforeRegister() {
    this.is = 'grid-inline';
  }
}

/*eslint-disable */
Polymer(GridInlineElement);
/*eslint-enable */
