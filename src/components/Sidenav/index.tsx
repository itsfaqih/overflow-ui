import { ReactNode, useEffect } from 'react';

import classNames from 'classnames';
import { Composite, useCompositeState } from 'reakit/Composite';
import { Dialog, DialogBackdrop, useDialogState } from 'reakit/Dialog';

import { SidenavCompositeContext } from './context';
import { SidenavItem } from './item';
import { SidenavList } from './list';
import { SidenavListContainer } from './listcontainer';
import { SidenavTitle } from './title';
import { SidenavSub } from './sub';
import { SidenavSubItem } from './subitem';
import { SidenavSubList } from './sublist';
import { SidenavSubToggler } from './subtoggler';

interface SidenavInterface {
  open?: boolean;
  handleClose?: () => void;
  children?: ReactNode;
  className?: string;
}

export function Sidenav({
  open = true,
  handleClose,
  children,
  className,
}: SidenavInterface) {
  const dialog = useDialogState({
    animated: true,
    visible: open,
    modal: false,
  });

  const composite = useCompositeState({ orientation: 'vertical' });

  useEffect(() => {
    dialog.setVisible(open);
  }, [dialog, open]);

  return (
    <>
      <Dialog
        {...dialog}
        aria-label="Sidebar"
        as="aside"
        className={classNames(
          'group fixed top-0 lg:sticky bg-primary-900 transition-margin duration-300 h-full min-h-screen w-72 flex-shrink-0 -ml-72 data-enter:ml-0 shadow-md z-40 focus:outline-none',
          className
        )}
        hideOnEsc={(() => window.innerWidth <= 768)()}
        hideOnClickOutside={(() => window.innerWidth <= 768)()}
        style={{ willChange: 'margin' }}
      >
        <nav>
          <SidenavCompositeContext.Provider value={composite}>
            <Composite {...composite} aria-label="Sidenav menu" role="menu">
              {children}
            </Composite>
          </SidenavCompositeContext.Provider>
        </nav>
      </Dialog>
      <DialogBackdrop
        {...dialog}
        className="fixed z-30 w-full h-full duration-300 bg-black bg-opacity-0 lg:w-0 transition-background-opacity data-enter:bg-opacity-60"
        onClick={() => handleClose?.()}
      />
    </>
  );
}

Sidenav.defaultProps = {
  open: true,
  handleClose: () => {},
  children: null,
  className: '',
};

Sidenav.Item = SidenavItem;
Sidenav.List = SidenavList;
Sidenav.ListContainer = SidenavListContainer;
Sidenav.Sub = SidenavSub;
Sidenav.SubItem = SidenavSubItem;
Sidenav.SubList = SidenavSubList;
Sidenav.SubToggler = SidenavSubToggler;
Sidenav.Title = SidenavTitle;
