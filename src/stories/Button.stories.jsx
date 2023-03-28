import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor:{control:'color'},
    size:{control:'size'},
  },
};

const btn = (args) => <Button {...args} />;

export const Primary = btn.bind({});
Primary.args = {
  label: 'Button',
};







