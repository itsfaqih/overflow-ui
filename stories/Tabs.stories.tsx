import { ComponentProps, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs } from '../src';

const meta: Meta = {
  title: 'Tabs',
  component: Tabs,
};

export default meta;

const Template: Story<ComponentProps<typeof Tabs>> = args => {
  return (
    <Tabs {...args}>
      <Tabs.Menu>
        <Tabs.Button>Tab 1</Tabs.Button>
        <Tabs.Button>Tab 2</Tabs.Button>
      </Tabs.Menu>
      <Tabs.Panel>Panel 1</Tabs.Panel>
      <Tabs.Panel>Panel 2</Tabs.Panel>
    </Tabs>
  );
};

export const Default = Template.bind({});
Default.args = {};
