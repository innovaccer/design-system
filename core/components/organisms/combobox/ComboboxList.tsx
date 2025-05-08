import * as React from 'react';
import { Listbox } from '@/index';
import { BaseProps } from '@/utils/types';
import { TListboxSize } from '@/common.type';

type TagType = 'ul' | 'ol' | 'div' | 'nav';

export interface ComboboxListProps extends BaseProps {
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

export const ComboboxList = (props: ComboboxListProps) => {
  const { children, size = 'compressed', tagName = 'ul', showDivider = false, ...rest } = props;
  return (
    <Listbox
      type="option"
      showDivider={showDivider}
      tagName={tagName}
      size={size}
      className="py-3"
      {...rest}
      role="listbox"
    >
      {children}
    </Listbox>
  );
};

export default ComboboxList;
