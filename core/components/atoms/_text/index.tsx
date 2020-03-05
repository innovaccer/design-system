import * as React from 'react';

interface IProps {
  children: React.ReactNode;
  componentType: string;
  className?: string;
}

const GenericText = ({ children, componentType = 'span', className, ...props }: IProps) => {
  return React.createElement(componentType, { ...props, className }, children);
};

export default GenericText;
