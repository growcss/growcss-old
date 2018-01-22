//@flow
/**
 * Removes the unit (e.g. px, em, rem) from a value, returning the number only.
 *
 * @param {number | string} value
 *
 * @return {number}
 */
export const stripUnit = (value: number | string): number => {
  let str = value;

  if (typeof str === 'number') {
    str = Number(str).toString();
  }

  return +str.replace(/[^\d.-]/gi, '');
};
