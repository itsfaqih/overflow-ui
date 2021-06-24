import { LabelHTMLAttributes } from 'react';

import classNames from 'classnames';

export function Label({
  className,
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={classNames('text-grayDark text-sm', className)} {...props}>
      {children}
    </label>
  );
}
