import { createContext } from 'react';

import { CompositeStateReturn } from 'reakit/Composite';
import { DisclosureStateReturn } from 'reakit/Disclosure';

export const SidenavCompositeContext = createContext<CompositeStateReturn | null>(
  null
);

export const SidenavSubDisclosureContext = createContext<DisclosureStateReturn | null>(
  null
);

export const SidenavSubCompositeContext = createContext<CompositeStateReturn | null>(
  null
);
