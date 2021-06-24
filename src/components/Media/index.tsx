import { ReactNode } from 'react';

import classNames from 'classnames';

import { MediaBody } from './body';
import { MediaContext } from './context';
import { MediaDesc } from './desc';
import { MediaNumber } from './number';
import { MediaThumbnail } from './thumbnail';
import { MediaTitle } from './title';

interface MediaProps {
  children?: ReactNode;
  className?: string;
  size?: 'medium' | 'large';
}

export function Media({ children, className, size = 'medium' }: MediaProps) {
  return (
    <div className={classNames('flex items-center', className)}>
      <MediaContext.Provider value={{ size }}>{children}</MediaContext.Provider>
    </div>
  );
}

Media.defaultProps = {
  children: null,
  className: null,
  size: 'medium',
};

Media.Body = MediaBody;
Media.Desc = MediaDesc;
Media.Number = MediaNumber;
Media.Title = MediaTitle;
Media.Thumbnail = MediaThumbnail;
