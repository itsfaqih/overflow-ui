import { ComponentProps, forwardRef, Ref } from 'react';

import { Button } from 'reakit/Button';
import classNames from 'classnames';

interface SelectButtonProps extends ComponentProps<typeof Button> {
  isOpen?: boolean;
}

function SelectButtonComponent(
  { className, children, isOpen, ...props }: SelectButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <Button
      className={classNames(
        'flex items-center w-full h-10 px-4 text-left bg-white border rounded-lg border-graySoft focus:outline-none focus:ring-2 focus-within:ring-2 ring-primary-500 disabled:bg-opacity-75 cursor-default text-sm',
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
      <svg
        className={classNames(
          'w-5 h-5 ml-auto transition-transform transform text-gray',
          {
            'rotate-180': isOpen,
          }
        )}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </Button>
  );
}

export const SelectButton = forwardRef(SelectButtonComponent);

SelectButton.displayName = 'Select.Button';
