//@flow

/**
 * Removes the unit (e.g. px, em, rem) from a value, returning the number only.
 *
 * @param {number | string} value
 *
 * @return {string}
 */
export const stripUnit = (value: number | string): string => {
  let str = value;

  if (typeof str === 'number') {
    str = Number(str).toString();
  }

  return str.replace(/[^\d\.-]/gi, '');
};
