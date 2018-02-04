//@flow
import { CellOffset } from '../../utils/CellOffset';

test('calculate the cell offset', () => {
  expect(CellOffset(1)).toEqual('width: auto;max-width: none;');
});
