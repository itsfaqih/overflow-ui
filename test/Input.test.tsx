import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Input } from '../src';

describe('Input', () => {
  it('renders a text input as default', () => {
    const { getByRole } = render(<Input />);

    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('has a ring on focused', () => {
    const { container } = render(<Input />);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('focus:ring-2')).toBe(true);
  });
});
