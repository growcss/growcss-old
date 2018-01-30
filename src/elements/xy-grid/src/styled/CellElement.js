// @flow
import styled from 'styled-components';
import { BreakpointCell, CellBase, CellStatic } from '../utils/Cell';
import { gutters as DefaultGutters } from '../components/Gutters';

const ChooseType = (type: string) => {
  if (type === 'auto') {
    return CellStatic('auto', false);
  }

  if  (type === 'shrink') {
    return CellStatic('shrink', false);
  }

  return '';
};

export const CellElement = styled.div`
  ${CellBase()}
  ${props => CellStatic(props.gridColumns, false, DefaultGutters, 'padding')}
  ${props => ChooseType(props.type)}
  ${props => BreakpointCell(props.small, 'small', props.vertical)}
  ${props => BreakpointCell(props.medium, 'medium', props.vertical)}
  ${props => BreakpointCell(props.large, 'large', props.vertical)}
  ${props => BreakpointCell(props.xlarge, 'xlarge', props.vertical)}
  ${props => BreakpointCell(props.xxlarge, 'xxlarge', props.vertical)}
`;
