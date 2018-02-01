//@flow
import mediaquery from '@growcss/behavior-media-queries';
import { Gutters as DefaultGutters } from '../components/Gutters';
import { CellStatic } from './CellStatic';

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
