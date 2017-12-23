import React from 'react';
import { mount } from 'enzyme';
import { StickyContainer } from '../../../src/behaviors/sticky';

const attachTo = document.getElementById('mount');

describe('StickyContainer', () => {
  let container;
  let containerNode;

  beforeEach(() => {
    container = mount(<StickyContainer />, { attachTo });
    containerNode = container.instance();
  });

  describe('getChildContext', () => {
    let childContext;
    beforeEach(() => {
      childContext = containerNode.getChildContext();
    });

    it('should expose a subscribe function that adds a callback to the subscriber list', () => {
      expect(typeof childContext.subscribe)
        .toBe('function');

      const callback = () => ({});
      expect(containerNode.subscribers)
        .toHaveLength(0);
      childContext.subscribe(callback);
      expect(containerNode.subscribers[0])
        .toEqual(callback);
    });

    it('should expose an unsubscribe function that removes a callback from the subscriber list', () => {
      expect(typeof childContext.unsubscribe)
        .toBe('function');

      const callback = () => ({});
      childContext.subscribe(callback);
      expect(containerNode.subscribers[0])
        .toEqual(callback);
      childContext.unsubscribe(callback);
      expect(containerNode.subscribers)
        .toHaveLength(0);
    });

    it("should expose a getParent function that returns the container's underlying DOM ref", () => {
      expect(typeof childContext.getParent)
        .toBe('function');
      expect(childContext.getParent())
        .toEqual(containerNode.node);
    });
  });

  describe('subscribers', () => {
    let subscribe;
    beforeEach(() => {
      subscribe = containerNode.getChildContext().subscribe;
    });

    // container events
    ['scroll', 'touchstart', 'touchmove', 'touchend']
      .forEach((eventName) => {
        it(`should be notified on container ${eventName} event`, (done) => {
          expect(containerNode.subscribers)
            .toHaveLength(0);
          subscribe(() => done());
          container.simulate(eventName);
        });
      });

    // window events
    ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load']
      .forEach((eventName) => {
        it(`should be notified on window ${eventName} event`, (done) => {
          expect(containerNode.subscribers)
            .toHaveLength(0);
          subscribe(() => done());
          window.dispatchEvent(new Event(eventName));
        });
      });
  });

  describe('notifySubscribers', () => {
    it('should publish document.body as eventSource to subscribers when window event', (done) => {
      containerNode.subscribers = [
        ({ eventSource }) => (expect(eventSource)
          .toEqual(document.body), done()),
      ];
      containerNode.notifySubscribers({ currentTarget: window });
    });

    it('should publish node as eventSource to subscribers when div event', (done) => {
      containerNode.subscribers = [
        ({ eventSource }) => (expect(eventSource)
          .toEqual(containerNode.node), done()),
      ];
      containerNode.notifySubscribers({ currentTarget: containerNode.node });
    });

    it('should publish node top and bottom to subscribers', (done) => {
      containerNode.subscribers = [
        ({ distanceFromTop, distanceFromBottom }) => {
          expect(distanceFromTop)
            .toEqual(100);
          expect(distanceFromBottom)
            .toEqual(200);
          done();
        },
      ];

      containerNode.node.getBoundingClientRect = () => ({
        top: 100,
        bottom: 200,
      });
      containerNode.notifySubscribers({ currentTarget: window });
    });
  });

  it('should not publish null node top and bottom to subscribers', (done) => {
    let subscribersCalled = false;

    containerNode.subscribers = [
      () => {
        subscribersCalled = true;
      },
    ];

    containerNode.node = null;
    containerNode.notifySubscribers({ currentTarget: window });
    expect(containerNode.framePending)
      .toBeTruthy();

    raf(() => {
      expect(containerNode.framePending)
        .toBeFalsy();
      expect(subscribersCalled)
        .toBeFalsy();
      done();
    });
  });
});
