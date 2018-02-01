//@flow
import React, { Component } from "react";
import { CellElement } from '../styled/CellElement';

type CellType = {
  children?: any,
  gridColumns: number,
  cellSize?: string,
  gutterType?: string,
  small?: number,
  medium?: number,
  large?: number,
  xlarge?: number,
  xxlarge?: number,
  vertical: boolean
};

export default class Cell extends Component<CellType>
{
  static defaultProps = {
    gridColumns: 12,
    vertical: false,
  };

  render() {
    const {
      children,
      gridColumns,
      vertical,
      cellSize,
      gutterType,
      small,
      medium,
      large,
      xlarge,
      xxlarge,
    } = this.props;

    return (<CellElement
      gridColumns={gridColumns}
      small={small}
      medium={medium}
      large={large}
      xlarge={xlarge}
      xxlarge={xxlarge}
      cellSize={cellSize}
      gutterType={gutterType}
      vertical={vertical}
      >
        {children}
      </CellElement>
    );
  }
}
