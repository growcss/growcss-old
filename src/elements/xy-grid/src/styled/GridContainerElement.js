// @flow
import styled from 'styled-components';
import { Gutters } from '../utils/Gutters';

export const GridContainerElement = styled.div`
  max-width: ${props => props.maxWidth};
  margin: 0 auto;

  ${props => Gutters(props.paddingGutter, 'padding')};
`;
