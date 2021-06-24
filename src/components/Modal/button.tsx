import { ComponentProps, useContext } from 'react';

import { DialogDisclosure } from 'reakit/Dialog';

import { ModalContext } from './context';

export function ModalButton({
  children,
  ...props
}: ComponentProps<typeof DialogDisclosure>) {
  const state = useContext(ModalContext);
  return (
    <DialogDisclosure {...state} {...props}>
      {children}
    </DialogDisclosure>
  );
}

ModalButton.displayName = 'Modal.Button'