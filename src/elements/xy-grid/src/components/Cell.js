//@flow
import React, { Component } from "react";
import { CellElement } from '../styled/CellElement';

type CellType = {
  children?: any,
  gridColumns: number,
  type: string | null,
  small: number,
  medium: number,
  large: number,
  xlarge: number,
  xxlarge: number,
  vertical: boolean
};

export default class Cell extends Component<CellType>
{
  static defaultProps = {
    gridColumns: 12,
    vertical: false,
    type: null,
    small: null,
    medium: null,
    large: null,
    xlarge: null,
    xxlarge: null,
  };

  render() {
    const {
      children,
      gridColumns,
      type,
      small,
      medium,
      large,
      xlarge,
      xxlarge,
      vertical
    } = this.props;

    return (<CellElement
      gridColumns={gridColumns}
      type={type}
      small={small}
      medium={medium}
      large={large}
      xlarge={xlarge}
      xxlarge={xxlarge}
      vertical={vertical}
      >
        {children}
      </CellElement>
    );
  }
}
