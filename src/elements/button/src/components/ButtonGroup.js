// @flow
import React, {
  Children,
  cloneElement,
  Component,
  type ChildrenArray
} from 'react';
import {Grid, GridCol} from 'griz';
import type { ButtonAppearances } from '../types';

export type ButtonGroupProps = {
  /** The appearance to apply to all buttons. */
  appearance?: ButtonAppearances,
  /** The buttons to render. */
  children: ChildrenArray<*>,
};

class ButtonGroup extends Component<ButtonGroupProps> {
  render() {
    const { appearance, children } = this.props;

    return (
      <Grid>
        {Children.map(children, (child, idx) => {
          if (child === null || child === false) {
            return child;
          }
          return (
            <GridCol key={idx}>
              {appearance ? cloneElement(child, { appearance }) : child}
            </GridCol>
          );
        })}
      </Grid>
    );
  }
}

export default ButtonGroup;
