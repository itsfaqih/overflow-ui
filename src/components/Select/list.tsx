import { forwardRef, HTMLAttributes, Ref } from 'react';

import classNames from 'classnames';

function SelectListComponent(
  { children, className, ...props }: HTMLAttributes<HTMLUListElement>,
  ref: Ref<HTMLUListElement>
) {
  return (
    <ul
      className={classNames(
        'transition-opacity w-full py-1 rounded-lg shadow-soft bg-white focus:outline-none z-20 absolute',
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
    </ul>
  );
}

export const SelectList = forwardRef(SelectListComponent);

SelectList.displayName = 'Select.List';