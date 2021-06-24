import { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar } from '../src';

const meta: Meta = {
  title: 'Avatar',
  component: Avatar,
};

export default meta;

const Template: Story<ComponentProps<typeof Avatar>> = args => (
  <Avatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://randomuser.me/api/portraits/women/60.jpg',
  alt: "User's avatar",
};

export const WithRing = Template.bind({});
WithRing.args = {
  src: 'https://randomuser.me/api/portraits/women/60.jpg',
  alt: "User's avatar",
  ring: true,
};
WithRing.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
