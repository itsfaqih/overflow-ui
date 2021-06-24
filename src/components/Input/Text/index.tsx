import { ComponentProps, forwardRef } from 'react';

import classNames from 'classnames';
import { Input as ReakitInput } from 'reakit/Input';

import { BaseInputProps, inputClasses } from '../base';

export interface InputProps
  extends BaseInputProps,
    ComponentProps<typeof ReakitInput> {
  border?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      isInvalid = false,
      isValid = false,
      border = true,
      ...props
    },
    ref
  ) => (
    <ReakitInput
      className={classNames(
        'h-10',
        inputClasses(disabled, isInvalid, isValid, border),
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  )
);
