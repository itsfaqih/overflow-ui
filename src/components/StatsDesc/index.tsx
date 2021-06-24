import { cloneElement, ReactElement, ReactNode } from 'react';

import classNames from 'classnames';

interface StatsDescProps {
  text?: string;
  icon?: ReactNode;
  className?: string;
}

export function StatsDesc({ text, icon, className }: StatsDescProps) {
  const iconEl = icon
    ? cloneElement(icon as ReactElement, {
        className: classNames('w-4 h-4 mr-2', className),
      })
    : null;

  return (
    <span className={classNames('flex items-center text-gray', className)}>
      {iconEl}
      {text}
    </span>
  );
}

StatsDesc.defaultProps = {
  text: null,
  icon: null,
  className: null,
};
