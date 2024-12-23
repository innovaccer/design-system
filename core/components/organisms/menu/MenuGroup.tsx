import React from 'react';
import { BaseProps } from '@/utils/types';
import { Text, Divider } from '@/index';
import styles from '@css/components/menu.module.css';

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
      <div data-test="DesignSystem-Menu-Group" role="group" className={styles['Menu-Group']} {...rest}>
        <Text
          data-test="DesignSystem-Menu-Group-Label"
          size="small"
          weight="medium"
          appearance="subtle"
          className={styles['Menu-Group-Label']}
        >
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
