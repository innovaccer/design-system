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
  const { size = 'compressed', tagName = 'nav', children, ...rest } = props;

  return (
    <Listbox
      type="option"
      size={size}
      tagName={tagName}
      showDivider={false}
      data-test="DesignSystem-Menu-List"
      {...rest}
    >
      {children}
    </Listbox>
  );
};

export default MenuList;
