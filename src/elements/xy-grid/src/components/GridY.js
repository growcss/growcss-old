//@flow
import React, { Component } from "react";
import { XYGridElement } from '../styled/XYGridElement';
import type { GuttersType } from '../types';
import { Gutters as DefaultGutters } from './Gutters';

type GridYType = {
  children?: any,
  gutterType: string,
  gutters: string | number | GuttersType
};

export default class GridY extends Component<GridYType>
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
      <XYGridElement direction='vertical' gutters={gutters} wrap>
        {cells}
      </XYGridElement>
    );
  }
}
