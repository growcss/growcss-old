// @flow
import styled from 'styled-components';

export const XYGridElement = styled.div`
  display: flex;
  flex-flow: ${props => props.direction === 'horizontal' ? 'row' : 'column'} ${props => props.wrap ? 'wrap' : 'nowrap'};
  
  -webkit-box-orient: ${props => props.direction};
  -webkit-box-direction: normal;
`;
