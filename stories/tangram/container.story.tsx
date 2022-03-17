/**
 * @author WMXPY
 * @namespace Tangram
 * @description Container
 * @override Story
 */

import { createArgTypes } from '@sudoo/storybook-helper';
import * as React from 'react';
import { TangramContainer } from '../../src';

export default {
  title: 'Tangram/Container',
  component: TangramContainer,
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

export const Basic = (props) => {

  return (<TangramContainer {...props} />)
};
