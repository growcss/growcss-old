'use strict';

class GcGridInline {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior];
  }

  beforeRegister() {
    this.is = 'grid-inline';
  }
}

/*eslint-disable */
Polymer(GcGridInline);
/*eslint-enable */
