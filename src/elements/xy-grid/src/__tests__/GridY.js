//@flow
import React from 'react';
import GridY from '../components/GridY';
import 'jest-styled-components'

test('the style output of GridY', () => {
  const wrapper = shallow(<GridY>test</GridY>);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper).toHaveStyleRule('display', 'flex');
  expect(wrapper).toHaveStyleRule('flex-flow', 'column wrap');
  expect(wrapper).toHaveStyleRule('-webkit-box-orient', 'vertical');
  expect(wrapper).toHaveStyleRule('-webkit-box-direction', 'normal');
});
