import { ComponentProps } from 'react';
import { Composite, useCompositeState } from 'reakit/Composite';
import classNames from 'classnames';

import { PaginationButton } from './button';
import { PaginationContext } from './context';

export interface PaginationProps extends ComponentProps<typeof Composite> {
  currentPage?: number;
}

export function Pagination({
  children,
  className,
  currentPage = 0,
  ...props
}: PaginationProps) {
  const state = useCompositeState({ orientation: 'horizontal' });

  return (
    <Composite className={classNames('flex', className)} {...state} {...props}>
      <PaginationContext.Provider value={{ state, currentPage }}>
        {children}
      </PaginationContext.Provider>
    </Composite>
  );
}

Pagination.Button = PaginationButton;
