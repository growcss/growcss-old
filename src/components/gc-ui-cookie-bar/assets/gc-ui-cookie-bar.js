'use strict';

class CookieBar {
  // Element setup goes here instead of created() callback
  beforeRegister () {
    this.is = 'gc-ui-cookie-bar';
    this.properties = {};
  }

  // Define other lifecycle methods as you need
  registered () {}
  created () {}
  ready () {}
  factoryImpl () {}
  attached () {}
  detached () {}
  attributChanged () {}
}

/*eslint-disable */
Polymer(CookieBar);
/*eslint-enable */
