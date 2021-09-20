import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '../src';

describe('Button', () => {
  it('renders a button', () => {
    const { getByRole } = render(<Button>Click</Button>);

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Click');
  });

  it('has a ring on focused', () => {
    const { container } = render(<Button>Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('focus:ring-2')).toBe(true);
  });

  it('has a primary-colored ring on focused when using default color', () => {
    const { container } = render(<Button>Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('ring-primary-500')).toBe(true);
  });

  it('has a primary-colored ring on focused when using primary color', () => {
    const { container } = render(<Button primary>Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('ring-primary-500')).toBe(true);
  });

  it('has a red-colored ring on focused when using danger color', () => {
    const { container } = render(<Button danger>Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('ring-danger-500')).toBe(true);
  });

  it('has white background color when using default color', () => {
    const { container } = render(<Button>Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('bg-white')).toBe(true);
  });

  it('has primary background color when using primary color', () => {
    const { container } = render(<Button primary>Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('bg-primary-500')).toBe(true);
    expect(componentClasses.contains('text-white')).toBe(true);
  });

  it('has red background color when using danger color', () => {
    const { container } = render(<Button danger>Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('bg-danger-500')).toBe(true);
    expect(componentClasses.contains('text-white')).toBe(true);
  });

  it('has no background color when using text variant', () => {
    const { container } = render(<Button variant="text">Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('bg-white')).toBe(false);
  });

  it('has darker background on hover when using default color', () => {
    const { container } = render(<Button>Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('hover:bg-grayCool-50')).toBe(true);
  });

  it('has darker background on hover when using text variant', () => {
    const { container } = render(<Button variant="text">Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('hover:bg-grayCool-50')).toBe(true);
  });

  it('has darker background on hover when using primary color', () => {
    const { container } = render(<Button primary>Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('hover:bg-primary-600')).toBe(true);
  });

  it('has darker background on hover when using danger color', () => {
    const { container } = render(<Button danger>Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('hover:bg-danger-600')).toBe(true);
  });

  it('could have a full rounded corner', () => {
    const { container } = render(<Button rounded>Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('rounded-full')).toBe(true);
  });

  it('has no border when using text variant', () => {
    const { container } = render(<Button variant="text">Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('border')).toBe(false);
  });

  it('has h-8 class when using small size', () => {
    const { container } = render(<Button size="small">Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('h-8')).toBe(true);
  });

  it('has h-10 class when using medium size', () => {
    const { container } = render(<Button size="medium">Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('h-10')).toBe(true);
  });

  it('has h-12 class when using large size', () => {
    const { container } = render(<Button size="large">Click</Button>);
    const componentClasses = (container.firstChild as HTMLButtonElement)
      .classList;

    expect(componentClasses.contains('h-12')).toBe(true);
  });
});
