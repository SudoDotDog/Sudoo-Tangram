/**
 * @author WMXPY
 * @namespace SVG
 * @description Slice
 * @override Story
 */

import { createArgTypes } from '@sudoo/storybook-helper';
import * as React from 'react';
import { TangramBox } from '../../src';

export default {
  title: 'Tangram/Slice',
  component: TangramBox,
  argTypes: createArgTypes({
    size: {
      type: 'number',
      control: 'range',
      description: 'Size of the box',
      defaultValue: 512,
      step: 8,
      min: 64,
      max: 1024,
    },
  }),
}

export const Slice = (props) => {

  return (<TangramBox {...props} />)
};
