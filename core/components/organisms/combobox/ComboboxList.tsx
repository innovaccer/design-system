import * as React from 'react';
import { Listbox } from '@/index';
import { BaseProps } from '@/utils/types';
import { TListboxSize } from '@/common.type';
import { ComboboxContext } from './ComboboxContext';

type TagType = 'ul' | 'ol' | 'div' | 'nav';

export interface ComboboxListProps extends BaseProps {
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
  /**
   * When set, overrides Combobox `multiSelect` for `aria-multiselectable` on the listbox.
   */
  'aria-multiselectable'?: boolean;
}

export const ComboboxList = (props: ComboboxListProps) => {
  const { multiSelect, popoverId } = React.useContext(ComboboxContext);
  const { 'aria-multiselectable': ariaMultiselectableProp, children, ...restProps } = props;
  const ariaMultiselectable = ariaMultiselectableProp !== undefined ? ariaMultiselectableProp : Boolean(multiSelect);

  return (
    <Listbox
      id={popoverId}
      className="py-3"
      {...restProps}
      role="listbox"
      customFocusManagement
      aria-multiselectable={ariaMultiselectable}
    >
      {children}
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
