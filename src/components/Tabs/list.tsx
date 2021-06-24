import { ComponentProps, useContext } from 'react';

import classNames from 'classnames';
import { TabList } from 'reakit/Tab';

import { TabsContext } from './context';

export function TabsMenu({
  className,
  ...props
}: ComponentProps<typeof TabList>) {
  const state = useContext(TabsContext);

  return (
    <TabList
      className={classNames('flex space-x-10', className)}
      {...state}
      {...props}
    />
  );
}

TabsMenu.displayName = 'Tabs.Menu';
