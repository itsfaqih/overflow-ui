import {
  cloneElement,
  ComponentProps,
  forwardRef,
  ReactElement,
  ReactNode,
  Ref,
} from 'react';

import {
  Tooltip as ReakitTooltip,
  TooltipReference,
  useTooltipState,
} from 'reakit/Tooltip';

interface TooltipProps extends ComponentProps<typeof ReakitTooltip> {
  children: ReactNode;
  text: string;
}

function TooltipComponent(
  { children, text, ...props }: TooltipProps,
  ref: Ref<any>
) {
  const tooltip = useTooltipState();

  return (
    <>
      <TooltipReference {...tooltip} ref={ref} {...props}>
        {(referenceProps) => cloneElement(children as ReactElement, referenceProps)}
      </TooltipReference>
      <ReakitTooltip {...tooltip} {...props}>
        {text}
      </ReakitTooltip>
    </>
  );
}

export const Tooltip = forwardRef<any, TooltipProps>(TooltipComponent);
