import { ComponentProps, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Sidenav } from '../src';
import * as Icon from 'react-feather';

const meta: Meta = {
  title: 'Sidenav',
  component: Sidenav,
};

export default meta;

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
    {
      label: 'Events',
      icon: <Icon.Calendar />,
      href: '/events',
    },
    {
      label: 'Users',
      icon: <Icon.Users />,
      href: '/users',
    },
    {
      label: 'Settings',
      icon: <Icon.Settings />,
      href: '/settings',
    },
  ],
};

const Template: Story<ComponentProps<typeof Sidenav>> = args => {
  const [openSidenav, setOpenSidenav] = useState(true);
  return (
    <>
      <button
        className="-ml-2"
        onClick={() => setOpenSidenav(isOpen => !isOpen)}
        type="button"
      >
        <Icon.Menu />
      </button>
      <Sidenav handleClose={() => setOpenSidenav(false)} open={openSidenav} {...args}>
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

export const Default = Template.bind({});
Default.args = {};
