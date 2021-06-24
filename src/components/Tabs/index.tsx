import { ReactNode, useEffect } from 'react';

import { TabInitialState, TabStateReturn, useTabState } from 'reakit/Tab';

import { TabsButton } from './button';
import { TabsContext } from './context';
import { TabsMenu } from './list';
import { TabsPanel } from './panel';

interface TabsProps {
  children?: ReactNode;
  className?: string;
  options?: TabInitialState;
  activeTab?: (tabId: TabStateReturn['selectedId']) => void;
}

export function Tabs({
  children,
  className,
  options = {},
  activeTab,
}: TabsProps) {
  const state = useTabState(options);

  useEffect(() => {
    activeTab?.(state.selectedId);
  }, [state.selectedId]);

  return (
    <div className={className}>
      <TabsContext.Provider value={state}>{children}</TabsContext.Provider>
    </div>
  );
}

Tabs.defaultProps = {
  children: null,
  className: null,
  options: {},
};

Tabs.Button = TabsButton;
Tabs.Menu = TabsMenu;
Tabs.Panel = TabsPanel;
