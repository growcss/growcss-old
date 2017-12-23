import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Sticky extends Component {
  static propTypes = {
    topPosition: PropTypes.number,
    bottom: PropTypes.bool,
    placeholderStyles: PropTypes.object,
    bottomPosition: PropTypes.number,
    topOffset: PropTypes.number,
    bottomOffset: PropTypes.number,
    relative: PropTypes.bool,
    component: PropTypes.func,
    render: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node
    ]),
  };

  static defaultProps = {
    relative: false,
    topOffset: 0,
    bottomOffset: 0,
    topPosition: 0,
    bottomPosition: 0,
    bottom: false,
    placeholderStyles: {},
    disableCompensation: false,
    disableHardwareAcceleration: false
  };

  static contextTypes = {
    subscribe: PropTypes.func,
    unsubscribe: PropTypes.func,
    getParent: PropTypes.func
  };

  static childContextTypes = {
    stickyProps: PropTypes.object.isRequired
  };

  contentRef = content => {
    this.content = ReactDOM.findDOMNode(content);
  };

  placeholderRef = placeholder => {
    this.placeholder = placeholder
  };

  state = {
    ref: this.contentRef,
    isSticky: false,
    wasSticky: false,
    style: { },
    placeholderProps: {
      ref: this.placeholderRef,
      style: { }
    }
  };

  getChildContext() {
    return { stickyProps: this.getProps() };
  };

  getProps() {
    const { style, placeholderProps } = this.state;
    return {
      ...this.state,
      style: { ...style },
      placeholderProps: {
        ...placeholderProps,
        style: { ...placeholderProps.style }
      }
    };
  };

  componentWillMount() {
    if (!this.context.subscribe) {
      throw new TypeError("Expected Sticky to be mounted within StickyContainer");
    }

    this.context.subscribe(this.handleContainerEvent)
  };

  componentWillUnmount() {
    this.context.unsubscribe(this.handleContainerEvent)
  };

  handleFooter(distanceFromTop, distanceFromBottom, eventSource) {
    const parent = this.context.getParent();
    const placeholderClientRect = this.placeholder.getBoundingClientRect();
    const contentClientRect = this.content.getBoundingClientRect();
    const calculatedHeight = contentClientRect.height;
    let preventingStickyStateChanges = false;

    if (this.props.relative) {
      preventingStickyStateChanges = eventSource !== parent;
      distanceFromTop = -(eventSource.scrollTop + eventSource.offsetHeight + eventSource.offsetTop) + window.innerHeight;
    }

    const topDifference = distanceFromTop - this.props.topOffset + calculatedHeight;
    const wasSticky = !!this.state.isSticky;
    const isSticky = preventingStickyStateChanges ? wasSticky : (distanceFromTop < window.innerHeight - this.props.topOffset && distanceFromTop > window.innerHeight - this.placeholder.offsetHeight - this.placeholder.offsetTop + this.props.bottomOffset);

    distanceFromTop = (this.props.relative ? parent.scrollTop : distanceFromTop) - calculatedHeight;

    const style = !isSticky ? { } : {
      position: 'fixed',
      bottom: topDifference < (window.innerHeight) ? (this.props.relative ? window.innerHeight - (parent.offsetTop + parent.offsetHeight - parent.offsetParent.scrollTop) : this.props.bottomPosition) : (window.innerHeight - topDifference),
      left: placeholderClientRect.left,
      width: placeholderClientRect.width
    };

    if (!this.props.disableHardwareAcceleration) {
      style.transform = 'translateZ(0)';
    }

    this.setState({
      isSticky,
      wasSticky,
      distanceFromTop,
      distanceFromBottom,
      calculatedHeight,
      style
    });
  };

  handleHeader(distanceFromTop, distanceFromBottom, eventSource) {
    const parent = this.context.getParent();
    let preventingStickyStateChanges = false;

    if (this.props.relative) {
      preventingStickyStateChanges = eventSource !== parent;
      distanceFromTop = -(eventSource.scrollTop + eventSource.offsetTop) + this.placeholder.offsetTop
    }

    const placeholderClientRect = this.placeholder.getBoundingClientRect();
    const contentClientRect = this.content.getBoundingClientRect();
    const calculatedHeight = contentClientRect.height;
    const bottomDifference = distanceFromBottom - this.props.bottomOffset - calculatedHeight;
    const wasSticky = !!this.state.isSticky;
    const isSticky = preventingStickyStateChanges ? wasSticky : (distanceFromTop <= -this.props.topOffset && distanceFromBottom > -this.props.bottomOffset);

    distanceFromBottom = (this.props.relative ? parent.scrollHeight - parent.scrollTop : distanceFromBottom) - calculatedHeight;

    const style = !isSticky ? { } : {
      position: 'fixed',
      top: bottomDifference > 0 ? (this.props.relative ? parent.getBoundingClientRect().top - parent.offsetParent.scrollTop : this.props.topPosition) : bottomDifference,
      left: placeholderClientRect.left,
      width: placeholderClientRect.width
    };

    if (!this.props.disableHardwareAcceleration) {
      style.transform = 'translateZ(0)';
    }

    this.setState({
      isSticky,
      wasSticky,
      distanceFromTop,
      distanceFromBottom,
      calculatedHeight,
      style
    });
  };

  handleContainerEvent = ({ distanceFromTop, distanceFromBottom, eventSource }) => {
    if (this.props.footer) {
      this.handleFooter(distanceFromTop, distanceFromBottom, eventSource);
    } else {
      this.handleHeader(distanceFromTop, distanceFromBottom, eventSource);
    }
  };

  render() {
    const { component, children, render } = this.props;
    const props = this.getProps();

    return (
      component ? ( // component prop gets first priority
        React.createElement(component, props)
      ) : render ? ( // render prop is next
        render(props)
      ) : children ? ( // children come last
        <div>
          <div {...props.placeholderProps} />
          {typeof children === 'function' ? (
            children(props)
          ) : !Array.isArray(children) || children.length ? ( // Preact defaults to empty children array
            React.Children.only(children)
          ) : (
            null
          )}
        </div>
      ) : (
        null
      )
    );
  }
}
