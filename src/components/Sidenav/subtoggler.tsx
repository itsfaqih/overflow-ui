import { cloneElement, FC, Ref, useContext } from 'react';
import { CompositeItem } from 'reakit/Composite';
import { Disclosure } from 'reakit/Disclosure';
import classNames from 'classnames';
import { forwardRefWithAs, PropsWithAs } from '../utils';
import {
  SidenavCompositeContext,
  SidenavSubDisclosureContext,
} from './context';
import { SidenavItemProps } from './item';
import { ReactElement } from 'react';

function SidenavSubTogglerComponent(
  {
    children,
    className,
    icon,
    active,
    ...props
  }: PropsWithAs<SidenavItemProps, 'button'>,
  ref: Ref<HTMLButtonElement>
) {
  const disclosure = useContext(SidenavSubDisclosureContext);
  let iconEl = null;
  const composite = useContext(SidenavCompositeContext);

  if (icon) {
    iconEl = cloneElement(icon as ReactElement, {
      className: 'w-5 h-5 mr-5',
    });
  }
  return (
    <CompositeItem
      as={Disclosure}
      className={classNames(
        'w-full h-14 px-4 rounded-lg tracking-wider flex items-center transition focus:outline-none focus:ring-2 ring-primary-500 text-sm',
        {
          'bg-white bg-opacity-10 text-white font-medium': active,
          'text-primary-50 hover:bg-white hover:bg-opacity-5': !active,
        },
        className
      )}
      {...props}
      {...disclosure}
      {...composite}
      ref={ref}
    >
      {iconEl}
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames(
          'w-5 h-5 ml-auto transition-all transform duration-300',
          {
            'rotate-180': disclosure?.visible,
          }
        )}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </CompositeItem>
  );
}

export const SidenavSubToggler = forwardRefWithAs<SidenavItemProps, 'button'>(
  SidenavSubTogglerComponent
);

(SidenavSubToggler as FC).displayName = 'Sidenav.SubToggler';