import { ThHTMLAttributes } from 'react';
import classNames from 'classnames';
import { HorizontalAlignVariant } from '../base';


export interface TableHeadingProps
  extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
  align?: HorizontalAlignVariant;
}

export function TableHeading({
  children,
  className,
  align = 'left',
  ...props
}: TableHeadingProps) {
  return (
    <th
      className={classNames(
        'px-6 py-3 font-medium tracking-wider text-grayDark text-sm',
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
    </th>
  );
}

TableHeading.displayName = 'Table.Heading';