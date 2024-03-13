import React from 'react';
import { BaseProps } from '@/utils/types';
import { Text, Divider } from '@/index';

export interface MenuGroupProps extends BaseProps {
  label: string;
  children: React.ReactElement;
}

export const MenuGroup = (props: MenuGroupProps) => {
  const { label, children, ...rest } = props;

  if (label) {
    return (
      <div data-test="DesignSystem-MenuGroup" {...rest}>
        <Text size="small" weight="medium" appearance="subtle" className="Menu-Group-Label">
          {label}
        </Text>
        {children}
      </div>
    );
  }

  return (
    <div data-test="DesignSystem-MenuGroup">
      {children}
      <Divider className="my-3" />
    </div>
  );
};

export default MenuGroup;
