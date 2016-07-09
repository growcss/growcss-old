class GcGridBlock {
  get behaviors() {
    return [...GrowCss.ScreenSizeBehavior];
  }

  beforeRegister() {
    this.is = 'grid-block';
  }
}

/*eslint-disable */
Polymer(GcGridBlock);
/*eslint-enable */
