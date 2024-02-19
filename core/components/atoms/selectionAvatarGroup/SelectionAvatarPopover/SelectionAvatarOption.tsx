import * as React from 'react';
import { Listbox } from '@/index';
// import { ListboxItemProps } from '@/index.type';
import { AvatarData } from '../SelectionAvatarGroup';
import { SelectionAvatarContext } from '../SelectionAvatarProvider';
import { handleKeyDown } from './utils';

export const SelectionAvatarOption = (props: any) => {
  const { children, value, ...rest } = props;

  const contextProp = React.useContext(SelectionAvatarContext);

  const {
    setSelectedItems,
    selectedItems,
    onSelect,
    focusedOption,
    setFocusedOption,
    setHighlightFirstItem,
    setHighlightLastItem,
    listRef,
    withSearch,
  } = contextProp;

  const onSelectHandler = (e: React.MouseEvent, avatarData: AvatarData) => {
    e.preventDefault();
    let list = [...selectedItems];

    if (selectedItems.includes(avatarData)) {
      list = selectedItems.filter((selectedItem: AvatarData) => selectedItem !== avatarData);
    } else {
      list.push(avatarData);
    }

    setSelectedItems([...list]);
    onSelect && onSelect(list);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    handleKeyDown(
      event,
      focusedOption,
      setFocusedOption,
      setHighlightFirstItem,
      setHighlightLastItem,
      listRef,
      withSearch
    );
  };

  return (
    <Listbox.Item
      onClick={(event) => onSelectHandler(event, value)}
      onKeyDown={(event) => onKeyDownHandler(event)}
      selected={selectedItems.includes(value)}
      tabIndex={-1}
      {...rest}
    >
      {children}
    </Listbox.Item>
  );
};

SelectionAvatarOption.defaultProps = {
  tagName: 'li',
};

export default SelectionAvatarOption;
