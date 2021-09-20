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
    <div className="relative">
      <ReakitCheckbox
        as={Type}
        checked={checked}
        className={classNames(
          {
            'checkbox w-4 h-4 rounded border-graySoft checked:border-transparent appearance-none border focus:outline-none focus:ring-2 ring-offset-2 ring-primary-500 checked:border-primary-500 checked:bg-primary-500': !customClassName,
          },
          customClassName,
          className
        )}
        {...props}
        ref={ref}
      />
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0.5 w-3 h-3 text-white left-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </div>
  );
}

export const Checkbox = forwardRefWithAs<CheckboxProps, 'input'>(
  CheckboxComponent
);

(Checkbox as FC).displayName = 'Checkbox';
