import { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge } from '../src';

const meta: Meta = {
  title: 'Badge',
  component: Badge,
};

export default meta;

const Template: Story<ComponentProps<typeof Badge>> = args => (
  <Badge {...args} />
);

export const Success = Template.bind({});
Success.args = { variant: 'success', children: 'Badge' };

export const Danger = Template.bind({});
Danger.args = { variant: 'danger', children: 'Badge' };

export const Warning = Template.bind({});
Warning.args = { variant: 'warning', children: 'Badge' };

export const Info = Template.bind({});
Info.args = { variant: 'info', children: 'Badge' };

export const Large = Template.bind({});
Large.args = { variant: 'success', size: 'larga' };