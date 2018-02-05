//@flow
import React, { Component } from "react";
import { CellElement } from '../styled/CellElement';
import type { GuttersType } from '../types';
import { Gutters as DefaultGutters } from './Gutters';

type CellType = {
  children: any,
  gridColumns: number,
  cellType?: string,
  gutterType?: string,
  gutterSizes?: string | number | GuttersType,
  vertical?: boolean,
  small?: number | string,
  smallOffset?: number,
  medium?: number | string,
  mediumOffset?: number,
  large?: number | string,
  largeOffset?: number,
  xlarge?: number | string,
  xlargeOffset?: number,
  xxlarge?: number| string,
  xxlargeOffset?: number,
};

export default class Cell extends Component<CellType>
{
  static defaultProps = {
    gridColumns: 12,
    gutterSizes: DefaultGutters,
    vertical: false,
  };

  render() {
    const {
      children,
      gridColumns,
      cellType,
      gutterType,
      gutterSizes,
      vertical,
      small,
      smallOffset,
      medium,
      mediumOffset,
      large,
      largeOffset,
      xlarge,
      xlargeOffset,
      xxlarge,
      xxlargeOffset,
    } = this.props;

    return (<CellElement
      gridColumns={gridColumns}
      cellType={cellType}
      gutterType={gutterType}
      gutterSizes={gutterSizes}
      vertical={vertical}
      small={small}
      smallOffset={smallOffset}
      medium={medium}
      mediumOffset={mediumOffset}
      large={large}
      largeOffset={largeOffset}
      xlarge={xlarge}
      xlargeOffset={xlargeOffset}
      xxlarge={xxlarge}
      xxlargeOffset={xxlargeOffset}
      >
        {children}
      </CellElement>
    );
  }
}
