import * as React from 'react';
import { Listbox } from '@/index';
import { BaseProps } from '@/utils/types';
import { TListboxSize } from '@/common.type';
import ComboboxContext from './ComboboxContext';

type TagType = 'ul' | 'ol' | 'div' | 'nav';

export interface ComboboxListProps extends BaseProps {
  /**
   * Accessible name for the listbox
   */
  'aria-label'?: string;
  /**
   * Associates listbox with an external label
   */
  'aria-labelledby'?: string;
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

export const ComboboxList = (props: ComboboxListProps) => {
  const contextProp = React.useContext(ComboboxContext);
  const { popoverId } = contextProp;

  return (
    <Listbox
      id={popoverId}
      className="py-3"
      {...props}
      role="listbox"
      aria-label={props['aria-label'] || 'Combobox options'}
      aria-labelledby={props['aria-labelledby']}
    >
      {props.children}
    </Listbox>
  );
};

ComboboxList.defaultProps = {
  type: 'option',
  showDivider: false,
  tagName: 'ul',
  size: 'compressed',
};

export default ComboboxList;
