//@flow
import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { GridContainer, Cell } from '../src/index';
import GridX from '../src/components/GridX';

setAddon(JSXAddon);

storiesOf('XY-Grid Gutters', module).addWithJSX('Margin gutter', () => (
  <GridX>
    <Cell medium={6} large={4} gutterType='margin'>12/6/4 cells</Cell>
    <Cell medium={6} large={8} gutterType='margin'>12/6/8 cells</Cell>
  </GridX>
)).addWithJSX('Padding gutter', () => (
  <GridX>
    <Cell medium={6} large={4} gutterType='padding'>12/6/4 cells</Cell>
    <Cell medium={6} large={8} gutterType='padding'>12/6/8 cells</Cell>
  </GridX>
));
