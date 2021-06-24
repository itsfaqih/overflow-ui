import { ReactNode } from 'react';
import {
  AppearanceTypes,
  Placement,
  TransitionState,
} from 'react-toast-notifications';
import classNames from 'classnames';

interface ToastProps {
  appearance?: AppearanceTypes;
  children?: ReactNode;
  transitionState?: TransitionState;
  placement?: Placement;
  className?: string;
}

export function Toast({
  appearance,
  children,
  transitionState,
  placement,
  className,
}: ToastProps) {
  return (
    <div
      className={classNames(
        'transform flex items-center py-4 pl-4 pr-5 text-white transition-all rounded-lg bg-primary-900 text-sm',
        {
          'opacity-0 shadow-none':
            transitionState === 'entering' || transitionState === 'exiting',
          'ease-out': transitionState === 'entering',
          'ease-in': transitionState === 'exiting',
          '-translate-y-8':
            (transitionState === 'entering' || transitionState === 'exiting') &&
            placement?.includes('top'),
          'translate-y-8':
            (transitionState === 'entering' || transitionState === 'exiting') &&
            placement?.includes('bottom'),
          'translate-x-8':
            (transitionState === 'entering' || transitionState === 'exiting') &&
            placement?.includes('right'),
          '-translate-x-8':
            (transitionState === 'entering' || transitionState === 'exiting') &&
            placement?.includes('left'),
          'opacity-100 translate-x-0 translate-y-0 shadow-soft':
            transitionState === 'entered' || transitionState === 'exited',
        },
        className
      )}
    >
      {appearance === 'error' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 mr-4 text-danger-500"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      )}
      {appearance === 'info' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 mr-4 text-info-500"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      )}
      {appearance === 'success' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 mr-4 text-success-500"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )}
      {appearance === 'warning' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 mr-4 text-warning-500"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      )}
      {children}
    </div>
  );
}
