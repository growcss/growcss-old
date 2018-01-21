//@flow
import type { Breakpoints } from '../DefaultBreakpoints';

/**
 * Find the next number in object.
 *
 * @param {Breakpoints} breakpoints
 * @param {number}      number      Number to use as a starting point
 *
 * @return {null | number} The number following `number`, if `number` was found. If `number` was not found, or `number` was the biggest number in the map, returns `null`.
 */
export const mapNextNumber = (breakpoints: Breakpoints, number: number): null | number => {
  let nextNumber = null;

  for (const key in breakpoints) {
    const value = breakpoints[key];

    if (typeof value === 'number' && value > number && (nextNumber === null || value < nextNumber)) {
      nextNumber = value;
    }
  }

  return nextNumber;
};
