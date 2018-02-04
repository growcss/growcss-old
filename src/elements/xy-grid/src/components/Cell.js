//@flow
import React, { Component } from "react";
import { CellElement } from '../styled/CellElement';

type CellType = {
  children: any,
  gridColumns: number,
  cellType?: string,
  gutterType?: string,
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
  vertical: boolean
};

export default class Cell extends Component<CellType>
{
  static defaultProps = {
    gridColumns: 12,
  };

  render() {
    const {
      children,
      gridColumns,
      vertical,
      cellType,
      gutterType,
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
      cellType={cellType}
      gutterType={gutterType}
      vertical={vertical}
      >
        {children}
      </CellElement>
    );
  }
}
