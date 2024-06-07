import * as React from 'react';
import { Listbox } from '@/index';
import { AvatarData } from '../AvatarSelection';
import { AvatarSelectionContext } from '../AvatarSelectionContext';
import { handleKeyDown } from './utils';
import { BaseProps } from '@/utils/types';

export type ItemTagType = 'li' | 'div';

export interface SelectionOptionProps extends BaseProps {
  /**
   * React Element to be added inside list item
   */
  children: React.ReactNode;
  /**
   * Value for particular list item
   */
  value?: any;
  /**
   * Set as `true` for disabled list item
   */
  disabled?: boolean;
  /**
   * Set a custom element for list item
   */
  tagName: ItemTagType;
  /**
   * Handler to be called when `AvatarSelectionOption` is in focus
   */
  onFocus?: (event: React.FocusEvent) => void;
  /**
   * Handler to be called when `AvatarSelectionOption` is out of focus
   */
  onBlur?: (event: React.FocusEvent) => void;
}

export const AvatarSelectionOption = (props: SelectionOptionProps) => {
  const { children, value, disabled, ...rest } = props;

  const contextProp = React.useContext(AvatarSelectionContext);

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
    setOpenPopover,
    triggerRef,
  } = contextProp;

  const onSelectHandler = (event: React.MouseEvent | React.KeyboardEvent, avatarData: AvatarData) => {
    event.preventDefault();

    if (disabled) {
      return;
    }

    let list = selectedItems ? [...selectedItems] : [];

    if (selectedItems?.includes(avatarData)) {
      list = selectedItems.filter((selectedItem: AvatarData) => selectedItem !== avatarData);
    } else {
      list.push(avatarData);
    }

    setSelectedItems?.([...list]);
    setOpenPopover?.(true);
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
      withSearch,
      setOpenPopover,
      triggerRef
    );
  };

  return (
    <Listbox.Item
      onClick={(event) => onSelectHandler(event, value)}
      onKeyDown={(event) => onKeyDownHandler(event)}
      selected={selectedItems?.includes(value)}
      data-test="DesignSystem-AvatarSelection--Option"
      disabled={disabled}
      tabIndex={-1}
      {...rest}
    >
      {children}
    </Listbox.Item>
  );
};

AvatarSelectionOption.defaultProps = {
  tagName: 'li',
};

export default AvatarSelectionOption;
