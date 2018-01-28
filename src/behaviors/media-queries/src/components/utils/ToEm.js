//@flow
const stripUnits = require('strip-units');

/**
 * Converts a unitless, pixel, or rem value to em, for use in breakpoints.
 *
 * @param {number | string} value
 *
 * @return {string}
 */
export const toEm = (value: number | string): string => {
  const regex = new RegExp('px+$');

  if (
    (typeof value === 'string' && regex.exec(value) !== null) ||
    isNaN(value) !== true
  ) {
    return `${stripUnits(value) / 16}em`;
  }

  return `${stripUnits(value)}em`;
};
