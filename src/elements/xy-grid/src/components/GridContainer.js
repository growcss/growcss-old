//@flow
import React, { Component } from 'react';
import remCalc from '@growcss/utils-remcalc';
import { gutters as defaultGutters } from './Gutters';
import { GridContainerElement } from '../styled/GridContainerElement';
import type { GuttersType } from '../types';

type GridContainerProps = {
  children?: any,
  layout?: string,
  width?: string | number,
  paddingGutter?: GuttersType | number | string,
};

export default class GridContainer extends Component<GridContainerProps> {
  static propTypes: GridContainerProps;

  static defaultProps = {
    width: remCalc(1200),
    paddingGutter: defaultGutters,
  };

  render() {
    const { layout, children, width, paddingGutter } = this.props;

    let maxWidth = width;
    let gutter = paddingGutter;

    if (layout === 'fluid' || layout === 'full') {
      maxWidth = '100%';
    }

    if (layout === 'full') {
      gutter = '0';
    }

    return (
      <GridContainerElement maxWidth={maxWidth} paddingGutter={gutter}>
        {children}
      </GridContainerElement>
    );
  }
}
