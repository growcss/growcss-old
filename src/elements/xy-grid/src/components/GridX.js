//@flow
import React, { Component } from "react";
import { XYGridElement } from '../styled/XYGridElement';
import type { GuttersType } from '../types';
import { Gutters as DefaultGutters } from './Gutters';

type GridXType = {
  children?: any,
  gutterType: string,
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
      gutters,
      gutterType
    } = this.props;

    const cells = React.Children.map(children, (thisArg) => {
      return React.cloneElement(
        thisArg,
        {
          vertical: false,
          gutterType
        }
      );
    });

    return (
      <XYGridElement direction='horizontal' gutters={gutters} wrap>
        {cells}
      </XYGridElement>
    );
  }
}
