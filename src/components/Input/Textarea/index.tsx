import { forwardRef, TextareaHTMLAttributes } from 'react';

import classNames from 'classnames';

import { BaseInputProps, inputClasses } from '../base';

export interface TextareaInputProps
  extends BaseInputProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  resize?: 'none' | 'both' | 'vertical' | 'horizontal';
}

export const TextareaInput = forwardRef<
  HTMLTextAreaElement,
  TextareaInputProps
>(
  (
    { className, resize = 'none', disabled, isInvalid, isValid, ...props },
    ref
  ) => (
    <textarea
      className={classNames(
        'py-2',
        {
          'resize-none': resize === 'none',
          resize: resize === 'both',
          'resize-y': resize === 'vertical',
          'resize-x': resize === 'horizontal',
        },
        inputClasses(disabled, isInvalid, isValid, true),
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  )
);
