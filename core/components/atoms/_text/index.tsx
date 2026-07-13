import * as React from 'react';

interface Props {
  children: React.ReactNode;
  componentType: string;
  className?: string;
  [key: string]: any;
}

const GenericText: React.ForwardRefRenderFunction<HTMLElement, Omit<Props, 'ref'>> = (
  { children, componentType = 'span', className, ...rest },
  ref
) => {
  return React.createElement(componentType, { ...rest, className, ref }, children);
};

export default React.forwardRef(GenericText);
