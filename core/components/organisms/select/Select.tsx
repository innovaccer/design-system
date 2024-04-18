import * as React from 'react';
import { OptionType } from '@/common.type';
import SelectContext from './SelectContext';
import SelectList from './SelectList';
import SelectOption from './SelectOption';
import { Popover, OutsideClick } from '@/index';
import SelectTrigger, { SelectTriggerProps } from './SelectTrigger';
import SearchInput from './SearchInput';
import SelectEmptyTemplate from './SelectEmptyTemplate';
import { focusListItem, mapInitialValue } from './utils';
import SelectFooter from './SelectFooter';
import { BaseProps } from '@/utils/types';

export interface SelectProps extends BaseProps {
  /**
   * Whether multiple options can be selected.
   */
  multiSelect?: boolean;
  /**
   * Callback function triggered when an option is selected.
   */
  onSelect: (option?: OptionType | OptionType[]) => void;
  /**
   * Elements to render within the option list.
   */
  children?: React.ReactNode;
  /**
   * width of the trigger.
   */
  width?: number;
  /**
   * width of the popover by default it will be equal to the width of trigger.
   */
  popoverWidth?: number;
  /**
   * The maximum height of the popover before scroll is enabled.
   */
  maxHeight?: number;
  /**
   * The minimum height of the popover.
   */
  minHeight?: number;
  /**
   * Values pre-selected in the select component.
   */
  value?: OptionType | OptionType[];
  /**
   * Handler for clicks outside the popover component.
   */
  onOutsideClick?: () => void;
  /**
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   *
   * TriggerProps:
   * {
   *  triggerSize?: SelectTriggerSize;
   *  icon?: string;
   *  placeholder?: string;
   *  inlineLabel?: string;
   *  iconType?: IconType;
   *  disabled?: boolean;
   *  withClearButton?: boolean;
   *  setLabel?: (count: number) => string | undefined;
   *  onClear?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
   * }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | triggerSize | Specifies the size of the Select trigger button. | regular |
   * | icon | Specifies the name of the icon to be displayed in the trigger button | - |
   * | iconType | Specifies the type of icon to be displayed in the trigger button | - |
   * | inlineLabel | Optional label displayed inline inside the Select trigger button | - |
   * | placeholder | Placeholder text to display in the Select trigger when no options are selected | Select |
   * | disabled | Indicates whether the Select trigger is disabled | - |
   * | withClearButton |  Determines whether the clear icon should be displayed in the trigger | true |
   * | setLabel | A function used to customize the label displayed when multiple options are selected. | - |
   * | onClear | Handler called when the clear button within the Select trigger is clicked | - |
   *
   */

  triggerOptions?: SelectTriggerProps;
}

export interface SelectMethods {
  setOpen: (open: boolean) => void;
  setFocusFirstItem: () => void;
  setFocusLastItem: () => void;
}

export interface SelectComponent
  extends React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<SelectMethods>> {
  Option: typeof SelectOption;
  List: typeof SelectList;
  SearchInput: typeof SearchInput;
  EmptyTemplate: typeof SelectEmptyTemplate;
  Footer: typeof SelectFooter;
}

export const Select = React.forwardRef<SelectMethods, SelectProps>((props, ref) => {
  const {
    children,
    onSelect,
    width,
    maxHeight,
    minHeight,
    value,
    multiSelect = false,
    onOutsideClick,
    triggerOptions,
    popoverWidth,
  } = props;

  const [openPopover, setOpenPopover] = React.useState(false);
  const mapValue = mapInitialValue(multiSelect, value);

  const [selectValue, setSelectValue] = React.useState<OptionType | OptionType[]>(mapValue);
  const [isOptionSelected, setIsOptionSelected] = React.useState(false);

  const triggerRef = React.createRef<HTMLButtonElement>();
  const listRef = React.useRef<HTMLDivElement | null>(null);

  const [withSearch, setWithSearch] = React.useState(false);

  const [focusedOption, setFocusedOption] = React.useState<HTMLElement | undefined>();
  const [highlightFirstItem, setHighlightFirstItem] = React.useState<boolean>(false);
  const [highlightLastItem, setHighlightLastItem] = React.useState<boolean>(false);

  const triggerStyle = {
    width: width,
  };

  const popoverStyle = {
    width: popoverWidth ? popoverWidth : width,
  };

  React.useImperativeHandle(ref, () => ({
    setOpen: (open: boolean) => {
      setOpenPopover?.(open);
    },
    setFocusFirstItem: () => {
      if (openPopover) {
        requestAnimationFrame(() => focusListItem('down', setFocusedOption, listRef));
        setHighlightFirstItem(true);
      }
    },
    setFocusLastItem: () => {
      if (openPopover) {
        requestAnimationFrame(() => focusListItem('up', setFocusedOption, listRef));
        setHighlightLastItem(true);
      }
    },
  }));

  React.useEffect(() => {
    if (!openPopover) {
      setHighlightFirstItem(false);
      setHighlightLastItem(false);
    }
  }, [openPopover]);

  React.useEffect(() => {
    if (highlightFirstItem && openPopover) {
      requestAnimationFrame(() => focusListItem('down', setFocusedOption, listRef));
    }
  }, [highlightFirstItem]);

  React.useEffect(() => {
    if (highlightLastItem && openPopover) {
      requestAnimationFrame(() => focusListItem('up', setFocusedOption, listRef));
    }
  }, [highlightLastItem]);

  React.useEffect(() => {
    if (value) {
      setSelectValue(value);
      setIsOptionSelected(Array.isArray(value) ? value.length > 0 : value.value.trim().length > 0);
    }
  }, [value]);

  const onToggleHandler = (open: boolean) => {
    if (triggerOptions && triggerOptions.disabled) {
      setOpenPopover(false);
    } else {
      setHighlightFirstItem(open);
      setOpenPopover(open);
    }
  };

  const onOptionClick = (option: OptionType | OptionType[]) => {
    onSelect?.(option);
    !multiSelect && setOpenPopover(false);
  };

  const onOutsideClickHandler = () => {
    onOutsideClick?.();
  };

  const contextProp = {
    openPopover,
    setOpenPopover,
    selectValue,
    setSelectValue,
    isOptionSelected,
    setIsOptionSelected,
    onOptionClick,
    maxHeight,
    minHeight,
    withSearch,
    width,
    setWithSearch,
    multiSelect,
    listRef,
    triggerRef,
    focusedOption,
    setFocusedOption,
    setHighlightFirstItem,
    setHighlightLastItem,
  };

  return (
    <SelectContext.Provider value={contextProp}>
      <div data-test="DesignSystem-Select" aria-haspopup="listbox" aria-expanded={openPopover} style={triggerStyle}>
        <Popover
          open={openPopover}
          onToggle={onToggleHandler}
          className="mt-3"
          triggerClass="d-block"
          customStyle={popoverStyle}
          trigger={<SelectTrigger aria-controls="select-listbox" {...triggerOptions}></SelectTrigger>}
        >
          <OutsideClick onOutsideClick={onOutsideClickHandler}>
            <div role="listbox" id="select-listbox" tabIndex={0} ref={listRef}>
              {children}
            </div>
          </OutsideClick>
        </Popover>
      </div>
    </SelectContext.Provider>
  );
}) as SelectComponent;

Select.displayName = 'Select';

Select.defaultProps = {
  maxHeight: 256,
  width: 176,
};

Select.Option = SelectOption;
Select.List = SelectList;
Select.SearchInput = SearchInput;
Select.EmptyTemplate = SelectEmptyTemplate;
Select.Footer = SelectFooter;

export default Select;
