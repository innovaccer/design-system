import * as React from 'react';
import { Listbox } from '@/index';
import { ListboxProps } from '@/index.type';

export const SelectionAvatarList = (props: ListboxProps) => {
  return <Listbox {...props}>{props.children}</Listbox>;
};

SelectionAvatarList.defaultProps = {
  type: 'option',
  showDivider: false,
  size: 'compressed',
  tagName: 'ul',
};

export default SelectionAvatarList;
