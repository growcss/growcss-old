import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  static propTypes = {

  };

  constructor() {
    super();

    this._onClick = this._onClick.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseUp = this._onMouseUp.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);

    this.state = {
      mouseActive: false,
      focus: false,
    };
  }

  _onClick(event) {
    const { method, onClick, path } = this.props;
    const { router } = this.context;
    const modifierKey = event.ctrlKey || event.metaKey;

    if (modifierKey && !onClick) {
      return true;
    }

    event.preventDefault();

    if (method === 'push') {
      (router.history || router).push(path);
    } else if (method === 'replace') {
      (router.history || router).replace(path);
    }

    if (onClick) {
      onClick(...arguments);
    }
  }

  _onMouseDown(event) {
    const { onMouseDown } = this.props;

    this.setState({ mouseActive: true });

    if (onMouseDown) {
      onMouseDown(event);
    }
  }

  _onMouseUp(event) {
    const { onMouseUp } = this.props;

    this.setState({ mouseActive: false });

    if (onMouseUp) {
      onMouseUp(event);
    }
  }

  _onFocus(event) {
    const { onFocus } = this.props;

    const { mouseActive } = this.state;

    if (mouseActive === false) {
      this.setState({ focus: true });
    }

    if (onFocus) {
      onFocus(event);
    }
  }

  _onBlur(event) {
    const { onBlur } = this.props;

    this.setState({ focus: false });

    if (onBlur) {
      onBlur(event);
    }
  }
}
