import React from 'react';
import { BaseProps } from '@/utils/types';
import { Listbox } from '@/index';
import { TListboxSize } from '@/common.type';

type TagType = 'ul' | 'ol' | 'div' | 'nav';

export interface MenuListProps extends BaseProps {
  /**
   * Accessible name for the menu list
   */
  'aria-label'?: string;
  /**
   * Associates menu list with an external label
   */
  'aria-labelledby'?: string;
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

export const MenuListContext = React.createContext<{ size?: TListboxSize }>({});

export const MenuList = (props: MenuListProps) => {
  const { children, ...rest } = props;

  return (
    <Listbox
      data-test="DesignSystem-Menu-List"
      role="presentation"
      aria-label={props['aria-label']}
      aria-labelledby={props['aria-labelledby']}
      {...rest}
    >
      <MenuListContext.Provider value={{ size: props.size }}>{children}</MenuListContext.Provider>
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
