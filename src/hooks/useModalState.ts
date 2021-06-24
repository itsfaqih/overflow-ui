import { DialogInitialState, useDialogState } from 'reakit/Dialog';

export function useModalState(options: DialogInitialState = {}) {
  return useDialogState({ animated: true, ...options });
}
