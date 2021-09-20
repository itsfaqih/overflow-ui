import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Alert } from '../src';

describe('Alert', () => {
  it('renders an alert message', () => {
    const { getByRole } = render(
      <Alert variant="success">Hello</Alert>
    );

    const component = getByRole('alert');

    expect(component).toBeInTheDocument();
    expect(component.textContent).toBe('Hello');
  });

  it('could have a title', () => {
    const { getByRole } = render(
      <Alert variant="success" title="Hello">
        How are you?
      </Alert>
    );

    const titleElement = getByRole('heading');

    expect(titleElement.textContent).toBe('Hello');
  });

  it('could have an icon', () => {
    const { container } = render(
      <Alert variant="success" icon>
        Hello
      </Alert>
    );
    const iconElement = (container.firstChild as HTMLElement).querySelector('svg');

    expect(iconElement).not.toBe(null);
  });

  it('could have a custom icon', () => {
    const icon = (
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    );

    const { container } = render(
      <Alert variant="success" icon={icon}>
        Hello
      </Alert>
    );

    const iconElement = (container.firstChild as HTMLElement).querySelector(
      'svg'
    );

    expect(iconElement).not.toBe(null);
  });

  it('has green color when using success variant', () => {
    const { container } = render(<Alert variant="success">Hello</Alert>);
    const componentClasses = (container.firstChild as HTMLElement).classList;

    expect(componentClasses.contains('bg-success-50')).toBe(true);
    expect(componentClasses.contains('text-success-700')).toBe(true);
  });

  it('has red color when using danger variant', () => {
    const { container } = render(<Alert variant="danger">Hello</Alert>);
    const componentClasses = (container.firstChild as HTMLElement).classList;

    expect(componentClasses.contains('bg-danger-50')).toBe(true);
    expect(componentClasses.contains('text-danger-700')).toBe(true);
  });

  it('has yellow color when using warning variant', () => {
    const { container } = render(<Alert variant="warning">Hello</Alert>);
    const componentClasses = (container.firstChild as HTMLElement).classList;

    expect(componentClasses.contains('bg-warning-50')).toBe(true);
    expect(componentClasses.contains('text-warning-700')).toBe(true);
  });

  it('has blue color when using info variant', () => {
    const { container } = render(<Alert variant="info">Hello</Alert>);
    const componentClasses = (container.firstChild as HTMLElement).classList;

    expect(componentClasses.contains('bg-info-50')).toBe(true);
    expect(componentClasses.contains('text-info-700')).toBe(true);
  });
});
