import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Avatar } from '../src';

describe('Avatar', () => {
  it('renders a rounded avatar', () => {
    const image = 'https://randomuser.me/api/portraits/women/60.jpg';
    const { getByRole, getByAltText } = render(
      <Avatar src={image} username="Alice" />
    );
    const component = getByRole('img') as HTMLImageElement;

    expect(getByAltText("Alice's Avatar")).toBeInTheDocument();
    expect(component.classList.contains('rounded-full')).toBe(true);
    expect(component.src).toBe(image);
  });

  it('could have a ring', () => {
    const { getByRole } = render(
      <Avatar
        src="https://randomuser.me/api/portraits/women/60.jpg"
        username="Alice"
        ring
      />
    );
    const componentClasses = (getByRole('img') as HTMLImageElement)
      .classList;

    expect(componentClasses.contains('ring-2')).toBe(true);
    expect(componentClasses.contains('ring-white')).toBe(true);
  });
});
