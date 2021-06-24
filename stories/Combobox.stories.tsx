import { ComponentProps, useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Combobox } from '../src';

const meta: Meta = {
  title: 'Combobox',
  component: Combobox,
};

export default meta;

const Template: Story<ComponentProps<typeof Combobox>> = args => {
  const [selected, setSelected] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setOptions([
        { label: 'Apple', value: 'apple' },
        { label: 'Orange', value: 'orange' },
        { label: 'Grape', value: 'grape' },
      ]);
    }, 500);
  }, []);

  useEffect(() => {
    if (options.length > 0) setSelected(options[0]);
  }, [options]);

  return (
    <div>
      Selected: {selected?.label || 'None'}
      <Combobox
        placeholder="Select fruit"
        options={options}
        onChange={setSelected}
        value={selected}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
