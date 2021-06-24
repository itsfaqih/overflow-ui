import { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

const Template: Story<ComponentProps<typeof Button>> = args => (
  <Button {...args} />
);

export const Small = Template.bind({});
Small.args = { size: 'small', children: 'Button' };

export const Medium = Template.bind({});
Medium.args = { size: 'medium', children: 'Button' };

export const Large = Template.bind({});
Large.args = { size: 'large', children: 'Button' };

export const Contained = Template.bind({});
Contained.args = { variant: 'contained', children: 'Button' };

export const Outlined = Template.bind({});
Outlined.args = { variant: 'outlined', children: 'Button' };

export const Text = Template.bind({});
Text.args = { variant: 'text', children: 'Button' };

export const Primary = Template.bind({});
Primary.args = { primary: true, children: 'Button' };

export const Danger = Template.bind({});
Danger.args = { danger: true, children: 'Button' };

export const Rounded = Template.bind({});
Rounded.args = { rounded: true, children: 'Button' };
