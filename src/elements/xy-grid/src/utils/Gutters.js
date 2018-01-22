//@flow
import { css } from 'styled-components';
import type { GuttersType } from '../types/GuttersType';
import { gutters as defaultGutters } from '../components/Gutters';
import mediaquery from '@growcss/behavior-media-queries';

export const gutter = (
  gutters: number | GuttersType = defaultGutters,
  gutterType: string = 'margin',
  gutterPosition: Array<string> =  ['right', 'left'],
  negative: boolean = false,
) => {
  const operator = negative === true ? '-' : '';
  // If we have declared negative gutters, force type to `margin.
  const gType = negative === true ? 'margin' : gutterType;
  let string = '';

  // Output our margin gutters.
  if (typeof gutters === 'object') {
    for (const key in gutters) {
      const gutter = gutters[key] / 2;
      let css = '';

      for (const gutterPositionItem of gutterPosition) {
        css = css + `${gType}-${gutterPositionItem}: ${operator}${gutter}`;
      }

      string = string + mediaquery(key)`${css}`;
    }

    return string;
  }

  const gutter = gutters / 2;

  for (const gutterPositionItem of gutterPosition) {
    string = string + css`
          ${gType}-${gutterPositionItem}: ${operator}${gutter};
        `;
  }

  return string;
};
