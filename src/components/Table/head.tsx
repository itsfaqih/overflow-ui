import { HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface TableHeadProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export function TableHead({ children, className, ...props }: TableHeadProps) {
  return (
    <thead
      className={classNames('border-b border-graySoft', className)}
      {...props}
    >
      {children}
    </thead>
  );
}

TableHead.displayName = 'Table.Head';
