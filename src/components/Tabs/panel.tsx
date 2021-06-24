import { ComponentProps, useContext } from 'react';

import classNames from 'classnames';
import { TabPanel } from 'reakit/Tab';

import { TabsContext } from './context';

export function TabsPanel({
  className,
  ...props
}: ComponentProps<typeof TabPanel>) {
  const state = useContext(TabsContext);

  return (
    <TabPanel
      className={classNames('focus:outline-none', className)}
      {...state}
      {...props}
    />
  );
}

TabsPanel.displayName = 'Tabs.Panel';
