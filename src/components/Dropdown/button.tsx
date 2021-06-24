import { ComponentProps, useContext } from 'react';

import { MenuButton } from 'reakit/Menu';

import { DropdownContext } from './context';

export function DropdownButton({
  children,
  ...props
}: ComponentProps<typeof MenuButton>) {
  const state = useContext(DropdownContext);
  return (
    <MenuButton className="text-sm rounded group focus:outline-none focus-within:ring-2 ring-primary-500 ring-offset-2" {...state} {...props}>
      {children}
    </MenuButton>
  );
}

DropdownButton.displayName = 'Dropdown.Button';
