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
  argTypes: createArgTypes(
    {
      style: {
        type: 'object',
        description: 'Container Style',
        defaultValue: {
          width: '256px',
        },
        autoType: true,
      },
    },
  ),
}

export const Basic = (props) => {

  return (<TangramContainer {...props} />)
};
