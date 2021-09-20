import { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox } from '../src';

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
};

export default meta;

const Template: Story<ComponentProps<typeof Checkbox>> = (args) => (
  <Checkbox {...args} />
);
export const Default = Template.bind({});
Default.args = { checked: true };
