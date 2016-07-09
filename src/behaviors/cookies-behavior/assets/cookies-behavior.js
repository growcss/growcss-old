/*eslint-disable */
let GrowCss = GrowCss || {};
/*eslint-enable */

const GcCookies = {
  registered() {
    this.cookies = Cookies;
  },

  cookieOptions(options) {
    Cookies.defaults = options;

    this.cookies = Cookies;
  },

  cookieEnabled() {
    return this.cookies.enabled;
  },

  getCookie(key) {
    return this.cookies.get(key);
  },

  setCookie(key, value, options) {
    this.cookies.set(key, value, options);

    return this.cookies;
  },

  expireCookie(key, options) {
    return this.cookies.expire(key, options);
  },
};

GrowCss.CookiesBehavior = GcCookies;
