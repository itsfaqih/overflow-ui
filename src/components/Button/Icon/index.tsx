import { cloneElement, ReactElement, Ref } from 'react';

import classNames from 'classnames';
import { Button } from 'reakit/Button';

import { forwardRefWithAs, PropsWithAs } from '../../utils';
import { buttonClasses, ButtonProps } from '../base';

function IconButtonComponent(
  {
    as: Type = 'button',
    children,
    className,
    rounded = true,
    primary = false,
    danger = false,
    variant = 'text',
    size = 'medium',
    ...props
  }: PropsWithAs<ButtonProps, 'button'>,
  ref: Ref<HTMLButtonElement>
) {
  const icon = cloneElement(children as ReactElement, {
    className: classNames({
      'w-4 h-4': size === 'small',
      'w-5 h-5': size === 'medium',
      'w-6 h-6': size === 'large',
    }),
  });

  return (
    <Button
      as={Type}
      className={classNames(
        'flex items-center justify-center',
        {
          'w-8': size === 'small',
          'w-10': size === 'medium',
          'w-12': size === 'large',
        },
        buttonClasses(variant, size, primary, danger, rounded),
        className
      )}
      {...props}
      ref={ref}
    >
      {icon}
    </Button>
  );
}

export const IconButton = forwardRefWithAs<ButtonProps, 'button'>(
  IconButtonComponent
);
