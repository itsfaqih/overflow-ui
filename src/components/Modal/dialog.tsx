import { ComponentProps, useContext } from 'react';

import classNames from 'classnames';
import { Dialog, DialogBackdrop } from 'reakit/Dialog';

import { ModalContext } from './context';

export function ModalDialog({
  children,
  className,
  ...props
}: ComponentProps<typeof Dialog>) {
  const state = useContext(ModalContext);
  return (
    <DialogBackdrop
      {...state}
      className="fixed top-0 left-0 z-30 flex w-full h-full duration-300 bg-black bg-opacity-0 transition-background-opacity data-enter:bg-opacity-60"
    >
      <Dialog
        className={classNames(
          'transition-opacity my-auto duration-300 opacity-0 data-enter:opacity-100 focus:outline-none mx-auto bg-white rounded-xl p-6',
          className
        )}
        {...state}
        {...props}
        tabIndex={0}
      >
        {children}
      </Dialog>
    </DialogBackdrop>
  );
}

ModalDialog.displayName = 'Modal.Dialog'