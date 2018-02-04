//@flow
import React from 'react';
import GridX from '../components/GridX';
import Cell from '../components/Cell';
import 'jest-styled-components'

test('the style output of GridX', () => {
  const wrapper = shallow(<GridX><Cell>test</Cell></GridX>);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper).toHaveStyleRule('display', 'flex');
  expect(wrapper).toHaveStyleRule('flex-flow', 'row wrap');
  expect(wrapper).toHaveStyleRule('-webkit-box-orient', 'horizontal');
  expect(wrapper).toHaveStyleRule('-webkit-box-direction', 'normal');
});
