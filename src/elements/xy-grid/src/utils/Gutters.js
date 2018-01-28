//@flow
import type { GuttersType } from '../types/GuttersType';
import mediaquery from '@growcss/behavior-media-queries';
import remCalc from '@growcss/utils-remcalc';

const stripUnits = require('strip-units');

/**
 * Create gutters for a cell/container.
 *
 * @param {number | GuttersType} gutters
 * @param {string}               gutterType
 * @param {Array<string>}        gutterPosition
 * @param {boolean}              negative
 *
 * @return {Array<string>}
 */
export const gutters = (
  gutters: number | GuttersType,
  gutterType: string = 'margin',
  gutterPosition: Array<string> = ['right', 'left'],
  negative: boolean = false,
): Array<string> => {
  let operator = negative === true ? '-' : '';
  // If the value is already negative, remove the operator and set negative to true.
  if (typeof gutters === 'number' && gutters < 0) {
    negative = true;
    operator = '';
  }

  // If we have declared negative gutters, force type to `margin.
  gutterType = negative === true ? 'margin' : gutterType;

  const strings = [];

  // Output our margin gutters.
  if (typeof gutters === 'object') {
    for (const key in gutters) {
      const gutter = remCalc(stripUnits(gutters[key]) / 2);
      let css = '';

      for (const gutterPositionItem of gutterPosition) {
        css += `${gutterType}-${gutterPositionItem}: ${operator}${gutter};`;
      }

      strings.push(mediaquery(key)`${css}`);
    }

    return strings;
  }

  const gutter = remCalc(stripUnits(gutters) / 2);

  for (const gutterPositionItem of gutterPosition) {
    strings.push(`${gutterType}-${gutterPositionItem}: ${operator}${gutter};`);
  }

  return strings;
};
