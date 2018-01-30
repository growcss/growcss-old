//@flow
import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { GridContainer, Cell } from '../src/index';

setAddon(JSXAddon);

storiesOf('XY-Grid Grid Container', module).addWithJSX('with text', () => (
  <GridContainer><Cell small={1} medium={5} large={6} xlarge={7} xxlarge={11}>test</Cell></GridContainer>
));
