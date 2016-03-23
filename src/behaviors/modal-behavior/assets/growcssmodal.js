/* eslint-disable no-unused-vars */
class GrowCssModal extends GrowCssEventEmitter {
/* eslint-enable no-unused-vars */
  constructor(element, options) {
    super();

    this.element = element;
    this.options = options;

    let overlay = document.querySelector(`.${this._namespacify('overlay')}`);

    if (overlay === null) {
      overlay = this._createOverlay();
      document.querySelector('body').appendChild(overlay);
    }

    this.element.classList.add(this._namespacify('is', 'initialized'));
    this.element.classList.add(this._namespacify('is', 'closed'));
    this.element.classList.add(this.options.namespace);
    this.element.setAttribute('aria-hidden', 'true');
    this._setStyles(this.element, {
      visibility: 'hidden',
    });
    this.element.setAttribute('tabindex', '-1');

    this._createCloseButton();
    this._addModalEventlistners();
    this._addClickListnersOnOpenButtons();
  }

  /**
   * Opens a modal window.
   */
  open(id) {
    const element = document.getElementById(id);
    const overlay = document.querySelector(`.${this._namespacify('overlay')}`);

    element.classList.remove(this._namespacify('is', 'closed'));
    element.classList.add(this._namespacify('is', 'opened'));
    element.setAttribute('aria-hidden', 'false');
    this._setStyles(element, {
      visibility: 'visible',
    });

    overlay.classList.remove(this._namespacify('is', 'closed'));
    overlay.classList.add(this._namespacify('is', 'opened'));
    this._setStyles(overlay, {
      display: 'block',
    });

    element.focus();
    window.location.hash = id;

    this.fire(this._namespacify('is', 'opened'));
  }

  /**
   * Closes a modal window.
   */
  close() {
    const element = document.querySelector(
      `.${this.options.namespace}.${this._namespacify('is', 'opened')}`
    );
    const overlay = document.querySelector(
      `.${this._namespacify('overlay')}.${this._namespacify('is', 'opened')}`
    );

    element.classList.remove(this._namespacify('is', 'opened'));
    element.classList.add(this._namespacify('is', 'closed'));
    element.setAttribute('aria-hidden', 'true');
    this._setStyles(element, {
      visibility: 'hidden',
    });

    overlay.classList.remove(this._namespacify('is', 'opened'));
    overlay.classList.add(this._namespacify('is', 'closed'));
    this._setStyles(overlay, {
      display: 'none',
    });

    this.state = 'closed';
    this.fire(this._namespacify('is', 'closed'));
  }

  /**
   * Destroys a modal.
   */
  destroy() {}

  _addModalEventlistners() {
    const closeButton = this.element.querySelector(`.${this.options.namespace}.close`);
    const cancelButton = this.element.querySelector(`.${this.options.namespace}.cancel`);
    const confirmButton = this.element.querySelector(`.${this.options.namespace}.confirm`);
    const overlay = document.querySelector(`.${this._namespacify('overlay')}`);

    // Add the event listener for the close button
    closeButton.addEventListener('click', (event) => {
      event.preventDefault();

      this.close();
    });

    if (cancelButton) {
      // Add the event listener for the cancel button
      cancelButton.addEventListener('click', (event) => {
        event.preventDefault();

        this.fire(this._namespacify('confirmation'));

        if (this.options.closeOnCancel) {
          this.close();
        }
      });
    }

    if (confirmButton) {
      // Add the event listener for the confirm button
      confirmButton.addEventListener('click', (event) => {
        event.preventDefault();

        this.fire(this._namespacify('cancellation'));

        if (this.options.closeOnConfirm) {
          this.close();
        }
      });
    }

    // Add the event listener for the overlay
    overlay.addEventListener('click', (event) => {
      const target = event.target;

      if (!target.classList.contains(this._namespacify('is', 'opened'))) {
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
        const attribut = target.getAttribute(this._namespacify('traget'));
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

  _createCloseButton() {
    const closeButton = this.element.querySelector(`.${this.options.namespace}.close`);

    if (closeButton === null) {
      const button = document.createElement('button');

      button.classList.add(this.options.namespace);
      button.classList.add('close');
      button.innerHTML = 'x';

      this.element.appendChild(button);
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
