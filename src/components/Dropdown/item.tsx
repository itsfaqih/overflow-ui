import { FC, ReactNode, Ref, useContext } from 'react';

import classNames from 'classnames';
import { MenuItem } from 'reakit/Menu';

import { forwardRefWithAs, PropsWithAs } from '../utils';
import { DropdownContext } from './context';

export interface DropdownItemProps {
  children: ReactNode;
}

function DropdownItemComponent(
  {
    as: Type = 'a',
    children,
    className,
    ...props
  }: PropsWithAs<DropdownItemProps, 'a'>,
  ref: Ref<HTMLAnchorElement>
) {
  const state = useContext(DropdownContext);
  return (
    <MenuItem
      as={Type}
      className={classNames(
        'block w-full text-left px-4 py-2 focus:outline-none text-grayDark focus:bg-graySoft focus:bg-opacity-25 text-sm',
        className
      )}
      {...state}
      {...props}
      ref={ref}
    >
      {children}
    </MenuItem>
  );
}

export const DropdownItem = forwardRefWithAs<DropdownItemProps, 'a'>(
  DropdownItemComponent
);

(DropdownItem as FC).displayName = 'Dropdown.Item';