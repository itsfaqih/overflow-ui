import { ReactNode } from 'react';

import classNames from 'classnames';

interface CardTitleProps {
  children?: ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h2 className={classNames('text-lg font-medium text-grayDark', className)}>
      {children}
    </h2>
  );
}

CardTitle.defaultProps = { children: null, className: null };
CardTitle.displayName = 'Card.Title';
