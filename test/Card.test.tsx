import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from '../src';

describe('Card', () => {
  it('has a white background', () => {
    const { container } = render(<Card>This is a card</Card>);
    const componentClasses = (container.firstChild as HTMLElement).classList;

    expect(componentClasses.contains('bg-white')).toBe(true);
  });

  it('renders the children', () => {
    const { getByText } = render(<Card>This is a card</Card>);

    expect(getByText('This is a card')).toBeInTheDocument();
  });

  it('could have a title', () => {
    const { getByRole } = render(
      <Card>
        <Card.Title>Some Title</Card.Title>
        The description
      </Card>
    );

    const title = getByRole('heading');

    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Some Title');
  });

  it('could have a link', () => {
    const { getByRole } = render(
      <Card>
        <Card.Link href="#">Link to somewhere</Card.Link>
        The description
      </Card>
    );

    const link = getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link.textContent).toBe('Link to somewhere');
  });
});
