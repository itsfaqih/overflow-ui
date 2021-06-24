import { FC, Ref } from 'react';

import classNames from 'classnames';
import {
  CheckboxProps as ReakitCheckboxProps,
  Checkbox as ReakitCheckbox,
} from 'reakit/Checkbox';

import { forwardRefWithAs, PropsWithAs } from '../utils';

interface CheckboxProps extends ReakitCheckboxProps {
  customClassName?: string;
}

function CheckboxComponent(
  {
    as: Type = 'input',
    checked,
    className,
    customClassName,
    ...props
  }: PropsWithAs<CheckboxProps, 'input'>,
  ref: Ref<HTMLInputElement>
) {
  return (
    <ReakitCheckbox
      as={Type}
      checked={checked}
      className={classNames(
        {
          'checkbox w-4 h-4 rounded border-graySoft appearance-none border focus:outline-none focus:ring-2 ring-offset-2 ring-primary-500 checked:border-primary-500 checked:bg-primary-500': !customClassName,
        },
        customClassName,
        className
      )}
      {...props}
      ref={ref}
    />
  );
}

export const Checkbox = forwardRefWithAs<CheckboxProps, 'input'>(
  CheckboxComponent
);

(Checkbox as FC).displayName = 'Checkbox';