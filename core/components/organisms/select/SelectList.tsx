import * as React from 'react';
import { Listbox } from '@/index';
import { SelectContext } from './SelectContext';
import { TListboxSize } from '@/common.type';
import { BaseProps } from '@/utils/types';

type TagType = 'ul' | 'ol' | 'div' | 'nav';

export interface SelectListProps extends BaseProps {
  /**
   * React Element to be added inside `list`
   */
  children: React.ReactNode;
  /**
   * List size
   */
  size?: TListboxSize;
  /**
   * Set a custom element for Listbox
   */
  tagName?: TagType;
  /**
   * Add divider below all list item
   */
  showDivider?: boolean;
}

export const SelectList = (props: SelectListProps) => {
  const { children, size = 'compressed', tagName = 'ul', showDivider = false, ...rest } = props;
  const contextProp = React.useContext(SelectContext);
  const { withSearch, minHeight, maxHeight, multiSelect } = contextProp;
  const searchInputHeight = 33;

  const wrapperStyle: React.CSSProperties = {
    maxHeight: withSearch ? maxHeight! - searchInputHeight : maxHeight,
    overflowY: 'auto',
    minHeight: minHeight,
  };

  const updatedContextProp = {
    ...contextProp,
    size,
  };

  return (
    <SelectContext.Provider value={updatedContextProp}>
      <Listbox
        style={wrapperStyle}
        aria-label="Options item list"
        aria-multiselectable={multiSelect}
        className="my-3"
        tagName={tagName}
        showDivider={showDivider}
        size={size}
        type="option"
        {...rest}
      >
        {children}
      </Listbox>
    </SelectContext.Provider>
  );
};

export default SelectList;
