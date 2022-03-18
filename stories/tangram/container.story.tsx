/**
 * @author WMXPY
 * @namespace Tangram
 * @description Container
 * @override Story
 */

import { createArgTypes } from '@sudoo/storybook-helper';
import * as React from 'react';
import { TangramContainer, TangramContainerProps, tangramInitialFigurePreset, tangramInitialTransformPreset } from '../../src';

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
      safePadding: {
        type: 'number',
        description: 'Safe Padding',
        defaultValue: 64,
      },
      transform: {
        type: 'object',
        description: "Transform",
        defaultValue: tangramInitialTransformPreset,
        autoType: true,
        required: true,
      },
      figure: {
        type: 'object',
        description: "Figure",
        defaultValue: tangramInitialFigurePreset,
        autoType: true,
        required: true,
      },
    },
  ),
}

export const Basic = (props: TangramContainerProps) => {

  return (<TangramContainer {...props} />)
};
