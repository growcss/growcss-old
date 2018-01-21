//@flow
import styled from 'styled-components';
import remcalc from 'remcalc';

/**
 * Calculate the percentage size of a cell.
 *
 * @param {String|Number} size
 *
 * @return {String}
 */
const cellSize = (size: string | number): string => {
  if (typeof size === 'string' && size.includes('%')) {
    return size;
  }

  const value = size * 100;

  return value.toString();
};

/**
 * Sets base flex properties for cells.
 *
 * @param {String} size The size of your cell. Accepts `auto`, `shrink` or `grow`.
 *
 * @return {String}
 */
const cellBase = (size: string): string => {
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
 * @param {Boolean} vertical Set to true to output vertical (height) styles rather than widths.
 *
 * @return {String}
 */
const cellRest = (vertical: boolean): string => {
  const direction: string = vertical === true ? 'height' : 'width';

  return `${direction}: auto;` +
  `max-${direction}: none;`
}

/**
 *  Sets our cell widths or heights depending on gutter type.
 *
 * @param size
 * @param marginGutter
 * @param vertical
 *
 * @return {String}
 */
const cellProperies = (size: string, marginGutter, vertical: boolean): string => {
  const direction: string = vertical ? 'height' : 'width';

  if (vertical === 'full') {
    const val = (marginGutter === 0 ? '100%' : `calc(100% - ${remcalc(marginGutter)})`);

    return `${direction}: ${val};`;
  } else if (vertical === 'auto') {
    return `${direction}: auto;`;
  } else if (vertical === 'shrink') {
    return `${direction}: auto;`;
  }

  const val = marginGutter === 0 ? cellSize(size) : `calc(${cellSize(size)} - ${remcalc(marginGutter)})`;

  return `${direction}: ${val};`;
};

const Cell = styled.div`

`;
