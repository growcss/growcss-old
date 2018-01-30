//@flow
import remCalc from '@growcss/utils-remcalc';
import mediaquery from '@growcss/behavior-media-queries';
import type { GuttersType } from '../types/GuttersType';
import { gutters as DefaultGutters } from '../components/Gutters';
import { Gutters } from './Gutters';

/**
 * Calculate the percentage size of a cell.
 *
 * @param {string|number} size
 * @param {number}        gridColumns
 *
 * @return {string}
 */
export const CellSize = (size: string | number, gridColumns: number = 12): string => {
  if (typeof size === 'string' && size.includes('%')) {
    return size;
  } else if (+size < 1) {
    return `${Number(size) * 100}%`;
  }

  return `${(Number(size) * 100) / gridColumns}%`;
};

/**
 * Sets base flex properties for cells.
 *
 * @param {string} size The size of your cell. Accepts `auto`, `shrink` or `grow`.
 *
 * @return {string}
 */
export const CellBase = (size: string = 'full'): string => {
  if (size === 'auto') {
    return 'flex: 1 1 0px;';
  } else if (size === 'shrink') {
    return 'flex: 0 0 auto;';
  } else if (size === 'grow') {
    return 'flex: 1 0 auto;';
  }

  // This is the base style, all others inherit from it
  return 'flex: 0 0 auto;' +
    'min-height: 0px;' +
    'min-width: 0px;';
};

/**
 * Resets a cells width (or height if vertical is true) as well as strips its gutters.
 *
 * @param {boolean} vertical Set to true to output vertical (height) styles rather than widths.
 *
 * @return {string}
 */
export const CellRest = (vertical: boolean = true): string => {
  const direction: string = vertical === true ? 'height' : 'width';

  return `${direction}: auto;` +
  `max-${direction}: none;`
};

/**
 *  Sets our cell widths or heights depending on gutter type.
 *
 * @param {string | number} size
 * @param {string | number} marginGutter
 * @param {boolean}         vertical
 *
 * @return {string}
 */
const CellProperties = (size: string | number, marginGutter: string | number, vertical: boolean): string => {
  const direction: string = vertical ? 'height' : 'width';

  if (size === 'full') {
    const val = (marginGutter === 0 ? '100%' : `calc(100% - ${remCalc(marginGutter)})`);

    return `${direction}: ${val};`;
  } else if (size === 'auto') {
    return `${direction}: auto;`;
  } else if (size === 'shrink') {
    return `${direction}: auto;`;
  }

  const val = marginGutter === 0 ? CellSize(size) : `calc(${CellSize(size)} - ${remCalc(marginGutter)})`;

  return `${direction}: ${val};`;
};

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

/**
 * Creates a single breakpoint sized grid.
 *
 * @param {string | number}      size           The size of your cell. Can be `full` (default) for 100% width, `auto` to use up available space and `shrink` to use up only required space.
 * @param {boolean}              outputGutter   Whether or not to output gutters.
 * @param {number | GuttersType} gutters        array or number value for gutters.
 * @param {string}               gutterType
 * @param {string}               breakpoint     The name of the breakpoint size in your gutters array to get the size from.
 * @param {boolean}              vertical       Set to true to output vertical (height) styles rather than widths.
 *
 * @return {string}
 */
export const CellStatic = (
  size: string | number = 'full',
  outputGutter: boolean = true,
  gutters: number | GuttersType = DefaultGutters,
  gutterType: string = 'margin',
  breakpoint: string = 'small',
  vertical: boolean = false,
) => {
  let gutter;
  let gutterPosition;

  if (typeof gutters === 'object' && breakpoint in gutters) {
    gutter = gutters[breakpoint];
  } else if (typeof gutters === 'number') {
    gutter = gutters;
  } else {
    throw new Error(`No gutters were found in "${gutters}" for "breakpoint: ${breakpoint}", cell was not generated.`);
  }

  if (vertical === true) {
    gutterPosition = ['top', 'bottom'];
  } else {
    gutterPosition = ['left', 'right'];
  }

  let css = '';

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

export const BreakpointCell = (
  n: number | null,
  breakpoint: string,
  vertical: boolean
): string | Array<string> => {
  if (n === null) {
    return '';
  }

  if (!(breakpoint in DefaultGutters)) {
    return '';
  }

  return mediaquery(breakpoint)`${CellStatic(n, false, DefaultGutters, 'margin', breakpoint, vertical)}`;
};
