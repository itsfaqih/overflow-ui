import { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { TextareaInput } from '../src';

const meta: Meta = {
  title: 'TextareaInput',
  component: TextareaInput,
};

export default meta;

const Template: Story<ComponentProps<typeof TextareaInput>> = args => (
  <TextareaInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const ResizeVertical = Template.bind({});
ResizeVertical.args = { resize: 'vertical' };

export const ResizeHorizontal = Template.bind({});
ResizeHorizontal.args = { resize: 'horizontal' };

export const ResizeBoth = Template.bind({});
ResizeBoth.args = { resize: 'both' };
