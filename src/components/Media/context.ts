import { createContext } from 'react';

export const MediaContext = createContext<{
  size: 'medium' | 'large';
}>({
  size: 'medium',
});
