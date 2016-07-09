/*eslint-disable */
const GrowCss = GrowCss || {};
/*eslint-enable */

class GrowCssEventEmitter extends EventEmitter {
  listen(evt, listeners) {
    if (Array.isArray(listeners)) {
      return this.addListeners(evt, listeners);
    }

    return this.addListener(evt, listeners);
  }

  fire(evt, args) {
    return this.emitEvent(evt, args);
  }

  forget(evt, listeners) {
    if (Array.isArray(listeners)) {
      return this.removeListeners(evt, listeners);
    }

    return this.removeListener(evt, listeners);
  }

  listenOnce(evt, listener) {
    return this.addOnceListener(evt, listener);
  }
}

const GcEventEmitter = {
  registered() {
    this['event-emitter'] = new GrowCssEventEmitter();
    this.ee = this['event-emitter'];
  },
};

GrowCss.EventEmitterBehavior = GcEventEmitter;
