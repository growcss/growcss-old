// @flow
import styled from 'styled-components';
import { Gutters } from '../utils/Gutters';

export const GridContainerElement = styled.div`
  max-width: ${props => props.maxWidth};
  margin: 0 auto;

  ${props => (props.layout === 'full' ? 'overflow-x: hidden;' : '')}
  ${props => Gutters(props.paddingGutter, 'padding')};
`;
