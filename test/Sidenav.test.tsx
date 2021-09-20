import { useState } from 'react';
import * as Icon from 'react-feather';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Sidenav } from '../src';

const sidenav = {
  items: [
    {
      label: 'Dashboard',
      icon: <Icon.Layout />,
      href: '/',
    },
    {
      label: 'Articles',
      icon: <Icon.FileText />,
      href: '/articles',
    },
    {
      label: 'Courses',
      icon: <Icon.Package />,
      href: '/courses',
    },
  ],
};

const Test = () => {
  const [openSidenav, setOpenSidenav] = useState<boolean>(true);
  return (
    <>
      <button
        className="-ml-2"
        onClick={() => setOpenSidenav((isOpen) => !isOpen)}
        type="button"
        data-testid="toggler"
      >
        <Icon.Menu />
      </button>
      <Sidenav handleClose={() => setOpenSidenav(false)} open={openSidenav}>
        <Sidenav.Title>Overflow UI</Sidenav.Title>
        <Sidenav.List title="Main Menu">
          <Sidenav.Sub>
            <Sidenav.SubToggler>Sub Menu</Sidenav.SubToggler>
            <Sidenav.SubList>
              <Sidenav.SubItem href="#">Sub Item 1</Sidenav.SubItem>
              <Sidenav.SubItem href="#">Sub Item 2</Sidenav.SubItem>
              <Sidenav.SubItem as="button">Sub Item 3</Sidenav.SubItem>
            </Sidenav.SubList>
          </Sidenav.Sub>
          {sidenav.items.map(({ label, href, icon }) => (
            <Sidenav.Item
              active={document.location.href.includes(href || '#')}
              href={href}
              icon={icon}
              key={href}
            >
              {label}
            </Sidenav.Item>
          ))}
        </Sidenav.List>
      </Sidenav>
    </>
  );
};

describe('Sidenav', () => {
  it('renders the sidenav without crash', () => {
    const { getByRole } = render(<Test />);
    const sidenav = getByRole('dialog');

    expect(sidenav).toBeInTheDocument();
  });

  // it('can be hide by changing the "open" state', () => {
  //   const { getByRole, getByTestId } = render(<Test />);
  //   const sidenavToggler = getByTestId('toggler');

  //   fireEvent.click(sidenavToggler);
  //   // console.log(sidenavToggler);

  //   const sidenav = getByRole('dialog');

  //   expect(sidenav).toHaveStyle({ display: 'none' });
  //   expect(sidenav).toHaveAttribute('hidden');
  // });
});
