import * as React from 'react';
import { Listbox } from '@/index';
import { ListboxItemProps } from '@/index.type';

export const SelectionAvatarOption = (props: ListboxItemProps) => {
  const { children, ...rest } = props;
  return <Listbox.Item {...rest}>{children}</Listbox.Item>;
};

SelectionAvatarOption.defaultProps = {
  tagName: 'li',
};

export default SelectionAvatarOption;
