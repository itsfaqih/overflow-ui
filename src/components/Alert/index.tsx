import { ReactNode } from 'react';

import classNames from 'classnames';

import { SeverityVariant } from '../base';

import { AlertTitle } from './title';
import { AlertIcon } from './icon';

export interface AlertProps {
  variant: SeverityVariant;
  children?: ReactNode;
  title?: string;
  icon?: ReactNode;
  className?: string;
}

export function Alert({
  variant,
  children,
  title,
  icon,
  className,
}: AlertProps) {
  return (
    <div
      className={classNames(
        'py-3 px-4 rounded-xl text-sm',
        {
          'bg-success-50 text-success-700': variant === 'success',
          'bg-danger-50 text-danger-700': variant === 'danger',
          'bg-warning-50 text-warning-700': variant === 'warning',
          'bg-info-50 text-info-700': variant === 'info',
        },
        className
      )}
      role="alert"
    >
      {title ? (
        <>
          <div className="flex items-center">
            {icon === true && <AlertIcon className="mr-2" variant={variant} />}
            {icon && typeof icon !== 'boolean' && (
              <div className="mr-2">{icon}</div>
            )}
            <AlertTitle>{title}</AlertTitle>
          </div>
          {icon ? <div className="pl-7">{children}</div> : children}
        </>
      ) : (
        <div className="flex items-center">
          {icon === true && <AlertIcon className="mr-2" variant={variant} />}
          {typeof icon !== 'boolean' && <div className="mr-2">{icon}</div>}
          {children}
        </div>
      )}
    </div>
  );
}
