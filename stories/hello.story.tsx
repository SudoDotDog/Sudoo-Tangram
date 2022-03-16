import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { Test } from './example';

export default {
  title: 'Test',
  component: Test,
  argTypes: { click: { action: 'clicked' } },
};

const Template = (args) => {
  return (<Test text={args.text} click={args.click} />)
};

export const Primary = Template.bind({});

Primary.argTypes = {
  text: {
    description: "Hello",
    options: ['primary', 'secondary'],
    control: { type: 'radio' },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: "primary" },
    }
  },
};

Primary.args = {
  text: "test",
  hello: false,
  click: action('clicked'),
};
