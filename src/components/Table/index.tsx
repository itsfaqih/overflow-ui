import { TableHTMLAttributes } from 'react';

import classNames from 'classnames';

import { TableVariant } from './base';
import { TableBody } from './body';
import { TableCell } from './cell';
import { TableContext } from './context';
import { TableFoot } from './foot';
import { TableHead } from './head';
import { TableHeading } from './heading';
import { TableRow } from './row';


export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  variant?: TableVariant;
}

export function Table({ variant = 'normal', children, className }: TableProps) {
  return (
    <TableContext.Provider value={{ variant }}>
      <table className={classNames('w-full', className)}>{children}</table>
    </TableContext.Provider>
  );
}

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Foot = TableFoot;
Table.Head = TableHead;
Table.Heading = TableHeading;
Table.Row = TableRow;
