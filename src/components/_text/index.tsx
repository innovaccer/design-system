import * as React from 'react';

interface Props {
  children: React.ReactNode;
  componentType: string;
  className?: string;
}

const GenericText = ({ children, componentType = 'span', className, ...props }: Props) => {
  return React.createElement(componentType, { ...props, className }, children);
};

export default GenericText;
