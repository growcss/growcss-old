//@flow
import { css } from 'styled-components';
import { defaultBreakpoints, type Breakpoints } from './DefaultBreakpoints';
import { hidpiBreackpoints, type HidpiBreakpoints } from './HidpiBreakpoint';
import getRuleTemplate from './GetRuleTemplate';

export default (
  value: string,
  breakpoints: Breakpoints = defaultBreakpoints,
  hidpibreakpoints: HidpiBreakpoints = hidpiBreackpoints
) => {
  return (...args) => css`
    @media ${getRuleTemplate(value, breakpoints, hidpibreakpoints)} {
      ${css(...args)}
    }
  `;
};
