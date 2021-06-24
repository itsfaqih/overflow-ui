import { HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface SidenavListContainerProps extends HTMLAttributes<HTMLDivElement> {}

export function SidenavListContainer({ children, className }: SidenavListContainerProps) {
  return (
    <div
      style={{ height: 'calc(100vh - 5rem)' }}
      className={classNames('overflow-auto', className)}
    >
      {children}
    </div>
  );
}

SidenavListContainer.displayName = 'Sidenav.ListContainer';