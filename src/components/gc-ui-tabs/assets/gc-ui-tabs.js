class GcTabs {
  get behaviors() {
    return [Polymer.IronResizableBehavior];
  }

  beforeRegister() {
    this.is = 'gc-ui-tabs';
    this.properties = {
      active: Number,
      fullwidth: {
        type: Boolean,
        value: false,
      },
      mode: String,
      _default: Boolean,
      _thumbnailTabs: {
        type: Boolean,
        value: false,
      },
    };

    this.listeners = {
      'iron-resize': '_handleResize',
    };
  }

  registered() {
    this.accordionmode = false;
  }

  ready() {
    if (this.mode === 'thumbnail') {
      this._thumbnailTabs = (this.mode === 'thumbnail');
    } else {
      this._default = !this.fullwidth;
    }

    this.classList.add('mode-tab');

    this.async(() => {
      if (this.mode === 'thumbnail') {
        this.$$('#tabs').innerHTML = this._createFlexTabsList();
      } else {
        this.$$('#tabs').innerHTML = this._createTabsList();
      }

      if (this.mode !== 'vertical') {
        this._createAccordionNavigation();
      }

      if (this.mode !== 'thumbnail') {
        this._setActiveTab();
      }

      this._clickHandler();
      this._handleResize();
    }, 50);
  }

  attributChanged() {
    // just do same thing if any of the arguments change
    this.ready();
  }

  _handleResize() {
    if (this.mode === 'accordion') {
      this._changeToAccordionMode();
      return;
    }

    if (this.mode === 'vertical') {
      this._changeToVerticalAccordionMode();
      return;
    }

    if (this.mode === 'thumbnail') {
      if (window.innerWidth <= 960) {
        this._changeToAccordionMode();
      } else {
        this._changeToThumbnailTabMode();
      }

      return;
    }

    const tabs = this.querySelectorAll('#tabs dd');
    let tabswidth = 0;
    let i = 0;

    for (; i < tabs.length; i++) {
      tabswidth += tabs[i].offsetWidth + 2;
    }

    if (this.$$('#tabs') === null) {
      return;
    }

    if (this.$$('#tabs').offsetWidth < tabswidth) {
      this._changeToAccordionMode();
    } else {
      this._changeToTabMode();
    }
  }

  _changeToTabMode() {
    if (!this.accordionmode) {
      return;
    }

    this.classList.remove('mode-accordion');
    this.classList.add('mode-tab');
    this.accordionmode = false;
  }

  _changeToAccordionMode() {
    if (this.accordionmode) {
      return;
    }

    this.classList.add('mode-accordion');

    if (this.mode === 'thumbnail') {
      this.classList.remove('mode-thumbnail');
      this.classList.remove('mode-tab');
    } else {
      this.classList.remove('mode-tab');
    }

    this.accordionmode = true;
  }

  _changeToVerticalAccordionMode() {
    this.classList.add('mode-accordion-vertical');
    this.classList.remove('mode-tab');
  }

  _changeToThumbnailTabMode() {
    this.classList.add('mode-thumbnail');

    if (!this.accordionmode) {
      return;
    }

    this.classList.remove('mode-accordion');
    this.accordionmode = false;
  }

  _createTabsList() {
    let ddList = '';
    let i = 0;
    const tabs = this.querySelectorAll('gc-ui-tab');

    for (; i < tabs.length; i++) {
      const tab = tabs[i].getAttribute('title');

      ddList += `<dd data-index="${i}"><span>${tab}</span></dd>`;
    }

    return ddList;
  }

  _createFlexTabsList() {
    let blockList = '';
    let i = 0;
    const tabs = this.querySelectorAll('gc-ui-tab');
    const images = this._createImages();
    const l = tabs.length;

    for (; i < l; i++) {
      const tab = tabs[i].getAttribute('title');
      /*eslint-disable */
      blockList += `<grid-flex-col class="small-${l+1}" data-index="${i}"><span>${tab}</span> ${images[i]}</grid-flex-col>`;
      /*eslint-enable */
    }

    return blockList;
  }

  _createImages() {
    let i = 0;
    const images = [];
    const tabs = this.querySelectorAll('gc-ui-tab');

    for (; i < tabs.length; i++) {
      const src = tabs[i].getAttribute('thumbnail');
      const title = tabs[i].getAttribute('title');

      images.push(`<img src="${src}" alt="${title}"/>`);
    }

    return images;
  }

  _createAccordionNavigation() {
    let i = 0;
    const tabs = this.querySelectorAll('gc-ui-tab');

    for (; i < tabs.length; i++) {
      const tab = tabs[i].getAttribute('title');
      const accordion = document.createElement('div');
      const span = document.createElement('span');
      const spanlabel = document.createTextNode(tab);

      accordion.setAttribute('class', 'accordion-navigation');
      accordion.setAttribute('data-index', i);
      span.appendChild(spanlabel);
      accordion.appendChild(span);

      this.$$('#tabs').parentNode.insertBefore(accordion, tabs[i]);
    }
  }

  _activeTabAndContent(index) {
    const tabsContent = this.querySelectorAll('gc-ui-tab');
    const tabs = this._getTabs();

    const accordion = this.querySelectorAll('.accordion-navigation');
    let i = 0;

    for (; i < tabsContent.length; i++) {
      tabs[i].classList.remove('active');

      if (this.mode !== 'vertical') {
        accordion[i].classList.remove('active');
      }

      if (this.mode === 'thumbnail') {
        tabs[i].querySelector('img').setAttribute('style', 'display: none');
      }

      tabsContent[i].classList.remove('active');
    }

    tabs[index].classList.add('active');

    if (this.mode !== 'vertical') {
      accordion[index].classList.add('active');
    }

    tabsContent[index].classList.add('active');

    this.classList.remove('has-no-active');
  }

  _clickHandler() {
    const tabs = this._getTabs();

    const accordion = this.querySelectorAll('.accordion-navigation');
    let i = 0;

    for (; i < tabs.length; i++) {
      tabs[i].addEventListener('click', (event) => {
        this._activeTabAndContent(event.currentTarget.getAttribute('data-index'));
      });

      if (this.mode !== 'vertical') {
        accordion[i].addEventListener('click', (event) => {
          this._activeTabAndContent(event.currentTarget.getAttribute('data-index'));
        });
      }
    }
  }

  _setActiveTab() {
    const active = this._getInitialActiveTab();

    if (!active) {
      this.classList.add('has-no-active');
    } else {
      this._activeTabAndContent(active - 1);
    }
  }

  _getInitialActiveTab() {
    const active = this.active;

    if (typeof active === 'undefined') {
      return 1;
    }

    return parseInt(active, 10);
  }

  _getTabs() {
    if (this.mode === 'thumbnail') {
      return this.querySelectorAll('#tabs grid-flex-col');
    }

    return this.querySelectorAll('#tabs dd');
  }
}

/*eslint-disable */
Polymer(GcTabs);
/*eslint-enable */
