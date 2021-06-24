import { ReactNode } from 'react';

import classNames from 'classnames';

export interface AlertTitleProps {
  children?: ReactNode;
  className?: string;
}

export function AlertTitle({ children, className }: AlertTitleProps) {
  return <h4 className={classNames('font-medium', className)}>{children}</h4>;
}
