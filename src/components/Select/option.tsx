import { forwardRef, ReactNode, Ref } from 'react';

import classNames from 'classnames';

export interface SelectOptionProps {
  children: ReactNode;
  value: string;
  className?: string;
  highlighted?: boolean;
  selected?: boolean;
}

function SelectOptionComponent(
  {
    children,
    className,
    value,
    highlighted,
    selected,
    ...props
  }: SelectOptionProps,
  ref: Ref<HTMLLIElement>
) {
  return (
    <li
      className={classNames(
        'block w-full text-left px-4 py-2 focus:outline-none cursor-default text-sm',
        {
          'bg-graySoft bg-opacity-25': highlighted && !selected,
          'bg-primary-600': highlighted && selected,
          'text-grayDark': !selected,
          'bg-primary-500 text-white': selected,
        },
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
    </li>
  );
}

export const SelectOption = forwardRef(SelectOptionComponent);

SelectOption.displayName = 'Select.Option';