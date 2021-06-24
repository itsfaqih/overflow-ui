import { createContext } from 'react';

import { TabStateReturn } from 'reakit/Tab';

export const TabsContext = createContext<TabStateReturn | null>(null);
