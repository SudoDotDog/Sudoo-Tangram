/**
 * @author WMXPY
 * @namespace Tangram
 * @description Container
 * @override Story
 */

import { createArgTypes } from '@sudoo/storybook-helper';
import * as React from 'react';
import { TangramPlayground, TangramPlaygroundProps } from '../../src';

export default {
  title: 'Tangram/Playground',
  component: TangramPlayground,
  argTypes: createArgTypes(
    {
      style: {
        type: 'object',
        description: 'Container Style',
        defaultValue: {
          width: '512px',
        },
        autoType: true,
      },
      safePadding: {
        type: 'number',
        description: 'Safe Padding',
        defaultValue: 64,
      },
    },
  ),
}

export const Basic = (props: TangramPlaygroundProps) => {

  return (<TangramPlayground {...props} />)
};
