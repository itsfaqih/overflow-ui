import { HTMLAttributes, useContext } from 'react';

import classNames from 'classnames';

import { TableVariant } from './base';
import { TableContext } from './context';

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  variant?: TableVariant;
}

export function TableRow({ children, className, ...props }: TableRowProps) {
  const variant = useContext(TableContext).variant;

  return (
    <tr
      className={classNames(
        { 'even:bg-grayCool-50': variant === 'striped' },
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
}

TableRow.displayName = 'Table.Row';
