import { MenuInitialState, useMenuState } from 'reakit/Menu';

export function useSelectState(options: MenuInitialState) {
  return useMenuState({
    animated: true,
    placement: 'bottom',
    gutter: 8,
    ...options,
  });
}
