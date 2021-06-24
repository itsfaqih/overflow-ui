import { useContext, Ref, FC } from 'react';
import { CompositeItem } from 'reakit/Composite';
import classNames from 'classnames';
import { forwardRefWithAs, PropsWithAs } from '../utils';
import { SidenavItemProps } from './item';
import { SidenavSubCompositeContext } from './context';

function SidenavSubItemComponent(
  {
    as: Type = 'a',
    children,
    className,
    active,
    ...props
  }: PropsWithAs<SidenavItemProps, 'a'>,
  ref: Ref<HTMLAnchorElement>
) {
  const state = useContext(SidenavSubCompositeContext);
  return (
    <li>
      <CompositeItem
        as={Type}
        className={classNames(
          'w-full h-14 pl-14 pr-4 rounded-lg tracking-wider flex items-center transition focus:outline-none focus:ring-2 ring-primary-500 text-sm',
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
        {children}
      </CompositeItem>
    </li>
  );
}

export const SidenavSubItem = forwardRefWithAs<SidenavItemProps, 'a'>(
  SidenavSubItemComponent
);

(SidenavSubItem as FC).displayName = 'Sidenav.SubItem';