import { HTMLAttributes } from 'react';
export interface TableFootProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export function TableFoot({ children, ...props }: TableFootProps) {
  return <tfoot {...props}>{children}</tfoot>;
}

TableFoot.displayName = 'Table.Foot';
