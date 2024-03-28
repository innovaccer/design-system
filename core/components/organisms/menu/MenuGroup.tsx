import React from 'react';
import { BaseProps } from '@/utils/types';
import { Text, Divider } from '@/index';

export interface MenuGroupProps extends BaseProps {
  /**
   * Defines Group label
   */
  label?: string;
  /**
   * List to be rendered inside `MenuGroup`
   */
  children: React.ReactElement;
  /**
   * Set as `true` to show Divider
   */
  showDivider?: boolean;
}

export const MenuGroup = (props: MenuGroupProps) => {
  const { label, children, showDivider, ...rest } = props;

  if (label) {
    return (
      <div data-test="DesignSystem-Menu-Group" role="group" className="Menu-Group" {...rest}>
        <Text size="small" weight="medium" appearance="subtle" className="Menu-Group-Label">
          {label}
        </Text>
        {children}
      </div>
    );
  }

  return (
    <div data-test="DesignSystem-Menu-Group" role="group" {...rest}>
      {children}
      {showDivider && <Divider className="my-3" />}
    </div>
  );
};

MenuGroup.defaultProps = {
  showDivider: true,
};

export default MenuGroup;
