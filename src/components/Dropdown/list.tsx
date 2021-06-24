import { ComponentProps, useContext } from 'react';

import classNames from 'classnames';
import { Menu } from 'reakit/Menu';

import { DropdownContext } from './context';

export function DropdownList({
  children,
  className,
  ...props
}: ComponentProps<typeof Menu>) {
  const state = useContext(DropdownContext);
  return (
    <Menu
      className={classNames(
        'transition-opacity w-48 py-1 rounded-lg shadow-soft bg-white focus:outline-none z-20 data-enter:opacity-100 opacity-0',
        className
      )}
      {...state}
      {...props}
    >
      {children}
    </Menu>
  );
}

DropdownList.displayName = 'Dropdown.List';
