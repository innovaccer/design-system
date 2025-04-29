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
import { BaseProps, extractBaseProps } from '@/utils/types';
import { PopoverProps } from '@/index.type';

export interface SelectProps extends BaseProps {
  /**
   * Whether multiple options can be selected.
   */
  multiSelect?: boolean;
  /**
   * Callback function triggered when an option is selected.
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * OptionType: {
   *   label: string;
   *   value: any;
   * }
   * </pre>
   */
  onSelect: (option?: OptionType | OptionType[]) => void;
  /**
   * Elements to render within the option list.
   */
  children?: React.ReactNode;
  /**
   * width of the trigger.
   * @default 176
   */
  width?: number | string;
  /**
   * width of the popover by default it will be equal to the width of trigger.
   */
  popoverWidth?: number;
  /**
   * The maximum height of the popover before scroll is enabled.
   * @default 256
   */
  maxHeight?: number;
  /**
   * The minimum height of the popover.
   */
  minHeight?: number;
  /**
   * Values pre-selected in the select component.
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * OptionType: {
   *   label: string;
   *   value: any;
   * }
   * </pre>
   */
  value?: OptionType | OptionType[];
  /**
   * BoundaryElement for `Popover`
   */
  boundaryElement?: React.RefObject<HTMLElement> | Element;
  /**
   * Appends `trigger` wrapper inside body
   */
  appendToBody?: boolean;
  /**
   * Handler for clicks outside the popover component.
   */
  onOutsideClick?: () => void;
  /**
   * Callback after Popover is toggled
   */
  onToggle?: (open: boolean) => void;
  /**
   * Defines custom trigger for the `Select`
   */
  trigger?: React.ReactElement;
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
    width = 176,
    maxHeight = 256,
    minHeight,
    value,
    boundaryElement,
    appendToBody,
    multiSelect = false,
    onOutsideClick,
    triggerOptions,
    popoverWidth,
    trigger,
    onToggle,
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
  const [popoverStyle, setPopoverStyle] = React.useState<PopoverProps['customStyle']>({ width: popoverWidth || width });

  const baseProps = extractBaseProps(props);
  const WrapperStyle = trigger ? {} : { width: width };

  const getTriggerElement = () => {
    if (trigger) {
      return React.cloneElement(trigger, { ref: triggerRef } as any);
    }
    return <SelectTrigger aria-controls="select-listbox" {...triggerOptions} />;
  };

  React.useEffect(() => {
    // if popover width is not provided explicitly, apply the trigger width to popover width
    const MIN_WIDTH = 176;
    const triggerWidth = triggerRef.current?.clientWidth;

    if (!popoverWidth && triggerWidth) {
      setPopoverStyle({
        ...popoverStyle,
        width: trigger ? Math.max(triggerWidth || 0, MIN_WIDTH) : triggerWidth,
      });
    }
  }, []);

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
      setIsOptionSelected(Array.isArray(value) ? value.length > 0 : value && 'value' in value);
    }
  }, [value]);

  const onToggleHandler = (open: boolean) => {
    if (onToggle) {
      onToggle(open);
    }

    if (triggerOptions && triggerOptions.disabled) {
      setOpenPopover(false);
    } else {
      setOpenPopover(open);
      setHighlightFirstItem(open);
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
      <div
        data-test="DesignSystem-Select"
        style={WrapperStyle}
        aria-haspopup="listbox"
        aria-expanded={openPopover}
        {...baseProps}
      >
        <Popover
          open={openPopover}
          onToggle={onToggleHandler}
          triggerClass="d-block"
          offset="medium"
          position="bottom-start"
          customStyle={popoverStyle}
          boundaryElement={boundaryElement}
          appendToBody={appendToBody}
          trigger={getTriggerElement()}
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

Select.Option = SelectOption;
Select.List = SelectList;
Select.SearchInput = SearchInput;
Select.EmptyTemplate = SelectEmptyTemplate;
Select.Footer = SelectFooter;

export default Select;
