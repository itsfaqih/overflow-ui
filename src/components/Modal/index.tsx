import { ReactNode } from 'react';

import { DialogStateReturn } from 'reakit/Dialog';

import { ModalButton } from './button';
import { ModalContext } from './context';
import { ModalDialog } from './dialog';

interface ModalProps {
  children?: ReactNode;
  className?: string;
  modalState: DialogStateReturn;
}

export function Modal({ children, className, modalState }: ModalProps) {
  return (
    <ModalContext.Provider value={modalState}>
      <div className={className}>{children}</div>
    </ModalContext.Provider>
  );
}

Modal.defaultProps = {
  children: null,
  className: null,
  options: {},
};

Modal.Button = ModalButton;
Modal.Dialog = ModalDialog;
