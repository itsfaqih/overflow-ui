import { ReactNode } from 'react';

import classNames from 'classnames';

import { SeverityVariant } from '../base';

export interface BadgeProps {
  variant: SeverityVariant;
  size?: 'small' | 'large';
  children?: ReactNode;
  className?: string;
}

export function Badge({
  variant,
  className,
  children,
  size = 'small',
}: BadgeProps) {
  return (
    <span
      className={classNames(
        'py-1 rounded-lg font-medium tracking-wider uppercase',
        {
          'bg-success-50 text-success-700': variant === 'success',
          'bg-danger-50 text-danger-700': variant === 'danger',
          'bg-warning-50 text-warning-700': variant === 'warning',
          'bg-info-50 text-info-700': variant === 'info',
          'px-2 text-xs': size === 'small',
          'px-3': size === 'large',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
