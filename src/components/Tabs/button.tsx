import { ComponentProps, useContext, useRef } from 'react';

import classNames from 'classnames';
import { Tab } from 'reakit/Tab';

import { TabsContext } from './context';

export function TabsButton({
  children,
  className,
  ...props
}: ComponentProps<typeof Tab>) {
  const state = useContext(TabsContext);
  const button = useRef<HTMLButtonElement>(null);
  const active = button.current?.id && button.current?.id === state?.selectedId;

  return (
    <Tab
      className={classNames(
        'focus:outline-none group',
        {
          'font-medium text-grayDark': active,
          'text-gray': !active,
        },
        className
      )}
      {...state}
      {...props}
      ref={button}
    >
      <div className="text-sm tracking-wider rounded-lg group-focus:ring-2 ring-primary-500 ring-offset-2">{children}</div>
      <div
        className={classNames('w-full h-1 mt-3.5', {
          'bg-primary-500': active,
        })}
      />
    </Tab>
  );
}

TabsButton.displayName = 'Tabs.Button';
