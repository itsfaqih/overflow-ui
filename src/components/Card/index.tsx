import { ReactNode } from 'react';

import classNames from 'classnames';

import { CardLink } from './link';
import { CardTitle } from './title';

interface CardProps {
  children?: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={classNames('rounded-lg bg-white shadow-big', className)}>
      {children}
    </div>
  );
}

Card.Title = CardTitle;
Card.Link = CardLink;

Card.defaultProps = { children: null, className: null };
