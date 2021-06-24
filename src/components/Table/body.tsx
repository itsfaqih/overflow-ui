import { HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface TableBodyProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export function TableBody({ children, className, ...props }: TableBodyProps) {
  return (
    <tbody
      className={classNames('divide-y divide-graySoft text-sm', className)}
      {...props}
    >
      {children}
    </tbody>
  );
}

TableBody.displayName = 'Table.Body';
