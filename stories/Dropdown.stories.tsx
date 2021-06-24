import { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown } from '../src';

const meta: Meta = {
  title: 'Dropdown',
  component: Dropdown,
};

export default meta;

const Template: Story<ComponentProps<typeof Dropdown>> = args => (
  <Dropdown {...args}>
    <Dropdown.Button>Open Menu</Dropdown.Button>
    <Dropdown.List>
      <Dropdown.Item href="#">Link 1</Dropdown.Item>
      <Dropdown.Item href="#">Link 2</Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item as="button">Button</Dropdown.Item>
    </Dropdown.List>
  </Dropdown>
);

export const Default = Template.bind({});
Default.args = {};
