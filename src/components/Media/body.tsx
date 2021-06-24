import { ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MediaContext } from './context';

interface MediaBodyProps {
  children?: ReactNode;
  className?: string;
  margin?: string;
}

export function MediaBody({ children, className, margin }: MediaBodyProps) {
  const { size } = useContext(MediaContext);

  return (
    <div
      className={classNames(
        'flex-1 text-sm',
        {
          'ml-4': size === 'medium' && !margin,
          'ml-6': size === 'large' && !margin,
        },
        margin,
        className
      )}
    >
      {children}
    </div>
  );
}

MediaBody.defaultProps = {
  children: undefined,
  className: '',
  margin: undefined,
};

MediaBody.displayName = 'Media.Body';
