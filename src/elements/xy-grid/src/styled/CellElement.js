// @flow
import styled from 'styled-components';
import mediaquery, { Breakpoints as DefaultBreakpoints } from '@growcss/behavior-media-queries';
import { Gutters as DefaultGutters } from '../components/Gutters';
import { CellStatic } from '../utils/CellStatic';
import { CellBase } from '../utils/CellBase';
import { CellOffset } from '../utils/CellOffset';

const BreakpointGutterCss = (props) => {
  let breakpoints = [];

  for(const breakpoint in DefaultBreakpoints) {
    if (props[breakpoint] !== undefined &&
      typeof props[breakpoint] === 'number' &&
      props[breakpoint] !== 0 &&
      DefaultGutters[breakpoint] !== undefined
    ) {
      const hasGutterType = props.gutterType !== undefined;

      breakpoints = breakpoints.concat(
        mediaquery(breakpoint)`${CellStatic(props[breakpoint], hasGutterType, DefaultGutters, (props.gutterType || 'padding'), breakpoint, props.vertical)}`
      );
    }
  }

  if (breakpoints.length !== 0) {
    breakpoints.push('flex-basis: auto;');
  }

  return breakpoints;
};

const OffsetCellCss = (props) => {
  const css = [];

  for(const breakpoint in DefaultBreakpoints) {
    if (props[breakpoint] !== undefined) {
      // css = css.concat(CellOffset());
    }
  }

  return css;
};

export const CellElement = styled.div`
  ${props => CellBase(props.cellType || 'full')}
  ${props => CellStatic((props.cellType || props.gridColumns), props.gutterType !== undefined, DefaultGutters, (props.gutterType || 'padding'), 'small', props.vertical)}
  ${props => BreakpointGutterCss(props)}
  ${props => OffsetCellCss(props)}
  ${props => props.gutterType === 'padding' ? 'box-sizing: border-box;' : ''}
`;
