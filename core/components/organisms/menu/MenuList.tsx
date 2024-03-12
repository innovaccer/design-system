import React from 'react';
import { BaseProps } from '@/utils/types';
import { Listbox } from '@/index';
import { TListboxSize } from '@/common.type';

type TagType = 'ul' | 'ol' | 'div' | 'nav' | 'a';

export interface MenuListProps extends BaseProps {
  size?: TListboxSize;
  tagType?: TagType;
  onClick?: () => void;
  children: React.ReactNode;
}

export const MenuList = (props: MenuListProps) => {
  const { children, ...rest } = props;

  return <Listbox {...rest}>{children}</Listbox>;
};

MenuList.defaultProps = {
  type: 'option',
  showDivider: false,
  tagName: 'nav',
  size: 'compressed',
};

export default MenuList;
