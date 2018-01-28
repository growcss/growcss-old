// @flow
import styled from 'styled-components';
import { gutters } from '../utils/Gutters';

export const GridContainerElement = styled.div`
  max-width: ${props => props.maxWidth};
  margin: 0 auto;

  ${props => gutters(props.paddingGutter, 'padding')};
`;
