import { Ref } from 'react';

import classNames from 'classnames';
import { Button, ButtonProps as ReakitButtonProps } from 'reakit/Button';

import { PropsWithAs } from '../utils';

export interface ButtonProps extends ReakitButtonProps {
  rounded?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  primary?: boolean;
  danger?: boolean;
}

export const buttonClasses = (
  variant: 'contained' | 'outlined' | 'text',
  size: 'small' | 'medium' | 'large',
  primary?: boolean,
  danger?: boolean,
  rounded?: boolean
) => {
  const contained = variant === 'contained';
  const outlined = variant === 'outlined';
  const text = variant === 'text';
  const primaryOrDanger = primary || danger;
  const outlineOrText = outlined || text;

  return classNames(
    'focus:outline-none focus:ring-2 transition disabled:bg-opacity-75 disabled:cursor-default font-medium text-sm',
    {
      'ring-danger-500': danger,
      'ring-primary-500': !danger,
      'text-white': contained && primaryOrDanger,
      'bg-primary-500 hover:bg-primary-600': contained && primary,
      'bg-danger-500 hover:bg-danger-600': contained && danger,
      'bg-white border border-graySoft disabled:bg-grayCool-50':
        contained && !primaryOrDanger,
      border: outlined,
      'border-primary-500 hover:bg-primary-500': outlined && primary,
      'text-primary-500': outlineOrText && primary,
      'border-danger-500 hover:bg-danger-500': outlined && danger,
      'text-danger-500': outlineOrText && danger,
      'border-graySoft hover:bg-grayCool-50': outlined && !primaryOrDanger,
      'hover:bg-grayCool-50': (contained && !primaryOrDanger) || text,
      'text-gray': !primaryOrDanger,
      'ring-offset-2': (contained || outlined) && primaryOrDanger,
      'h-8': size === 'small',
      'h-10': size === 'medium',
      'h-12': size === 'large',
      'rounded-full': rounded,
      'rounded-lg': !rounded,
    }
  );
};

export function BaseButton(
  {
    as: Type = 'button',
    children,
    className,
    rounded,
    primary,
    danger,
    variant = 'contained',
    size = 'medium',
    ...props
  }: PropsWithAs<ButtonProps, 'button'>,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <Button
      as={Type}
      className={classNames(
        buttonClasses(variant, size, primary, danger, rounded),
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
    </Button>
  );
}
