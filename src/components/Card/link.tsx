import { ReactNode } from 'react';

import classNames from 'classnames';

interface CardLinkProps {
  children?: ReactNode;
  href?: string;
  className?: string;
}

export function CardLink({ children, href, className }: CardLinkProps) {
  return (
    <a
      className={classNames('text-gray tracking-wider uppercase', className)}
      href={href}
    >
      {children}
    </a>
  );
}

CardLink.defaultProps = { children: null, href: '#', className: null };
CardLink.displayName = 'Card.Link';
