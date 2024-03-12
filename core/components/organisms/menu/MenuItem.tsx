import React from 'react';
import { BaseProps } from '@/utils/types';
import { Listbox } from '@/index';

type ItemTagType = 'li' | 'div';

export interface MenuItemProps extends BaseProps {
  tagType?: ItemTagType;
  onClick?: () => void;
  children: React.ReactNode;
}

export const MenuItem = (props: MenuItemProps) => {
  const { children, ...rest } = props;

  return <Listbox.Item {...rest}>{children}</Listbox.Item>;
};

export default MenuItem;
