import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { OptionType, IconType } from '@/common.type';
import { ComboboxList } from './ComboboxList';
import { Popover, OutsideClick } from '@/index';
import { ComboboxOption } from './ComboboxOption';
import ComboboxContext, { ContextProps } from './ComboboxContext';
import { PopoverProps } from '@/index.type';
import { focusListItem } from './trigger/utils';
import { ComboboxTrigger } from './trigger/ComboboxTrigger';
import uidGenerator from '@/utils/uidGenerator';

export type ComboboxInputSize = 'tiny' | 'regular' | 'large';

export interface ComboboxProps extends BaseProps {
  /**
   * Allow multiple options selection
   */
  multiSelect?: boolean;
  /**
   * Element to be rendered inside option list
   */
  children: React.ReactNode | ((contextProp: ContextProps) => React.ReactNode);
  /**
   * Specifies max height of Popover
   */
  maxHeight?: number;
  /**
   * Specifies min height of Popover
   */
  minHeight?: number;
  /**
   * Specifies width of Popover
   */
  width?: number;
  /**
   * Callback function to be called when the input text changes
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * OptionType: {
   *    label: string;
   *    value: any;
   *    isSelectedOption?: boolean;
   * }
   * </pre>
   */
  onChange?: (option?: OptionType | OptionType[]) => void;
  /**
   * Callback function to be called when the multiselect trigger text changes
   */
  onSearch?: (value?: string) => void;
  /**
   * Value passed to input trigger for single select in case of controlled mode
   *
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * OptionType: {
   *    label: string;
   *    value: any;
   *    isSelectedOption?: boolean;
   * }
   * </pre>
   *
   */
  value?: OptionType;
  /**
   * Value passed to multiselect trigger in case of controlled mode
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * OptionType: {
   *    label: string;
   *    value: any;
   *    isSelectedOption?: boolean;
   * }
   * </pre>
   */
  chipValue?: OptionType[];
  /**
   * A placeholder that is displayed if the input has no values.
   */
  placeholder?: string;
  /**
   * Disables the input if set to true.
   */
  disabled?: boolean;
  /**
   * Shows error state in case of failed validation
   */
  error?: boolean;
  /**
   * Handler to be called when `Input` loses focus
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when `Input` gets focus
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Callback function when user clicks the clear button
   */
  onClear?: (event: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement>) => void;
  /**
   * Callback function to be called when key is pressed
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * Callback function to be called when key is released
   */
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * Material icon name to be displayed in trigger
   */
  icon?: string;
  /**
   * Set type of Icon
   */
  iconType?: IconType;
  /**
   * Size of Combobox Single Select trigger
   */
  size?: ComboboxInputSize;
  /**
   * Set as `true` to show clear button in case of multi select trigger
   */
  clearButton?: boolean;
  /**
   * Describe the style that will be applied to the popper element
   * Refer to [this](https://popper.js.org/docs/v1/#modifierscomputestyle)
   */
  computeStyles?: object;
  /**
   * Adds custom class to trigger wrapper
   */
  className?: string;
}

export const Combobox = (props: ComboboxProps) => {
  const {
    children,
    onChange,
    multiSelect,
    className,
    maxHeight,
    minHeight,
    width,
    value,
    placeholder,
    disabled,
    error,
    onBlur,
    onFocus,
    onClear,
    icon,
    iconType,
    size,
    chipValue,
    clearButton,
    onSearch,
    onKeyDown,
    onKeyUp,
    computeStyles,
  } = props;

  const [popoverStyle, setPopoverStyle] = React.useState<PopoverProps['customStyle']>();
  const [wrapperStyle, setWrapperStyle] = React.useState({});
  const triggerRef = React.createRef<HTMLDivElement>();
  const listRef = React.createRef<HTMLDivElement | null>();
  const [openPopover, setOpenPopover] = React.useState(false);

  const [isOptionSelected, setIsOptionSelected] = React.useState(false);
  const [focusedOption, setFocusedOption] = React.useState<HTMLElement | undefined>();

  const [inputValue, setInputValue] = React.useState<OptionType | undefined>(value || { label: '', value: '' });
  const [chipInputValue, setChipInputValue] = React.useState<OptionType[] | undefined>(chipValue);
  const [chipInputText, setChipInputText] = React.useState<string | undefined>('');
  const [highlightFirstItem, setHighlightFirstItem] = React.useState<boolean>(false);
  const [highlightLastItem, setHighlightLastItem] = React.useState<boolean>(false);

  const inputTriggerRef = React.useRef<HTMLInputElement>(null);
  const popoverId = `DesignSystem-Combobox--Popover-${uidGenerator()}`;
  const defaultPopoverStyle = {
    fn: (data: any) => {
      return {
        ...data,
        styles: {
          ...data.styles,
          position: 'fixed',
        },
      };
    },
  };

  const popoverComputeStyle = computeStyles ?? defaultPopoverStyle;

  React.useEffect(() => {
    const popperWidth = triggerRef.current?.clientWidth;

    const popperWrapperStyle = {
      width: width || popperWidth,
    };

    const wrapperStyle = {
      maxHeight: maxHeight || 'var(--spacing-640)',
      minHeight: minHeight,
      overflowY: 'auto',
      boxSizing: 'border-box',
    };

    setWrapperStyle(wrapperStyle);
    setPopoverStyle(popperWrapperStyle);
  }, []);

  React.useEffect(() => {
    if (isOptionSelected) {
      multiSelect ? setOpenPopover(true) : setOpenPopover(false);
      setIsOptionSelected(false);
    }
    const value = multiSelect ? chipInputValue : inputValue;
    onChange && !isOptionSelected && onChange(value);
  }, [inputValue, chipInputValue]);

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
    if (!openPopover) {
      setHighlightFirstItem(false);
      setHighlightLastItem(false);
    }
  }, [openPopover]);

  React.useEffect(() => {
    onSearch && onSearch(chipInputText);
  }, [chipInputText]);

  const onOptionClick = (option: OptionType) => {
    setIsOptionSelected(true);
    if (!multiSelect) {
      setInputValue(option);
      onChange && onChange(option);
    } else {
      const chipList = chipInputValue ? [...chipInputValue, option] : [option];
      setChipInputValue(chipList);
      onChange && onChange(chipList);
    }
  };

  const outsideClickHandler = () => {
    !multiSelect && setOpenPopover(false);
  };

  const onToggleHandler = (open: boolean) => {
    open ? setOpenPopover(true) : setOpenPopover(false);
  };

  const triggerProps = {
    value,
    placeholder,
    disabled,
    error,
    onBlur,
    onFocus,
    onClear,
    icon,
    iconType,
    size,
    multiSelect,
    chipValue,
    clearButton,
    onKeyDown,
    onKeyUp,
  };

  const contextProp = {
    inputValue,
    setInputValue,
    onOptionClick,
    openPopover,
    setOpenPopover,
    isOptionSelected,
    setIsOptionSelected,
    chipInputValue,
    setChipInputValue,
    focusedOption,
    setFocusedOption,
    chipInputText,
    setChipInputText,
    inputTriggerRef,
    setHighlightFirstItem,
    setHighlightLastItem,
    multiSelect,
    listRef,
    onSearch,
    popoverId,
  };

  return (
    <ComboboxContext.Provider value={contextProp}>
      <div ref={triggerRef} className={className}>
        <OutsideClick onOutsideClick={outsideClickHandler}>
          <Popover
            open={openPopover && !disabled}
            triggerClass="d-block"
            customStyle={popoverStyle}
            onToggle={onToggleHandler}
            trigger={<ComboboxTrigger {...triggerProps} />}
            computeStyles={popoverComputeStyle}
          >
            <div style={wrapperStyle} ref={listRef} id={popoverId}>
              {children && typeof children === 'function' ? children(contextProp) : children}
            </div>
          </Popover>
        </OutsideClick>
      </div>
    </ComboboxContext.Provider>
  );
};

Combobox.List = ComboboxList;
Combobox.Option = ComboboxOption;

export default Combobox;
