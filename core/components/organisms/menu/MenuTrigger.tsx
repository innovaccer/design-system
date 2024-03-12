import React from 'react';
import { BaseProps } from '@/utils/types';
import { Button } from '@/index';

export interface MenuTriggerProps extends BaseProps {
  size?: any;
  onClick?: () => void;
}

export const MenuTrigger = (props: MenuTriggerProps) => {
  const { size, onClick } = props;
  return <Button icon="more_horiz" size={size} onClick={onClick} />;
};

export default MenuTrigger;
