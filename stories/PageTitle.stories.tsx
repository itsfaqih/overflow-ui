import { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { PageTitle } from '../src';

const meta: Meta = {
  title: 'PageTitle',
  component: PageTitle,
};

export default meta;

const Template: Story<ComponentProps<typeof PageTitle>> = (args) => (
  <PageTitle {...args} />
);

export const Default = Template.bind({});
Default.args = { text: 'Title' };
