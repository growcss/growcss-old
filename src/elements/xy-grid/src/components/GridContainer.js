//@flow
import {Component} from "react";
import PropTypes from 'prop-types';
import { ThemeProvider, withTheme } from 'styled-components';

export type GridContainerProps = {
  children?: any,
  // Fluid: To stretch the content to the full width of the available space.
  // Full:  To stretch the content to the full width of the available space and remove grid container padding.
  layout?: fluid | full,
};

export default class GridContainer extends Component<GridContainerProps> {
  props: GridContainerProps;

  render() {
    const { layout, children } = this.props;

    return (
        <GridContainer layout={layout}>
          {children}
        </GridContainer>
    );
  }
}
