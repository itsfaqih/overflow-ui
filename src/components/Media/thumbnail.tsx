import { useContext } from 'react';

import classNames from 'classnames';

import { MediaContext } from './context';

interface MediaThumbnailProps {
  src: string;
  alt: string;
  size?: string;
  className?: string;
}

export function MediaThumbnail({
  src,
  alt,
  size,
  className = '',
}: MediaThumbnailProps) {
  const context = useContext(MediaContext);

  return (
    <img
      alt={alt}
      className={classNames(
        'object-cover rounded-lg',
        {
          'w-16 h-16': context.size === 'medium' && !size,
          'w-20 h-20': context.size === 'large' && !size,
        },
        size,
        className
      )}
      src={src}
    />
  );
}

MediaThumbnail.defaultProps = {
  size: undefined,
  className: '',
};

MediaThumbnail.displayName = 'Media.Thumbnail';
