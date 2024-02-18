import * as React from 'react';
import { Listbox } from '@/index';
// import { ListboxItemProps } from '@/index.type';
import { AvatarData } from '../SelectionAvatarGroup';
import { SelectionAvatarContext } from '../SelectionAvatarProvider';

export const SelectionAvatarOption = (props: any) => {
  const { children, value, ...rest } = props;

  const contextProp = React.useContext(SelectionAvatarContext);

  const { setSelectedItems, selectedItems, onSelect } = contextProp;

  const onSelectHandler = (avatarData: AvatarData) => {
    let list = [...selectedItems];

    if (selectedItems.includes(avatarData)) {
      list = selectedItems.filter((selectedItem: AvatarData) => selectedItem !== avatarData);
    } else {
      list.push(avatarData);
    }

    setSelectedItems([...list]);
    onSelect && onSelect(list);
  };

  return (
    <Listbox.Item onClick={() => onSelectHandler(value)} selected={selectedItems.includes(value)} {...rest}>
      {children}
    </Listbox.Item>
  );
};

SelectionAvatarOption.defaultProps = {
  tagName: 'li',
};

export default SelectionAvatarOption;
