import * as React from 'react';
import { OptionType } from '@/common.type';
import SelectContext from './SelectContext';
import SelectList from './SelectList';
import SelectOption from './SelectOption';
import { Popover, OutsideClick } from '@/index';
import SelectTrigger, { SelectTriggerProps } from './SelectTrigger';
import SearchInput from './SearchInput';
import SelectEmptyTemplate from './SelectEmptyTemplate';
import {
  focusListItem,
  focusPopoverInitial,
  getFocusableElements,
  getNextFocusableAfterTrigger,
  getRovingIndex,
  mapInitialValue,
} from './utils';
import SelectFooter from './SelectFooter';
import { BaseProps, extractBaseProps } from '@/utils/types';
import uidGenerator from '@/utils/uidGenerator';
import { PopoverProps } from '@/index.type';

export type SelectStyleType = 'filled' | 'outlined';

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
   *   id?: string | number;
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
   */
  width?: number | string;
  /**
   * Style type of the `Select`
   * @default "filled"
   */
  styleType?: SelectStyleType;
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
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * OptionType: {
   *   label: string;
   *   value: any;
   *   id?: string | number;
   * }
   * </pre>
   */
  value?: OptionType | OptionType[];
  /**
   * Determines if `Select` has error
   * @default false
   */
  error?: boolean;
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
   *  triggerSize?: 'small' | 'regular';
   *  icon?: string;
   *  placeholder?: string;
   *  inlineLabel?: string;
   *  iconType?: IconType;
   *  disabled?: boolean;
   *  withClearButton?: boolean;
   *  setLabel?: (count: number) => string | undefined;
   *  onClear?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
   *  minWidth?: number | string;
   *  maxWidth?: number | string;
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
   * | minWidth | Minimum width of the Select trigger button | - |
   * | maxWidth | Maximum width of the Select trigger button | - |
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
    boundaryElement,
    appendToBody,
    multiSelect = false,
    onOutsideClick,
    triggerOptions,
    popoverWidth,
    trigger,
    onToggle,
    styleType = 'filled',
    error = false,
  } = props;

  const [openPopover, setOpenPopover] = React.useState(false);
  const mapValue = mapInitialValue(multiSelect, value);

  const [selectValue, setSelectValue] = React.useState<OptionType | OptionType[]>(mapValue);
  const [isOptionSelected, setIsOptionSelected] = React.useState(false);

  const triggerRef = React.createRef<HTMLButtonElement>();
  const listRef = React.useRef<HTMLDivElement | null>(null);
  const wasOpenRef = React.useRef(false);

  const [withSearch, setWithSearch] = React.useState(false);

  const [focusedOption, setFocusedOption] = React.useState<HTMLElement | undefined>();
  const [highlightFirstItem, setHighlightFirstItem] = React.useState<boolean>(false);
  const [highlightLastItem, setHighlightLastItem] = React.useState<boolean>(false);
  const [rovingIndex, setRovingIndex] = React.useState<number>(-1);
  const [popoverStyle, setPopoverStyle] = React.useState<PopoverProps['customStyle']>({ width: popoverWidth || width });
  const listboxId = React.useRef(`select-listbox-${uidGenerator()}`).current;

  const baseProps = extractBaseProps(props);
  const WrapperStyle = trigger ? {} : { width: width };

  const getTriggerElement = () => {
    if (trigger) {
      return React.cloneElement(trigger, { ref: triggerRef });
    }
    return <SelectTrigger aria-controls={listboxId} {...triggerOptions} />;
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
      setRovingIndex(-1);
      if (wasOpenRef.current) {
        triggerRef.current?.focus({ preventScroll: true });
      }
    }
    wasOpenRef.current = openPopover;
  }, [openPopover]);

  React.useEffect(() => {
    if (!highlightFirstItem || !openPopover) return;
    let cancelled = false;
    const rafId = requestAnimationFrame(() => {
      if (cancelled) return;
      // Second rAF ensures options (and aria-selected) are in the DOM before we focus/roving
      requestAnimationFrame(() => {
        if (cancelled) return;
        const idx = focusPopoverInitial(listRef, setFocusedOption, selectValue);
        setRovingIndex(idx);
        setHighlightFirstItem(false);
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [highlightFirstItem, openPopover, selectValue]);

  React.useEffect(() => {
    if (!highlightLastItem || !openPopover) return;
    let cancelled = false;
    const rafId = requestAnimationFrame(() => {
      if (cancelled) return;
      focusListItem('up', setFocusedOption, listRef);
      setHighlightLastItem(false);
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, [highlightLastItem, openPopover]);

  React.useEffect(() => {
    if (!openPopover || !listRef.current) return;
    const idx = getRovingIndex(listRef, focusedOption, selectValue);
    setRovingIndex(idx);
  }, [openPopover, focusedOption, selectValue]);

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
    if (!multiSelect) {
      setOpenPopover(false);
      triggerRef.current?.focus({ preventScroll: true });
    }
  };

  const onOutsideClickHandler = () => {
    onOutsideClick?.();
  };

  const handlePopoverKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!openPopover || e.key !== 'Tab' || !listRef.current) return;
    const container = listRef.current;
    if (!container.contains(document.activeElement as Node)) return;
    const focusables = getFocusableElements(container);
    const currentIndex = focusables.length > 0 ? focusables.indexOf(document.activeElement as HTMLElement) : -1;
    if (focusables.length === 0 || currentIndex === -1) {
      e.preventDefault();
      setOpenPopover(false);
      const next = getNextFocusableAfterTrigger(
        triggerRef.current ?? null,
        e.shiftKey,
        container
      );
      if (next) {
        next.focus({ preventScroll: true });
      } else {
        triggerRef.current?.focus({ preventScroll: true });
      }
      return;
    }
    e.preventDefault();
    const nextIndex = e.shiftKey
      ? currentIndex === 0
        ? focusables.length - 1
        : currentIndex - 1
      : currentIndex === focusables.length - 1
        ? 0
        : currentIndex + 1;
    focusables[nextIndex].focus();
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
    styleType,
    error,
    rovingIndex,
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
            <div
              role="listbox"
              id={listboxId}
              tabIndex={-1}
              ref={listRef}
              onKeyDown={handlePopoverKeyDown}
            >
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
  styleType: 'filled',
};

Select.Option = SelectOption;
Select.List = SelectList;
Select.SearchInput = SearchInput;
Select.EmptyTemplate = SelectEmptyTemplate;
Select.Footer = SelectFooter;

export default Select;
