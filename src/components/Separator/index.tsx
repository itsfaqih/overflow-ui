import { ComponentProps } from 'react';

import classNames from 'classnames';
import { Separator as ReakitSeparator } from 'reakit/Separator';

export function Separator({
  className,
  orientation = 'horizontal',
  ...props
}: ComponentProps<typeof ReakitSeparator>) {
  return (
    <ReakitSeparator
      className={classNames('border-t border-graySoft', className)}
      orientation={orientation}
      {...props}
    />
  );
}
