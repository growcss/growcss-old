//@flow
import React, { Component } from "react";
import { XYGridElement } from '../styled/XYGridElement';
import type { GuttersType } from '../types';
import { Gutters as DefaultGutters } from './Gutters';

type GridYType = {
  children?: any,
  gutterType: string,
  gutterSizes: string | number | GuttersType,
  alignX: string,
  alignY: string,
};

export default class GridY extends Component<GridYType>
{
  static defaultProps = {
    gutters: DefaultGutters,
    alignX: 'left',
  };

  render() {
    const {
      children,
      gutterSizes,
      gutterType,
      alignX,
      alignY,
    } = this.props;

    const cells = React.Children.map(children, (thisArg) => {
      return React.cloneElement(
        thisArg,
        {
          vertical: false,
          gutterType,
          gutterSizes
        }
      );
    });

    return (
      <XYGridElement direction='vertical' gutterSizes={gutterSizes} alignX={alignX} alignY={alignY} wrap>
        {cells}
      </XYGridElement>
    );
  }
}
