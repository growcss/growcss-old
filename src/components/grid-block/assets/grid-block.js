'use strict';

class GridBlockElement {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior];
  }

  beforeRegister() {
    this.is = 'grid-block';
  }
}

/*eslint-disable */
Polymer(GridBlockElement);
/*eslint-enable */
