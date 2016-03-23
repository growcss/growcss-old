/* eslint-disable no-unused-vars */
class GrowCssMidway {
  constructor(base) {
    this.base = base || 16;

    return this;
  }

/* eslint-enable no-unused-vars */
  center(element) {
    this.centerHorizontal(element);
    this.centerVertical(element);
  }

  centerHorizontal(element) {
    const elements = this._createArrayObject(element);
    const css = {
      display: 'inline',
      position: 'absolute',
      left: '50%',
    };
    let i;

    for (i = elements.length - 1; i >= 0; i--) {
      const el = elements[i];
      const number = this._getAbsoluteWidth(el) / 2 / this.base;
      const position = {
        marginLeft: `${-number}rem`,
      };

      el.classList.add('midway-position-horizontal');
      this._setStyles(el, position);
      this._setStyles(el, css);
    }
  }

  centerVertical(element) {
    const elements = this._createArrayObject(element);
    const css = {
      display: 'inline',
      position: 'absolute',
      top: '50%',
    };
    let i;

    for (i = elements.length - 1; i >= 0; i--) {
      const el = elements[i];
      const number = this._getAbsoluteHeight(el) / 2 / this.base;
      const position = {
        marginTop: `${-number}rem`,
      };

      el.classList.add('midway-position-vertical');
      this._setStyles(el, position);
      this._setStyles(el, css);
    }
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

  _setStyles(element, styles) {
    const el = element;

    for (const s in styles) {
      if (styles.hasOwnProperty(s)) {
        el.style[s] = styles[s];
      }
    }
  }

  /**
   * Turns element or nodeList into an array object.
   *
   * @param  {Object} object
   *
   * @return {Array}
   */
  _createArrayObject(object) {
    let array = [];

    if (Array.isArray(object)) {
      // use object if already an array
      array = object;
    } else if (typeof object.length === 'number') {
      // convert nodeList to array
      for (let i = 0; i < object.length; i++) {
        array.push(object[i]);
      }
    } else {
      // array of single index
      array.push(object);
    }

    return array;
  }
}
