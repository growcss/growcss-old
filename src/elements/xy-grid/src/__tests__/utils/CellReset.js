//@flow
import { CellReset } from '../../utils/CellReset';

test('reset height and max-height', () => {
  expect(CellReset()).toEqual('height: auto;max-height: none;');
});

test('reset width and max-width', () => {
  expect(CellReset(false)).toEqual('width: auto;max-width: none;');
});
