//@flow
/**
 * Resets a cells width (or height if vertical is true) as well as strips its gutters.
 *
 * @param {boolean} vertical Set to true to output vertical (height) styles rather than widths.
 *
 * @return {string}
 */
export const CellRest = (vertical: boolean = true): string => {
  const direction: string = vertical === true ? 'height' : 'width';

  return `${direction}: auto;` +
    `max-${direction}: none;`
};
