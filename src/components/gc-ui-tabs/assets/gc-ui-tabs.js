'use strict';

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
      default: Boolean,
    };

    this.listeners = {
      'iron-resize': 'handleResize',
    };
  }

  registered() {
    this.accordionmode = false;
  }

  ready() {
    this.default = !this.fullwidth;

    this.classList.add('mode-tab');

    this.async(() => {
      this.querySelector('#tabs').innerHTML = this.createTabsList();

      if (this.mode !== 'vertical') {
        this.createAccordionNavigation();
      }

      this.setActiveTab();
      this.clickHandler();
      this.handleResize();
    }, 50);
  }

  attributChanged() {
    this.ready();
  }

  handleResize() {
    if (this.mode === 'accordion') {
      this.changeToAccordionMode();
      return;
    }

    if (this.mode === 'vertical') {
      this.changeToVerticalAccordionMode();
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
      this.changeToAccordionMode();
    } else {
      this.changeToTabMode();
    }
  }

  changeToTabMode() {
    if (!this.accordionmode) {
      return;
    }

    this.classList.remove('mode-accordion');
    this.classList.add('mode-tab');
    this.accordionmode = false;
  }

  changeToAccordionMode() {
    if (this.accordionmode) {
      return;
    }

    this.classList.add('mode-accordion');
    this.classList.remove('mode-tab');
    this.accordionmode = true;
  }

  changeToVerticalAccordionMode() {
    this.classList.add('mode-accordion-vertical');
    this.classList.remove('mode-tab');
  }

  createTabsList() {
    let ddList = '';
    let i = 0;
    const tabs = this.querySelectorAll('gc-ui-tab');

    for (; i < tabs.length; i++) {
      const tab = tabs[i].getAttribute('title');

      ddList += `<dd data-index="${i}">${tab}</dd>`;
    }

    return ddList;
  }

  createAccordionNavigation() {
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

  activeTabAndContent(index) {
    const tabsContent = this.querySelectorAll('gc-ui-tab');
    const tabs = this.querySelectorAll('#tabs dd');
    const accordion = this.querySelectorAll('.accordion-navigation');
    let i = 0;

    for (; i < tabsContent.length; i++) {
      tabs[i].classList.remove('active');

      if (this.mode !== 'vertical') {
        accordion[i].classList.remove('active');
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

  clickHandler() {
    const tabs = this.querySelectorAll('#tabs dd');
    const accordion = this.querySelectorAll('.accordion-navigation');
    let i = 0;

    for (; i < tabs.length; i++) {
      tabs[i].addEventListener('click', (event) => {
        this.activeTabAndContent(event.target.getAttribute('data-index'));
      });

      if (this.mode !== 'vertical') {
        accordion[i].addEventListener('click', (event) => {
          this.activeTabAndContent(event.target.parentElement.getAttribute('data-index'));
        });
      }
    }
  }

  getInitialActiveTab() {
    const active = this.active;

    if (typeof active === 'undefined') {
      return 1;
    }

    return parseInt(active, 10);
  }

  setActiveTab() {
    const active = this.getInitialActiveTab();

    if (!active) {
      this.classList.add('has-no-active');
    } else {
      this.activeTabAndContent(active - 1);
    }
  }
}

/*eslint-disable */
Polymer(GcTabs);
/*eslint-enable */
