import { TdHTMLAttributes } from 'react';
import classNames from 'classnames';
import { HorizontalAlignVariant } from '../base';

export interface TableCellProps
  extends TdHTMLAttributes<HTMLTableDataCellElement> {
  align?: HorizontalAlignVariant;
}

export function TableCell({
  children,
  align = 'left',
  className,
  ...props
}: TableCellProps) {
  return (
    <td
      className={classNames(
        'px-6 py-4 whitespace-nowrap',
        {
          'text-left': align === 'left',
          'text-right': align === 'right',
          'text-center': align === 'center',
        },
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
}

TableCell.displayName = 'Table.Cell';
