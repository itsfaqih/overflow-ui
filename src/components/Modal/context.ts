import { createContext } from 'react';

import { DialogStateReturn } from 'reakit/Dialog';

export const ModalContext = createContext<DialogStateReturn | null>(null);
