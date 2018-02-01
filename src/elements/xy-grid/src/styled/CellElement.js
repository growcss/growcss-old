// @flow
import styled from 'styled-components';
import mediaquery, { DefaultBreakpoints } from '@growcss/behavior-media-queries';
import { Gutters as DefaultGutters } from '../components/Gutters';
import { CellStatic } from '../utils/CellStatic';
import { CellBase } from '../utils/CellBase';
import { BreakpointCell } from '../utils/BreakpointCell';

const BreakpointGutterCss = (props) => {
  const breakpoints = [];
  let lastBreakpoint = 'small';

  for(const breakpoint in DefaultBreakpoints) {
    const breakpointName = DefaultBreakpoints[breakpoint];

    if (DefaultGutters[breakpointName] !== undefined) {
      lastBreakpoint = breakpointName;
    }

    if (props[breakpoint] !== undefined) {
      const cssString = BreakpointCell(props[breakpoint], lastBreakpoint, props.vertical);

      breakpoints.push(mediaquery(breakpoint)`${cssString}`);
    }
  }

  return breakpoints;
};

export const CellElement = styled.div`  
  ${props => CellBase(props.cellSize || 'full')}
  ${props => CellStatic((props.cellSize || props.gridColumns), props.gutterType !== undefined, DefaultGutters, (props.gutterType || 'padding'), 'small', props.vertical)}
  ${props => BreakpointGutterCss(props)}
`;
