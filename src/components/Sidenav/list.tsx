import { ReactNode } from 'react';

import classNames from 'classnames';
import { Role } from 'reakit/Role';

export interface SidenavListProps {
  title?: string;
  children?: ReactNode;
  dark?: boolean;
  className?: string;
}

export function SidenavList({
  title,
  children,
  className = '',
}: SidenavListProps) {
  return (
    <div
      className={classNames(
        'last:pb-8',
        { 'pt-6': !className.includes('pt-') },
        className
      )}
    >
      {title && (
        <h3
          className={classNames(
            'px-10 text-xs tracking-widest uppercase text-white text-opacity-80'
          )}
        >
          {title}
        </h3>
      )}

      <Role as="ul" className="px-4 mt-4 space-y-4">
        {children}
      </Role>
    </div>
  );
}

SidenavList.displayName = 'Sidenav.List';
