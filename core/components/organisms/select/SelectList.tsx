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
  size: TListboxSize;
  /**
   * Set a custom element for Listbox
   */
  tagName: TagType;
  /**
   * Add divider below all list item
   */
  showDivider: boolean;
}

export const SelectList = (props: SelectListProps) => {
  const contextProp = React.useContext(SelectContext);
  const { withSearch, minHeight, maxHeight, multiSelect } = contextProp;
  const { children, ...rest } = props;
  const searchInputHeight = 33;

  const wrapperStyle: React.CSSProperties = {
    maxHeight: withSearch ? maxHeight! - searchInputHeight : maxHeight,
    overflowY: 'auto',
    minHeight: minHeight,
  };

  return (
    <Listbox
      style={wrapperStyle}
      aria-label="Options item list"
      aria-multiselectable={multiSelect}
      className="my-3"
      {...rest}
    >
      {children}
    </Listbox>
  );
};

SelectList.defaultProps = {
  type: 'option',
  showDivider: false,
  size: 'compressed',
  tagName: 'ul',
};

export default SelectList;
