import { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Label } from '../src';

const meta: Meta = {
  title: 'Label',
  component: Label,
};

export default meta;

const Template: Story<ComponentProps<typeof Label>> = args => (
  <Label {...args} />
);

export const Default = Template.bind({});
Default.args = { children: 'Label' };