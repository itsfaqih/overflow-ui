import { createContext } from 'react';
import { CompositeStateReturn } from 'reakit/ts';

export const PaginationContext = createContext<{
  state: CompositeStateReturn | null;
  currentPage: number;
}>({
  state: null,
  currentPage: 0,
});
