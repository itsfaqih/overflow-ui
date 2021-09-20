import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PageTitle } from '../src';

describe('PageTitle', () => {
  it('renders a title', () => {
    const { getByRole } = render(<PageTitle text="Dashboard" />);

    const component = getByRole('heading');

    expect(component).toBeInTheDocument();
    expect(component.textContent).toBe('Dashboard');
  });
});
