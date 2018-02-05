//@flow
import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { Cell, GridX } from '../src/index';

setAddon(JSXAddon);

storiesOf('Auto Sizing', module).addWithJSX('Cell will take up the remaining space', () => (
  <GridX>
    <Cell small={4}>4 cells</Cell>
    <Cell cellType='auto'>Whatever's left!</Cell>
  </GridX>
)).addWithJSX('Multiple expanding cells will share the leftover space equally.', () => (
  <GridX>
    <Cell small={4}>4 cell</Cell>
    <Cell cellType='auto'>Whatever's left!</Cell>
    <Cell cellType='auto'>Whatever's left!</Cell>
  </GridX>
)).addWithJSX('Shrink means it will only take up the space its contents need', () => (
  <GridX>
    <Cell cellType='shrink'>Shrink!</Cell>
    <Cell cellType='auto'>Expand!</Cell>
  </GridX>
));
