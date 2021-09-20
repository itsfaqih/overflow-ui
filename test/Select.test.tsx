import { useState } from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Select } from '../src';

const Test = () => {
  const [, setSelected] = useState<{
    label: string;
    value: string;
  } | null>(null);

  return (
    <Select
      placeholder="Select fruit"
      options={[
        { label: 'All fruit', value: '' },
        { label: 'Apple', value: 'apple' },
        { label: 'Orange', value: 'orange' },
        { label: 'Grape', value: 'grape' },
      ]}
      onChange={(selected) => {
        setSelected(
          selected as {
            label: string;
            value: string;
          }
        );
      }}
    />
  );
};

describe('Select', () => {
  it('shows the placeholder on the first render', () => {
    const { getByRole } = render(<Test />);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Select fruit');
  });

  it('hides the option menu before clicking', () => {
    const { getByRole } = render(<Test />);

    const optionMenu = getByRole('listbox').querySelector('ul');

    expect(optionMenu).toBeNull();
  });

  it('shows the option menu after clicking', () => {
    const { getByRole } = render(<Test />);

    fireEvent.click(getByRole('button'));

    const optionMenu = getByRole('listbox').querySelector('ul');

    expect(optionMenu).not.toBeNull();
  });

  it('changes to selected option', () => {
    const { getByRole, getAllByRole } = render(<Test />);
    const button = getByRole('button');

    fireEvent.click(button);

    const options = getAllByRole('option');
    const selectedIndex = Math.floor(Math.random() * 4);
    const selected = options[selectedIndex];

    fireEvent.click(selected);

    expect(button.textContent).toBe(selected.textContent);
  });
});
