class GcGridFlex {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior];
  }

  beforeRegister() {
    this.is = 'grid-flex';
  }
}

/*eslint-disable */
Polymer(GcGridFlex);
/*eslint-enable */
