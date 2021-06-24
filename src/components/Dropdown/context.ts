import { createContext } from 'react';

import { MenuStateReturn } from 'reakit/Menu';

export const DropdownContext = createContext<MenuStateReturn | null>(null);
