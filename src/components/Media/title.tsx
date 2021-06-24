import { ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MediaContext } from './context';

interface MediaTitleProps {
  children?: ReactNode;
  className?: string;
  align?: string;
}

export function MediaTitle({ children, className, align }: MediaTitleProps) {
  const { size } = useContext(MediaContext);

  return (
    <h3
      className={classNames(
        'text-grayDark',
        {
          'text-base': size === 'large',
          'text-left': !align,
        },
        align,
        className
      )}
    >
      {children}
    </h3>
  );
}

MediaTitle.defaultProps = {
  children: undefined,
  className: '',
  align: undefined,
};

MediaTitle.displayName = 'Media.Title';
