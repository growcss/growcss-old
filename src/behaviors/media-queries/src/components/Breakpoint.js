//@flow
import { css } from 'styled-components';
import { breakpoints as defaultBreakpoints } from './Breakpoints';
import { hidpiBreakpoints } from './HidpiBreakpoint';
import getRuleTemplate from './GetRuleTemplate';
import type { BreakpointsType, HidpiBreakpointsType } from '../types';

export default (
  value: string,
  breakpoints: BreakpointsType = defaultBreakpoints,
  hidpibreakpoints: HidpiBreakpointsType = hidpiBreakpoints
) => {
  return (...args) => css`
    @media ${getRuleTemplate(value, breakpoints, hidpibreakpoints)} {
      ${css(...args)}
    }
  `;
};
