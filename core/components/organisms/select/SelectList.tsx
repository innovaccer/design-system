import * as React from 'react';
import { Listbox } from '@/index';
import { SelectContext } from './SelectContext';
import { TListboxSize } from '@/common.type';
import { BaseProps } from '@/utils/types';
import SelectOption from './SelectOption';

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
  /**
   * Aria label for the `SelectList`
   */
  'aria-label'?: string;
}

export const SelectList = (props: SelectListProps) => {
  const contextProp = React.useContext(SelectContext);
  const { withSearch, minHeight, maxHeight, multiSelect, listboxId } = contextProp;
  const { children, size, ...rest } = props;
  const searchInputHeight = 33;

  let optionIndex = 0;

  const injectIndexToOptions = (nodes: React.ReactNode): React.ReactNode => {
    return React.Children.map(nodes, (child) => {
      if (!React.isValidElement(child)) return child;

      // Recursively traverse fragments
      if (child.type === React.Fragment) {
        return React.cloneElement(child, child.props, injectIndexToOptions(child.props.children));
      }

      // Inject sequential index into actual SelectOptions
      if (child.type === SelectOption) {
        return React.cloneElement(child as React.ReactElement<{ index?: number }>, {
          index: optionIndex++,
        });
      }

      return child;
    });
  };

  const childrenWithIndex = injectIndexToOptions(children);

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
        role="listbox"
        id={listboxId}
        style={wrapperStyle}
        aria-label={props['aria-label'] || 'Options item list'}
        aria-multiselectable={multiSelect}
        className="my-3"
        size={size}
        {...rest}
        customFocusManagement
      >
        {childrenWithIndex}
      </Listbox>
    </SelectContext.Provider>
  );
};

SelectList.defaultProps = {
  type: 'option',
  showDivider: false,
  size: 'compressed',
  tagName: 'ul',
};

export default SelectList;
