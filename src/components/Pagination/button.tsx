import { ComponentProps, FC, Ref, useContext } from 'react';
import { CompositeItem } from 'reakit/Composite';
import classNames from 'classnames';

import { PaginationContext } from './context';
import { forwardRefWithAs, PropsWithAs } from '../utils';

export interface PaginationButtonProps
  extends ComponentProps<typeof CompositeItem> {
  number?: number;
  active?: boolean;
}

function PaginationButtonComponent(
  {
    as: Type = 'button',
    number,
    children,
    className,
    active,
    disabled,
    ...props
  }: PropsWithAs<PaginationButtonProps, 'button'>,
  ref: Ref<HTMLButtonElement>
) {
  const { state, currentPage } = useContext(PaginationContext);
  const isActive = currentPage === number || active;

  return (
    <CompositeItem
      as={Type}
      className={classNames(
        'h-10 w-10 focus:outline-none focus:ring-2 ring-primary-500 rounded-full flex items-center justify-center',
        {
          'text-primary-500 font-medium': isActive,
          'text-gray': !isActive,
          'text-graySoft': disabled,
        },
        className
      )}
      disabled={disabled}
      ref={ref}
      {...state}
      {...props}
    >
      {number || children}
    </CompositeItem>
  );
}

export const PaginationButton = forwardRefWithAs<
  PaginationButtonProps,
  'button'
>(PaginationButtonComponent);

(PaginationButton as FC).displayName = 'Pagination.Button';
