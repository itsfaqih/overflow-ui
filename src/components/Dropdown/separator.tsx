import { ComponentProps, useContext } from 'react';

import { MenuSeparator } from 'reakit/Menu';

import { DropdownContext } from './context';

export function DropdownSeparator({
  ...props
}: ComponentProps<typeof MenuSeparator>) {
  const state = useContext(DropdownContext);
  return <MenuSeparator className="my-1 border-grayCool-100" {...state} {...props} />;
}

DropdownSeparator.displayName = 'Dropdown.Separator';
