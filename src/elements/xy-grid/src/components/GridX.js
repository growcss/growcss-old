//@flow
import React, { Component } from "react";
import { XYGridElement } from '../styled/XYGridElement';
import type { GuttersType } from '../types';
import { Gutters as DefaultGutters } from './Gutters';

type GridXType = {
  children?: any,
  gutters: string | number | GuttersType
};

export default class GridX extends Component<GridXType>
{
  static defaultProps = {
    gutters: DefaultGutters,
  };

  render() {
    const {
      children,
      gutters
    } = this.props;

    return (<XYGridElement direction='horizontal' gutters={gutters} wrap>{children}</XYGridElement>);
  }
}
