/* eslint-disable no-unused-vars */
class GrowCssModal extends GrowCssEventEmitter {
/* eslint-enable no-unused-vars */
  constructor(element, options) {
    super();

    this.element = element;
    this.options = options;

    let overlay = document.querySelector(this._namespacify('overlay'));

    if (overlay === null) {
      overlay = this._createOverlay();
      document.querySelector('body').appendChild(overlay);
    }

    this.element.classList.add(this._namespacify('is', 'initialized'));
    this.element.classList.add(this._namespacify('is', 'closed'));
    this._setStyles(this.element, {
      display: 'none',
    });
    this.element.setAttribute('tabindex', '-1');

    this._addModalEventlistners();
    this._addClickListnersOnOpenButtons();
  }

  /**
   * Opens a modal window.
   */
  open(id) {
    const midway = new GrowCssMidway;
    const element = document.getElementById(id);
    const overlay = document.getElementsByClassName(this._namespacify('overlay'));

    element.classList.remove(this._namespacify('is', 'closed'));
    element.classList.add(this._namespacify('is', 'opened'));
    this._setStyles(element, {
      display: 'block',
    });

    overlay[0].classList.remove(this._namespacify('is', 'closed'));
    overlay[0].classList.add(this._namespacify('is', 'opened'));
    this._setStyles(overlay[0], {
      display: 'block',
    });

    midway.center(element);
  }

  /**
   * Closes a modal window.
   * @param {String} reason
   */
  close() {}

  /**
   * Destroys a modal.
   */
  destroy() {}

  /**
   * Returns a current state of a modal.
   * @returns {String}
   */
  getState() {
    return this.state;
  }

  _addModalEventlistners() {
    // Add the event listener for the close button
    this.listen(`click.${this.options.namespace}.close`, (event) => {
      event.preventDefault();

      this.close();
    });

    // Add the event listener for the cancel button
    this.listen(`click.${this.options.namespace}.cancel`, (event) => {
      event.preventDefault();

      this.fire('confirmation');

      if (this.options.closeOnCancel) {
        this.close('confirmation');
      }
    });

    // Add the event listener for the confirm button
    this.listen(`click.${this.options.namespace}.confirm`, (event) => {
      event.preventDefault();

      this.fire('cancellation');

      if (this.options.closeOnConfirm) {
        this.close('cancellation');
      }
    });

    // Add the event listener for the overlay
    this.listen(`click.${this.options.namespace}`, (event) => {
      const target = event.target;

      if (!target.classList.contains(this._namespacify('overlay'))) {
        return;
      }

      if (this.options.closeOnOutsideClick) {
        this.close();
      }
    });
  }

  _addClickListnersOnOpenButtons() {
    const openButtons = document.querySelectorAll(`.${this.options.namespace}.open`);

    for (let i = openButtons.length - 1; i >= 0; i--) {
      openButtons[i].addEventListener('click', (event) => {
        const target = event.target;
        const attribut = target.getAttribute(`${this.options.namespace}-traget`);
        let id;

        if (attribut !== 'undefined') {
          id = attribut;
        } else {
          id = target.getAttribute('href');
        }
        this.open(id);
      });
    }
  }

  _createOverlay() {
    const css = {
      display: 'none',
    };
    const overlay = document.createElement('div');

    this._setStyles(overlay, css);
    overlay.classList.add(this.options.namespace);
    overlay.classList.add(this._namespacify('overlay'));
    overlay.classList.add(this._namespacify('is', 'closed'));

    return overlay;
  }

  /**
   * Generates a string separated by dashes and prefixed namespace.
   *
   * @private
   *
   * @param {...String}
   *
   * @returns {String}
   */
  _namespacify(...args) {
    let result = this.options.namespace;

    for (let i = 0; i < args.length; ++i) {
      result += `-${args[i]}`;
    }

    return result;
  }

  /**
   * Set style to a element.
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
}
