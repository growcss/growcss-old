//@flow
import type { GuttersType } from '../types/GuttersType';
import { Gutters as DefaultGutters } from '../components/Gutters';
import { Gutters } from './Gutters';
import { CellBase } from './CellBase';
import { CellProperties } from './CellProperties';

/**
 * Creates a cell for your grid.
 *
 * @param {string}               size           The size of your cell. Can be `full` (default) for 100% width, `auto` to use up available space and `shrink` to use up only required space.
 * @param {boolean}              outputGutter   Whether or not to output gutters.
 * @param {number | GuttersType} gutters        array or number value for gutters.
 * @param {string}               gutterType
 * @param {Array<string>}        gutterPosition The position to apply gutters to. Accepts `top`, `bottom`, `left`, `right` in any combination.
 * @param {string}               breakpoint     The name of the breakpoint size in your gutters array to get the size from.
 * @param {boolean}              vertical       Set to true to output vertical (height) styles rather than widths.
 *
 * @return {string}
 */
export const Cell = (
  size: string = 'full',
  outputGutter: boolean = true,
  gutters: number | GuttersType = DefaultGutters,
  gutterType: string = 'margin',
  gutterPosition: Array<string>  = ['right', 'left'],
  breakpoint: string = 'small',
  vertical: boolean = false,
) => {
  let gutter;

  if (typeof gutters === 'object' && breakpoint in gutters) {
    gutter = gutters[breakpoint];
  } else if (typeof gutters === 'number') {
    gutter = gutters;
  } else {
    throw new Error(`No gutters were found in "${gutters}" for "breakpoint: ${breakpoint}", cell was not generated.`);
  }

  let css = '';

  css += CellBase(size);

  if (gutterType === 'margin') {
    css += CellProperties(size, gutter, vertical);
  } else {
    css += CellProperties(size, 0, vertical);
  }

  if (outputGutter === true) {
    const guttersValue = Gutters(gutter, gutterType, gutterPosition);

    if (Array.isArray(guttersValue)) {
      for (const value: string in guttersValue) {
        css += value;
      }
    } else {
      css += guttersValue;
    }
  }

  return css;
};

