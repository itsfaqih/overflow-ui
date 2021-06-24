import classNames from 'classnames';

export interface BaseInputProps {
  isInvalid?: boolean;
  isValid?: boolean;
}

export const inputClasses = (
  disabled?: boolean,
  isInvalid?: boolean,
  isValid?: boolean,
  border?: boolean,
  focusWithin?: boolean
) => classNames('px-4 focus:outline-none text-sm', {
    'bg-grayCool-100': disabled,
    'border-graySoft ring-primary-500': !isInvalid && !isValid && border,
    'border-transparent ring-danger-500 ring-2': isInvalid && border,
    'border-transparent ring-success-500 ring-2': isValid && border,
    'rounded-lg border transition': border,
    'focus:border-transparent focus:ring-2': !focusWithin && border,
    'focus-within:border-transparent focus-within:ring-2':
      focusWithin && border,
  });
