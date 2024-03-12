import React from 'react';
import { BaseProps } from '@/utils/types';
import { Text, Divider } from '@/index';

export interface MenuGroupProps extends BaseProps {
  label: string;
  children: React.ReactElement;
}

export const MenuGroup = (props: MenuGroupProps) => {
  const { label, children } = props;

  if (label) {
    return (
      <div>
        <Text>{label}</Text>
        {children}
      </div>
    );
  }

  return (
    <div>
      {children}
      <Divider />
    </div>
  );
};

export default MenuGroup;
