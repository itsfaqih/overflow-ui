import { ReactNode } from 'react';

import { Dashboard } from './pages';

export const mainRoutes: {
  title: string;
  component: ReactNode;
  path: string;
  exact: boolean;
}[] = [
  {
    title: 'Dashboard',
    component: <Dashboard />,
    path: '/',
    exact: true,
  },
];
