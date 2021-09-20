import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Dropdown } from '../src';

describe('Dropdown', () => {
  it('renders the dropdown button', () => {
    const { getByRole } = render(
      <Dropdown>
        <Dropdown.Button>Open Menu</Dropdown.Button>
        <Dropdown.List aria-label="Menu">
          <Dropdown.Item href="#">Link 1</Dropdown.Item>
          <Dropdown.Item href="#">Link 2</Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item as="button">Button</Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    );

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Open Menu');
  });

  it('shows the dropdown menu after clicking dropdown button', () => {
    const { getByRole, getAllByRole } = render(
      <Dropdown>
        <Dropdown.Button>Open Menu</Dropdown.Button>
        <Dropdown.List aria-label="Menu">
          <Dropdown.Item href="#">Link 1</Dropdown.Item>
          <Dropdown.Item href="#">Link 2</Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item as="button">Button</Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    );

    fireEvent.click(getByRole('button'));

    expect(getByRole('menu')).toBeInTheDocument();
    getAllByRole('menuitem').forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
});
