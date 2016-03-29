/* eslint-disable no-unused-vars */
class GrowCssMidway {
/* eslint-enable no-unused-vars */
  constructor(options) {
    this.base = options['base-rem'] || 16;
    this.unit = options.unit || 'rem';

    return this;
  }

  /**
   * Centers horizontally and vertically. This also sets `position:fixed`.
   */
  center(element) {
    this.centerHorizontal(element);
    this.centerVertical(element);
  }

  resetPosition(element, position) {
    const horizontal = () => {
      element.classList.remove('midway-horizontally');
      this._setStyles(element, {
        left: null,
        marginLeft: null,
        display: null,
        position: null,
      });
    };
    const vertical = () => {
      element.classList.remove('midway-vertically');
      this._setStyles(element, {
        top: null,
        marginTop: null,
        display: null,
        position: null,
      });
    };

    element.classList.remove('midway');

    if (position === 'horizontal') {
      horizontal();
      return;
    } else if (position === 'vertical') {
      vertical();
      return;
    }

    horizontal();
    vertical();
    return;
  }

  centerHorizontal(element) {
    const css = {
      display: 'inline',
      position: 'fixed',
      left: '50%',
      marginLeft: this._calcWithUnit(this._getAbsoluteWidth(element)),
    };

    element.classList.add('midway-horizontally');
    this._setStyles(element, css);
  }

  centerVertical(element) {
    const css = {
      display: 'inline',
      position: 'fixed',
      top: '50%',
      marginTop: this._calcWithUnit(this._getAbsoluteHeight(element)),
    };

    element.classList.add('midway-vertically');
    this._setStyles(element, css);
  }

  _getAbsoluteHeight(element) {
    const styles = window.getComputedStyle(element);
    const margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);

    return isNaN(margin) ? element.offsetHeight : Math.ceil(element.offsetHeight + margin);
  }

  _getAbsoluteWidth(element) {
    const styles = window.getComputedStyle(element);
    const margin = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);

    return isNaN(margin) ? element.offsetWidth : Math.ceil(element.offsetWidth + margin);
  }

  /**
   * Set styles to element,
   *
   * @param {Element} element
   * @param {Object} styles
   */
  _setStyles(element, styles) {
    const el = element;

    for (const s in styles) {
      if (styles.hasOwnProperty(s)) {
        el.style[s] = styles[s];
      }
    }
  }

  /**
   * Number with unit.
   *
   * @param {Number} number
   *
   * @return String
   */
  _calcWithUnit(number) {
    if (this.unit === 'px') {
      const px = number / 2;
      return `-${px}px`;
    }

    const rem = number / 2 / this.base;
    return `-${rem}rem`;
  }
}
