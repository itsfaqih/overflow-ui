import { createContext } from 'react';

import { TableVariant } from './base';

export const TableContext = createContext<{ variant: TableVariant }>({
  variant: 'normal',
});
