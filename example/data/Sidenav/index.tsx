import * as Icon from 'react-feather';

export const sidenav = {
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
