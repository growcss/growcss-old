//@flow
import mediaquery, { Breakpoints } from '@growcss/behavior-media-queries';
import type { BreakpointsType } from '@growcss/behavior-media-queries';
import remCalc from '@growcss/utils-remcalc';
import type { GuttersType } from '../types';
import { Gutters as DefaultGutters } from '../components/Gutters';
import { CellSize } from './CellSize';

const stripUnits = require('strip-units');

export const CellOffset = (
  n: number | string,
  gutters: GuttersType = DefaultGutters,
  gutterType: string = 'margin',
  breakpoints: BreakpointsType = Breakpoints,
  vertical: boolean = false,
  rtl: boolean = false
) => {
  let direction;

  if (vertical === true) {
    direction = 'top';
  } else if (rtl === true) {
    direction = 'right'
  } else {
    direction = 'left'
  }

  let strings = [];

  for (const breakpoint in breakpoints) {
    if (typeof breakpoint === 'number') {
      let css = '';

      for (const sizeName of gutters) {
        const gutter = remCalc(stripUnits(gutters[sizeName]) / 2);
        const gutterSize = gutterType === 'margin' ? `calc(${CellSize(n)} + ${gutter})` : CellSize(n);

        css += `margin-${direction}: ${gutterSize};\n`;
      }

      strings = strings.concat(mediaquery(breakpoint, breakpoints)`${css}`);
    }
  }

  return strings;
};
