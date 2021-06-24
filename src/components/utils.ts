import {
  ComponentProps,
  ElementType,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';

export type As<Props = any> = ElementType<Props>;
// type Test = As<{ prop: string }>

export type PropsWithAs<
  Props = Record<string, never>,
  Type extends As = As
> = Props &
  Omit<ComponentProps<Type>, 'as' | keyof Props> & {
    as?: Type;
  };
// type Test = PropsWithAs<{ prop: string }, As<{ prop2: string }>>["as"];
// type Test = PropsWithAs<{ prop: string }, As<{ prop2: string }>>["prop"];
// type Test = PropsWithAs<{ prop: string }, As<{ prop2: string }>>["prop2"];
// type Test = PropsWithAs<{ prop: string }, "a">["as"];
// type Test = PropsWithAs<{ prop: string }, "a">["href"];

export type ComponentWithAs<Props, DefaultType extends As> = {
  <Type extends As>(
    props: PropsWithAs<Props, Type> & { as: Type }
  ): JSX.Element;
  (props: PropsWithAs<Props, DefaultType>): JSX.Element;
};
// type Test = ComponentWithAs<{ prop: string }, "button">;

// --------------------
// UTILS
// --------------------

export function forwardRefWithAs<Props, DefaultType extends As>(
  component: ForwardRefRenderFunction<any, any>
) {
  return (forwardRef(component) as unknown) as ComponentWithAs<
    Props,
    DefaultType
  >;
}
