class GcGridFloat {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior];
  }

  beforeRegister() {
    this.is = 'grid-float';
  }
}

/*eslint-disable */
Polymer(GcGridFloat);
/*eslint-enable */

