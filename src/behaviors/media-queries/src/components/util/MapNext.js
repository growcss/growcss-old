//@flow
import type { BreakpointsType } from '../../types';

/**
 * Find the next key in object.
 *
 * @param {BreakpointsType} breakpoints
 * @param {string}      key
 *
 * @return {number}
 */
export const mapNext = (breakpoints: BreakpointsType, key: string): number | null => {
  const keys: string[] = Object.keys(breakpoints);
  const objectCount: string[] = Object.keys(breakpoints);
  let i = 0;
  // Starts array index from 1
  keys.unshift('null');

  // If the Key Exists, Get the index of the key within the map and add 1 to it for the next breakpoint in the map
  if (key in breakpoints) {
    i = keys.indexOf(key) + 1;
  }

  // If the key doesn't exist, or it's the last key in the map, return null
  if (i > objectCount.length || i === 0) {

    return null;
  }

  return breakpoints[keys[i]];
};