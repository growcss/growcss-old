'use strict';

/*eslint-disable */
const GrowCss = GrowCss || {};
/*eslint-enable */

const GcEventEmitter = {
  properties: {
    eventemitter: {
      type: Object,
      value: {},
    },
  },

  registered() {
    this.eventemitter = new EventEmitter();
  },

  listen(evt, listeners) {
    if (Array.isArray(listeners)) {
      return this.eventemitter.addListeners(evt, listeners);
    }

    return this.eventemitter.addListener(evt, listeners);
  },

  fire(evt, args) {
    return this.eventemitter.emitEvent(evt, args);
  },

  forget(evt, listeners) {
    if (Array.isArray(listeners)) {
      return this.eventemitter.removeListeners(evt, listeners);
    }

    return this.eventemitter.removeListener(evt, listeners);
  },

  listenOnce(evt, listener) {
    return this.eventemitter.addOnceListener(evt, listener);
  },
};

GrowCss.EventEmitter = GcEventEmitter;
