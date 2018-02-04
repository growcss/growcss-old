//@flow
import React, { Component } from 'react';
import remCalc from '@growcss/utils-remcalc';
import { Gutters as DefaultGutters } from './Gutters';
import { GridContainerElement } from '../styled/GridContainerElement';
import type { GuttersType } from '../types';

type GridContainerProps = {
  children: any,
  type?: string,
  width?: string | number,
  paddingGutter?: GuttersType | number | string,
};

export default class GridContainer extends Component<GridContainerProps>
{
  static defaultProps = {
    width: remCalc(1200),
    paddingGutter: DefaultGutters,
  };

  render() {
    const { type, children, width, paddingGutter } = this.props;

    let maxWidth = width;
    let gutter = paddingGutter;

    if (type === 'fluid' || type === 'full') {
      maxWidth = '100%';
    }

    if (type === 'full') {
      gutter = '0';
    }

    return (
      <GridContainerElement maxWidth={maxWidth} paddingGutter={gutter} type={type}>
        {children}
      </GridContainerElement>
    );
  }
}
