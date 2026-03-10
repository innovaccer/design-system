import * as React from 'react';
import { Listbox } from '@/index';
import { SelectContext } from './SelectContext';
import { OptionType, TListboxSize } from '@/common.type';
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
  const { withSearch, minHeight, maxHeight, multiSelect, optionValuesOrderRef, setOptionListLength } = contextProp;
  const { children, size, ...rest } = props;
  const searchInputHeight = 33;

  const childrenWithIndex = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && child.type === SelectOption) {
      return React.cloneElement(child as React.ReactElement<{ index?: number }>, { index });
    }
    return child;
  });

  if (optionValuesOrderRef) {
    optionValuesOrderRef.current = React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === SelectOption && 'option' in child.props) {
        return (child.props as { option: OptionType }).option;
      }
      return null;
    }).filter((o): o is OptionType => o != null);
  }

  React.useEffect(() => {
    setOptionListLength?.(optionValuesOrderRef?.current?.length ?? 0);
  }, [children, optionValuesOrderRef, setOptionListLength]);

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
        aria-label={props['aria-label'] || 'Options item list'}
        aria-multiselectable={multiSelect}
        className="my-3"
        size={size}
        suppressKeyboard={true}
        {...rest}
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
