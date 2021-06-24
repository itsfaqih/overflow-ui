import { ReactNode } from 'react';

import { MenuInitialState, useMenuState } from 'reakit/Menu';

import { DropdownButton } from './button';
import { DropdownContext } from './context';
import { DropdownItem } from './item';
import { DropdownList } from './list';
import { DropdownSeparator } from './separator';

interface DropdownProps {
  children?: ReactNode;
  className?: string;
  options?: MenuInitialState;
}

export function Dropdown({ children, className, options = {} }: DropdownProps) {
  const state = useMenuState({
    animated: true,
    placement: 'bottom-end',
    gutter: 8,
    ...options,
  });
  return (
    <div className={className}>
      <DropdownContext.Provider value={state}>
        {children}
      </DropdownContext.Provider>
    </div>
  );
}

Dropdown.defaultProps = {
  children: null,
  className: null,
  options: {},
};

Dropdown.Button = DropdownButton;
Dropdown.Item = DropdownItem;
Dropdown.List = DropdownList;
Dropdown.Separator = DropdownSeparator;
