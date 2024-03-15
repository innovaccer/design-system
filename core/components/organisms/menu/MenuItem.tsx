import React from 'react';
import { BaseProps } from '@/utils/types';
import { Listbox } from '@/index';
import classNames from 'classnames';

type ItemTagType = 'li' | 'div' | 'a';

export interface MenuItemProps extends BaseProps {
  tagType?: ItemTagType;
  onClick?: () => void;
  children: React.ReactNode;
}

export const MenuItem = (props: MenuItemProps) => {
  const { children, className, ...rest } = props;

  const MenuItemClassName = classNames(
    {
      'Menu-Item': true,
    },
    className
  );

  return (
    <Listbox.Item data-test="DesignSystem-Menu-ListItem" className={MenuItemClassName} tabIndex={-1} {...rest}>
      {children}
    </Listbox.Item>
  );
};

export default MenuItem;
