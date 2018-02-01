//@flow
import React from 'react';
import Cell from '../components/Cell';
import 'jest-styled-components'

test('cell base layout', () => {
  const wrapper = shallow(<Cell>test</Cell>);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper).toHaveStyleRule('flex', '0 0 auto');
  expect(wrapper).toHaveStyleRule('min-height', '0px');
  expect(wrapper).toHaveStyleRule('min-width', '0px');
  expect(wrapper).toHaveStyleRule('width', '100%');
});

test('cell auto layout', () => {
  const wrapper = shallow(<Cell cellSize='auto'>test</Cell>);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper).toHaveStyleRule('flex', '1 1 0px');
  expect(wrapper).toHaveStyleRule('min-height', '0px');
  expect(wrapper).toHaveStyleRule('min-width', '0px');
  expect(wrapper).toHaveStyleRule('width', 'auto');
});

test('cell shrink layout', () => {
  const wrapper = shallow(<Cell cellSize='shrink'>test</Cell>);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper).toHaveStyleRule('flex', '0 0 auto');
  expect(wrapper).toHaveStyleRule('min-height', '0px');
  expect(wrapper).toHaveStyleRule('min-width', '0px');
  expect(wrapper).toHaveStyleRule('width', 'auto');
});
