import { ReactNode, useState } from 'react';
import * as Icon from 'react-feather';

import { Avatar, Dropdown, IconButton, PageTitle, Sidenav } from '../../../.';

interface MainLayoutInterface {
  appName: ReactNode;
  sidenav: {
    items: {
      label: ReactNode;
      href?: string;
      icon?: ReactNode;
    }[];
  };
  content: {
    title: string;
  };
  children?: ReactNode;
}

export function MainLayout({
  appName,
  sidenav,
  content,
  children,
}: MainLayoutInterface) {
  const [openSidenav, setOpenSidenav] = useState(true);

  return (
    <div className="flex">
      <Sidenav handleClose={() => setOpenSidenav(false)} open={openSidenav}>
        <Sidenav.Title>{appName}</Sidenav.Title>
        <Sidenav.List title="Main Menu">
          {sidenav.items.map(({ label, href, icon }) => (
            <Sidenav.Item
              active={document.location.href.includes(href || '#')}
              as="a"
              href={href}
              icon={icon}
              key={href}
            >
              {label}
            </Sidenav.Item>
          ))}
        </Sidenav.List>
      </Sidenav>
      <main className="flex-1 flex-grow" style={{ willChange: 'width' }}>
        <div className="px-10">
          <nav className="flex items-center h-20">
            <IconButton
              className="-ml-2"
              onClick={() => setOpenSidenav(isOpen => !isOpen)}
              type="button"
            >
              <Icon.Menu />
            </IconButton>
            <div className="flex items-center ml-auto">
              <IconButton type="button">
                <Icon.Bell />
              </IconButton>
              <Dropdown className="ml-4">
                <Dropdown.Button>
                  <Avatar
                    src="https://randomuser.me/api/portraits/women/91.jpg"
                    username="Alice"
                  />
                </Dropdown.Button>
                <Dropdown.List>
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item as="a" href="#">
                    Log out
                  </Dropdown.Item>
                </Dropdown.List>
              </Dropdown>
            </div>
          </nav>
          <PageTitle className="mt-4" text={content.title} />
          {children}
        </div>
      </main>
    </div>
  );
}

MainLayout.defaultProps = { children: null };
