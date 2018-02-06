// @flow
import styled from 'styled-components';

const alignCss = (alignX: string | null, alignY: string | null): string => {
  const flexAlign = {
    top: 'flex-start',
    bottom: 'flex-end',
    middle: 'center',
    stretch: 'stretch',
  };
  const flexJustify = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
    justify: 'space-between',
    spaced: 'space-around',
  };

  let css = '';

  if (alignX !== null) {
    if (flexJustify[alignX] !== undefined) {
      css += `justify-content:${alignX}`;
    } else {
      throw new Error(`${alignX} is not a valid value for horizontal alignment. Use left, right, center, justify, or spaced.`);
    }
  }

  if (alignY !== null) {
    if (flexAlign[alignY] !== undefined) {
      css += `align-items:${alignY};`;
    } else {
      throw new Error(`${alignY} is not a valid value for vertical alignment. Use top, bottom, middle, or stretch.`);
    }
  }

  return css;
};

export const XYGridElement = styled.div`
  display: flex;
  flex-flow: ${props => props.direction === 'horizontal' ? 'row' : 'column'} ${props => props.wrap ? 'wrap' : 'nowrap'};
  
  -webkit-box-orient: ${props => props.direction};
  -webkit-box-direction: normal;
  
  ${props => alignCss(props.alignX || null, props.alignY || null)}
`;
