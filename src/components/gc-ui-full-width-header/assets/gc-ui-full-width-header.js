'use strict';

class FullWidthHeader {
  // Element setup goes here instead of created() callback
  beforeRegister() {
    this.is = 'gc-ui-full-width-header';
    this.properties = {};
  }

  // Define other lifecycle methods as you need
  registered() {}
  created() {}
  ready() {}
  factoryImpl() {}
  attached() {}
  detached() {}
  attributChanged() {}
}

/*eslint-disable */
Polymer(FullWidthHeader);
/*eslint-enable */
