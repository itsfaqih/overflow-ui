import { cloneElement, FC, ReactElement, ReactNode, Ref } from 'react';

import classNames from 'classnames';
import { Button as ReakitButton } from 'reakit/Button';

import { forwardRefWithAs, PropsWithAs } from '../../utils';
import { ButtonProps as BaseButtonProps, buttonClasses } from '../base';

interface ButtonProps extends BaseButtonProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

function ButtonComponent(
  {
    as: Type = 'button',
    children,
    className,
    rounded,
    primary = false,
    danger = false,
    variant = 'contained',
    size = 'medium',
    startIcon,
    endIcon,
    ...props
  }: PropsWithAs<ButtonProps, 'button'>,
  ref: Ref<HTMLButtonElement>
) {
  const small = size === 'small';
  const medium = size === 'medium';
  const large = size === 'large';

  const iconClassNames = classNames({
    'w-4 h-4': small,
    'w-5 h-5': medium,
    'w-6 h-6': large,
  });

  const prefixIcon = startIcon
    ? cloneElement(startIcon as ReactElement, {
        className: classNames(
          {
            'mr-2': small,
            'mr-3': medium || large,
          },
          iconClassNames
        ),
      })
    : null;

  const suffixIcon = endIcon
    ? cloneElement(endIcon as ReactElement, {
        className: classNames(
          {
            'ml-2': small,
            'ml-3': medium || large,
          },
          iconClassNames
        ),
      })
    : null;

  return (
    <ReakitButton
      as={Type}
      className={classNames(
        'flex items-center',
        {
          'pl-3': small && startIcon,
          'pl-4': (medium && startIcon) || (small && !startIcon),
          'pl-5': (large && startIcon) || (medium && !startIcon),
          'pl-6': large && !startIcon,
          'pr-3': small && endIcon,
          'pr-4': (medium && endIcon) || (small && !endIcon),
          'pr-5': (large && endIcon) || (medium && !endIcon),
          'pr-6': large && !endIcon,
        },
        buttonClasses(variant, size, primary, danger, rounded),
        className
      )}
      {...props}
      ref={ref}
    >
      {prefixIcon}
      {children}
      {suffixIcon}
    </ReakitButton>
  );
}

export const Button = forwardRefWithAs<ButtonProps, 'button'>(ButtonComponent);

(Button as FC).displayName = 'Button';