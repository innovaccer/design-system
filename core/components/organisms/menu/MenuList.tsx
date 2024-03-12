import React from 'react';
import { BaseProps } from '@/utils/types';
import { Listbox } from '@/index';
import { TListboxSize } from '@/common.type';

type TagType = 'ul' | 'ol' | 'div' | 'nav';

export interface MenuListProps extends BaseProps {
  /**
   * Describe size of `Menu List`
   */
  size?: TListboxSize;
  /**
   * Set a custom element for `Menu List`
   */
  tagName?: TagType;
  /**
   * React Element to be added inside `Menu List`
   */
  children: React.ReactNode;
}

export const MenuList = (props: MenuListProps) => {
  const { children, ...rest } = props;

  return (
    <Listbox data-test="DesignSystem-Menu-List" {...rest}>
      {children}
    </Listbox>
  );
};

MenuList.defaultProps = {
  type: 'option',
  showDivider: false,
  tagName: 'nav',
  size: 'compressed',
};

export default MenuList;
