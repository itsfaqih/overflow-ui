import { ReactNode } from 'react';

interface MediaNumberProps {
  children?: ReactNode;
}

export function MediaNumber({ children }: MediaNumberProps) {
  return <span className="text-2xl w-14 text-primary-800">{children}</span>;
}

MediaNumber.defaultProps = { children: null };

MediaNumber.displayName = 'Media.Number';
