import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { GridContainer } from '../src/index';

setAddon(JSXAddon);

storiesOf('XY-Grid Grid Container', module).addWithJSX('with text', () => (
  <GridContainer>Hello</GridContainer>
));
