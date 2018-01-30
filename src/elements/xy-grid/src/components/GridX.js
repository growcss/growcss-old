//@flow
import React,{ Component } from "react";
import { XYGridElement } from '../styled/XYGridElement';

type GridXType = {
  children?: any
};

export default class GridX extends Component<GridXType>
{
  render() {
    const { children } = this.props;

    return (<XYGridElement direction='horizontal' wrap>{children}</XYGridElement>);
  }
}
