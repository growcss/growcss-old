'use strict';

class GcCookieBar {
  get behaviors() {
    return [GrowCss.CookiesBehavior];
  }

  // Element setup goes here instead of created() callback
  beforeRegister() {
    this.is = 'gc-ui-cookie-bar';

    this.properties = {
      show: {
        type: Boolean,
        value: true,
      },
    };
  }

  ready() {
    const cookie = this.getCookie('gc-ui-cookie-bar-accepted');

    if (cookie) {
      this.show = false;
    }
  }

  created() {
    if (!this.cookieEnabled()) {
      this.show = false;
    } else {
      const button = Polymer.dom(this).querySelector('#confirm--button');

      if (button !== null) {
        button.addEventListener('click', this.confirm.bind(this));
      }
    }
  }

  confirm() {
    this.setCookie('gc-ui-cookie-bar-accepted', true, { expires: Infinity });
    this.show = false;
  }
}

/*eslint-disable */
Polymer(GcCookieBar);
/*eslint-enable */
