import { ComponentProps, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Select } from '../src';

const meta: Meta = {
  title: 'Select',
  component: Select,
};

export default meta;

const Template: Story<ComponentProps<typeof Select>> = (args) => {
  const [selected, setSelected] = useState<{
    label: string;
    value: string;
  } | null>(null);

  return (
    <div>
      Selected Label: {selected?.label || 'None'}, Value:{' '}
      {selected?.value || 'None'}
      <Select
        placeholder="Select fruit"
        options={[
          { label: 'All fruit', value: '' },
          { label: 'Apple', value: 'apple' },
          { label: 'Orange', value: 'orange' },
          { label: 'Grape', value: 'grape' },
        ]}
        onChange={(selected) =>
          setSelected(selected as { label: string; value: string })
        }
        {...args}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
