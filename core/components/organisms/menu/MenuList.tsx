import React from 'react';
import { BaseProps } from '@/utils/types';
import { Listbox } from '@/index';
import { TListboxSize } from '@/common.type';

type TagType = 'ul' | 'ol' | 'div' | 'nav' | 'a';

export interface MenuListProps extends BaseProps {
  /**
   * Describe size of `List Item`
   */
  size?: TListboxSize;
  /**
   * Set a custom element for `List Item`
   */
  tagType?: TagType;
  /**
   * React Element to be added inside `List Item`
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
