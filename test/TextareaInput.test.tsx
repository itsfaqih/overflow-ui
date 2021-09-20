import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { TextareaInput } from '../src';

describe('TextareaInput', () => {
  it('renders a textarea', () => {
    const { getByRole } = render(<TextareaInput />);

    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('has a ring on focused', () => {
    const { container } = render(<TextareaInput />);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('focus:ring-2')).toBe(true);
  });
});
