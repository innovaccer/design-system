import * as React from 'react';
import { Listbox } from '@/index';
import { TListboxSize } from '@/common.type';
import { BaseProps } from '@/utils/types';

type TagType = 'ul' | 'ol' | 'div' | 'nav';

export interface SelectionListProps extends BaseProps {
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

export const AvatarSelectionList = (props: SelectionListProps) => {
  return <Listbox {...props}>{props.children}</Listbox>;
};

AvatarSelectionList.defaultProps = {
  type: 'option',
  showDivider: false,
  size: 'compressed',
  tagName: 'ul',
};

export default AvatarSelectionList;
