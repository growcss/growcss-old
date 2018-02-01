// @flow
import styled from 'styled-components';

export const XYGridElement = styled.div`
  display: flex;
  flex-flow: ${props => props.direction === 'horizontal' ? 'row' : 'colum'} ${props => props.wrap ? 'wrap' : 'nowrap'};
`;
