//@flow
import type { GuttersType } from '../types/GuttersType';
import mediaquery from '@growcss/behavior-media-queries';
import remCalc from '@growcss/utils-remcalc';

export const CellOffset = (
  n: number,
  gutters: number | GuttersType,
  gutterType: string = 'margin',
  breackpoints = {},
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

  const strings = [];

  for (const key in breackpoints) {
    let css = '';

    for (const gutterItem of gutters) {
      const rem = remCalc(gutterItem / 2);
      const gutterSize = gutterType === 'margin' ? `calc(${n} + ${rem})` : n;

      css += `margin-${direction}: ${gutterSize};\n`;
    }

    strings.push(mediaquery(key, breackpoints)`${css}`);
  }

  return strings;
};
