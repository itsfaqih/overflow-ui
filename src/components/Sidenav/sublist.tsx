import { ReactNode, useContext, useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { DisclosureContent } from 'reakit/Disclosure';
import { Composite, useCompositeState } from 'reakit/Composite';
import classNames from 'classnames';
import {
  SidenavSubCompositeContext,
  SidenavSubDisclosureContext,
} from './context';

export interface SidenavSubListProps {
  children?: ReactNode;
  className?: string;
}

export function SidenavSubList({ children, className }: SidenavSubListProps) {
  const [height, setHeight] = useState<string | number>(0);
  const disclosure = useContext(SidenavSubDisclosureContext);
  const composite = useCompositeState({ orientation: 'vertical' });

  useEffect(() => {
    if (disclosure?.animating) {
      if (disclosure.visible) setHeight('auto');
      else setHeight(0);
    }
  }, [disclosure?.animating]);

  return (
    <DisclosureContent
      as={AnimateHeight}
      {...disclosure}
      duration={300}
      height={height}
    >
      <SidenavSubCompositeContext.Provider value={composite}>
        <Composite
          as="ul"
          aria-label="Sidenav submenu"
          className={classNames('mt-2 space-y-2', className)}
          role="menu"
          {...composite}
        >
          {children}
        </Composite>
      </SidenavSubCompositeContext.Provider>
    </DisclosureContent>
  );
}

SidenavSubList.displayName = 'Sidenav.SubList';
