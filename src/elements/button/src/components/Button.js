// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import CustomComponentProxy from './CustomComponentProxy';

const StyledButton = styled.button`
  ${getButtonStyles};
`;
StyledButton.displayName = 'StyledButton';

// Target the <a> here to override a:hover specificity.
const StyledLink = styled.a`
  a& {
    ${getButtonStyles};
  }
`;
StyledLink.displayName = 'StyledLink';

const StyledSpan = styled.span`
  ${getButtonStyles};
`;
StyledSpan.displayName = 'StyledSpan';

const createStyledComponent = () => {
  // Override pseudo-state specificity.
  // This is necessary because we don't know what DOM element the custom component will render.
  const component = styled(
    CustomComponentProxy,
  )`&,a&,&:hover,&:active,&:focus{${getButtonStyles}}`;

  component.displayName = 'StyledCustomComponent';

  return component;
};

type State = {
  isActive: boolean,
  isFocus: boolean,
  isHover: boolean,
};

class Button extends Component<ButtonProps, State> {
  /* eslint-disable react/no-unused-prop-types */

  static defaultProps = {
    appearance: 'default',
    isDisabled: false,
    isSelected: false,
    spacing: 'default',
    type: 'button',
    shouldFitContainer: false,
  };

  state = {
    isActive: false,
    isFocus: false,
    isHover: false,
  };

  componentWillReceiveProps(nextProps: ButtonProps) {
    if (this.props.component !== nextProps.component) {
      delete this.customComponent;
    }
  }

  customComponent = null;

  onMouseEnter = () => this.setState({ isHover: true });

  onMouseLeave = () => this.setState({ isHover: false, isActive: false });

  onMouseDown = (e: Event) => {
    e.preventDefault();
    this.setState({ isActive: true });
  };

  onMouseUp = () => this.setState({ isActive: false });

  onFocus = () => this.setState({ isFocus: true });

  onBlur = () => this.setState({ isFocus: false });

  /* Swallow click events when the button is disabled to prevent inner child clicks bubbling up */
  onInnerClick = (e: Event) => {
    if (this.props.isDisabled) {
      e.stopPropagation();
    }
    return true;
  };

  getStyledComponent() {
    if (this.props.component) {
      if (!this.customComponent) {
        this.customComponent = createStyledComponent();
      }
      return this.customComponent;
    }

    if (this.props.href) {
      return this.props.isDisabled ? StyledSpan : StyledLink;
    }

    return StyledButton;
  }

  render() {
    const {
      children,
      iconBefore,
      iconAfter,
      innerRef,
      shouldFitContainer,
    } = this.props;

    const buttonProps = getButtonProps(this);
    const StyledComponent = this.getStyledComponent();

    const iconIsOnlyChild: boolean = !!(
      (iconBefore && !iconAfter && !children) ||
      (iconAfter && !iconBefore && !children)
    );

    return (
      <StyledComponent innerRef={innerRef} {...buttonProps}>
        <ButtonWrapper onClick={this.onInnerClick} fit={!!shouldFitContainer}>
          {iconBefore ? (
            <IconWrapper
              spacing={buttonProps.spacing}
              isOnlyChild={iconIsOnlyChild}
            >
              {iconBefore}
            </IconWrapper>
          ) : null}
          {children ? (
            <ButtonContent
              followsIcon={!!iconBefore}
              spacing={buttonProps.spacing}
            >
              {children}
            </ButtonContent>
          ) : null}
          {iconAfter ? (
            <IconWrapper
              spacing={buttonProps.spacing}
              isOnlyChild={iconIsOnlyChild}
            >
              {iconAfter}
            </IconWrapper>
          ) : null}
        </ButtonWrapper>
      </StyledComponent>
    );
  }
}

export type ButtonType = Button;
export const ButtonBase = Button;

export default Button;