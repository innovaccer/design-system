import * as React from 'react';

interface Props {
  children: React.ReactNode;
  componentType: string;
  className?: string;
}

const GenericText: React.ForwardRefRenderFunction<HTMLElement, Props> = (
  { children, componentType = 'span', className, ...rest },
  ref
) => {
  return React.createElement(componentType, { ...rest, className, ref }, children);
};

export default React.forwardRef(GenericText);
