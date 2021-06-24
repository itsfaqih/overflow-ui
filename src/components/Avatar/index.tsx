import classNames from 'classnames';

interface AvatarProps {
  username: string;
  src: string;
  alt?: string;
  className?: string;
  ring?: boolean;
}

export function Avatar({ username, src, alt, className, ring }: AvatarProps) {
  return (
    <img
      alt={alt || `${username}'s Avatar`}
      className={classNames(
        'object-cover object-center w-10 h-10 rounded-full group-focus:ring-2 ring-primary-500',
        { 'ring-2 ring-white': ring },
        className
      )}
      src={src}
    />
  );
}

Avatar.defaultProps = {
  className: '',
  ring: false,
};
