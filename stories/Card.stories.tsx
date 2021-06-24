import { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Card } from '../src';

const meta: Meta = {
  title: 'Card',
  component: Card,
};

export default meta;

const Template: Story<ComponentProps<typeof Card>> = args => (
  <Card {...args}>
    <div className="flex justify-between">
      <Card.Title>Title</Card.Title>
      <Card.Link>Link</Card.Link>
    </div>
    <div className="mt-4 text-sm">Content</div>
  </Card>
);

export const Default = Template.bind({});
Default.args = { className: 'px-6 py-4' };
