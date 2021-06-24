import { ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MediaContext } from './context';

interface MediaDescProps {
  children?: ReactNode;
  className?: string;
  margin?: string;
}

export function MediaDesc({ children, className, margin }: MediaDescProps) {
  const { size } = useContext(MediaContext);

  return (
    <div
      className={classNames(
        {
          'mt-2': size === 'medium' && !margin,
          'mt-3': size === 'large' && !margin,
        },
        margin,
        className
      )}
    >
      {children}
    </div>
  );
}

MediaDesc.defaultProps = {
  children: undefined,
  className: '',
  margin: undefined,
};

MediaDesc.displayName = 'Media.Desc';
