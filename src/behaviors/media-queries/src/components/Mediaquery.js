//@flow
import { css } from 'styled-components';
import DefaultBreakpoints from './Breakpoints';
import HidpiBreakpoints from './HidpiBreakpoint';
import GetRuleTemplate from './GetRuleTemplate';
import type { BreakpointsType, HidpiBreakpointsType } from '../types';

export default (
  value: string,
  breakpoints: BreakpointsType = DefaultBreakpoints,
  hidpibreakpoints: HidpiBreakpointsType = HidpiBreakpoints
) => {
  return (...args: Array<string>) => {
    return css`
      @media ${GetRuleTemplate(value, breakpoints, hidpibreakpoints)} {
        ${css(...args)}
      }
    `;
  };
};
