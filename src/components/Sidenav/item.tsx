import { cloneElement, FC, ReactElement, ReactNode, Ref, useContext } from 'react';

import classNames from 'classnames';
import { CompositeItem } from 'reakit/Composite';

import { forwardRefWithAs, PropsWithAs } from '../utils';
import { SidenavCompositeContext } from './context';

export interface SidenavItemProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  active?: boolean;
}

function SidenavItemComponent(
  {
    as: Type = 'a',
    children,
    className,
    icon,
    active,
    ...props
  }: PropsWithAs<SidenavItemProps, 'a'>,
  ref: Ref<HTMLAnchorElement>
) {
  let iconEl = null;
  const state = useContext(SidenavCompositeContext);

  if (icon) {
    iconEl = cloneElement(icon as ReactElement, {
      className: 'w-5 h-5 mr-5',
    });
  }

  return (
    <li>
      <CompositeItem
        as={Type}
        className={classNames(
          'w-full h-14 px-4 rounded-lg tracking-wider flex items-center transition focus:outline-none focus:ring-2 ring-primary-500 text-sm',
          {
            'bg-white bg-opacity-10 text-white font-medium': active,
            'text-primary-50 hover:bg-white hover:bg-opacity-5': !active,
          },
          className
        )}
        {...props}
        {...state}
        ref={ref}
      >
        {iconEl}
        {children}
      </CompositeItem>
    </li>
  );
}

export const SidenavItem = forwardRefWithAs<SidenavItemProps, 'a'>(
  SidenavItemComponent
);

(SidenavItem as FC).displayName = 'Sidenav.Item';