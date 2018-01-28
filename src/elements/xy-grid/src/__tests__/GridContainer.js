//@flow
import React from 'react';
import GridContainer from '../components/GridContainer';

test('Link changes the class when hovered', () => {
  const wrapper = shallow(<GridContainer>test</GridContainer>);

  expect(wrapper).toMatchSnapshot();
});
