import React from 'react';

export interface SubMenuProps {
  /**
   * Element to be rendered inside `SubMenu`
   */
  children: React.ReactElement;
}

export const SubMenu = (props: SubMenuProps) => {
  const { children } = props;
  return <div data-test="DesignSystem-Menu-SubMenu">{children}</div>;
};

export default SubMenu;
