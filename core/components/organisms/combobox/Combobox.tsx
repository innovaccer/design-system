import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { ComboboxList } from './ComboboxList';
import { Popover, OutsideClick } from '@/index';
import { ComboboxOption } from './ComboboxOption';
import { ComboboxTrigger } from './comboboxTrigger';
import { PopoverProps, InputProps, ChipInputProps } from '@/index.type';
import { OptionType } from '@/common.type';
import ComboboxProvider, { ContextProps } from './ComboboxProvider';

export interface ComboboxProps extends BaseProps {
  /**
   * Allow multiple options selection
   */
  multiSelect?: boolean;
  /**
   * Props to be used for `Input` trigger
   */
  inputOptions?: InputProps;
  /**
   * Props to be used for `ChipInput` trigger
   */
  chipInputOptions?: ChipInputProps;
  /**
   * Element to be rendered inside option list
   */
  children: (contextProp: ContextProps) => React.ReactNode;
  /**
   * Specifies max height of Popover
   */
  maxHeight?: number;
  /**
   * Specifies width of Popover
   */
  width?: number;
  /**
   * Callback function to be called when the input text changes
   */
  onInputChange?: (option?: OptionType | string | (string | OptionType)[]) => void;
  /**
   * Callback function to be called when the option is selected from list
   */
  onSelect?: (option?: OptionType | string | (string | OptionType)[]) => void;
}

export const Combobox = (props: ComboboxProps) => {
  const { children, onInputChange, onSelect, multiSelect, className, maxHeight, width } = props;

  const [popoverStyle, setPopoverStyle] = React.useState<PopoverProps['customStyle']>();
  const [wrapperStyle, setWrapperStyle] = React.useState({});
  const triggerRef = React.createRef<HTMLDivElement>();
  const [openPopover, setOpenPopover] = React.useState(false);

  const [isOptionSelected, setIsOptionSelected] = React.useState(false);
  const [focusedOption, setFocusedOption] = React.useState<Element | undefined>();

  const [inputValue, setInputValue] = React.useState<string>('');
  const [chipInputValue, setChipInputValue] = React.useState<(string | OptionType)[]>([]);
  const [inputText, setInputText] = React.useState('');

  const inputTriggerRef = React.useRef<React.Ref<HTMLInputElement | null>>();
  // const inputTriggerRef = React.createRef<React.RefObject<HTMLInputElement | null>>();
  // const inputTriggerRef = React.createRef<React.Ref<HTMLInputElement | null>>();

  React.useEffect(() => {
    const popperWidth = triggerRef.current?.clientWidth;

    const popperWrapperStyle = {
      width: width || popperWidth,
      // maxWidth: popperWidth,
    };

    const wrapperStyle = {
      maxHeight: maxHeight || 'var(--spacing-9)',
      overflowY: 'auto',
    };

    console.log('popperWrapperStyle', popperWrapperStyle, 'popperWidth', popperWidth, 'width', width);

    setWrapperStyle(wrapperStyle);
    setPopoverStyle(popperWrapperStyle);
  }, []);

  React.useEffect(() => {
    if (isOptionSelected) {
      multiSelect ? setOpenPopover(true) : setOpenPopover(false);
      setIsOptionSelected(false);
    }
    const value = multiSelect ? chipInputValue : inputValue;
    onInputChange && !isOptionSelected && onInputChange(value);
  }, [inputValue, chipInputValue]);

  const onOptionClick = (option: OptionType) => {
    setIsOptionSelected(true);
    if (!multiSelect) {
      setInputValue(option.label);
      onSelect && onSelect(option);
    } else {
      const chipList = [...chipInputValue, option];
      setChipInputValue(chipList);
      onSelect && onSelect(chipList);
    }
  };

  const outsideClickHandler = () => {
    setOpenPopover(false);
  };

  const onToggleHandler = (open: boolean) => {
    if (open) {
      setOpenPopover(true);
    }
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
    inputText,
    setInputText,
    inputTriggerRef,
  };

  return (
    <ComboboxProvider value={contextProp}>
      <div
        ref={triggerRef}
        // className="w-100 position-relative"
        className={className}
      >
        <OutsideClick onOutsideClick={outsideClickHandler}>
          <Popover
            open={openPopover}
            // triggerClass="w-100"
            triggerClass="d-block"
            customStyle={popoverStyle}
            onToggle={onToggleHandler}
            trigger={<ComboboxTrigger {...props} />}
          >
            <div style={wrapperStyle}>{children && children(contextProp)}</div>
          </Popover>
        </OutsideClick>
      </div>
    </ComboboxProvider>
  );
};

Combobox.Option = ComboboxOption;
Combobox.List = ComboboxList;

export default Combobox;
