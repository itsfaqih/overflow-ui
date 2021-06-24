import { ReactNode } from 'react';
import { useDisclosureState } from 'reakit/Disclosure';
import { SidenavSubDisclosureContext } from './context';

export interface SidenavSubProps {
  children?: ReactNode;
}

export function SidenavSub({ children }: SidenavSubProps) {
  const state = useDisclosureState({ animated: true });

  return (
    <SidenavSubDisclosureContext.Provider value={state}>
      <li>{children}</li>
    </SidenavSubDisclosureContext.Provider>
  );
}

SidenavSub.displayName = 'Sidenav.Sub';
