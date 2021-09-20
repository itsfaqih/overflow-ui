import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Badge } from '../src';

describe('Badge', () => {
  it('renders a text', () => {
    const { getByText } = render(<Badge variant="success">Active</Badge>);

    expect(getByText('Active')).toBeInTheDocument();
  });

  it('has green color when using success variant', () => {
    const { container } = render(<Badge variant="success">Hello</Badge>);
    const componentClasses = (container.firstChild as HTMLElement).classList;

    expect(componentClasses.contains('bg-success-50')).toBe(true);
    expect(componentClasses.contains('text-success-700')).toBe(true);
  });

  it('has red color when using danger variant', () => {
    const { container } = render(<Badge variant="danger">Hello</Badge>);
    const componentClasses = (container.firstChild as HTMLElement).classList;

    expect(componentClasses.contains('bg-danger-50')).toBe(true);
    expect(componentClasses.contains('text-danger-700')).toBe(true);
  });

  it('has yellow color when using warning variant', () => {
    const { container } = render(<Badge variant="warning">Hello</Badge>);
    const componentClasses = (container.firstChild as HTMLElement).classList;

    expect(componentClasses.contains('bg-warning-50')).toBe(true);
    expect(componentClasses.contains('text-warning-700')).toBe(true);
  });

  it('has blue color when using info variant', () => {
    const { container } = render(<Badge variant="info">Hello</Badge>);
    const componentClasses = (container.firstChild as HTMLElement).classList;

    expect(componentClasses.contains('bg-info-50')).toBe(true);
    expect(componentClasses.contains('text-info-700')).toBe(true);
  });
});
