import { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Input } from '../src';

const meta: Meta = {
  title: 'Input',
  component: Input,
};

export default meta;

const Template: Story<ComponentProps<typeof Input>> = args => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {};
