import * as React from 'react';
import { Listbox } from '@/index';
import { ListboxProps } from '@/index.type';

export const ComboboxList = (props: ListboxProps) => {
  return <Listbox {...props}>{props.children}</Listbox>;
};

ComboboxList.defaultProps = {
  type: 'option',
  showDivider: false,
};

export default ComboboxList;
