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
   *  'aria-label'?: string;
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
   * | aria-label | Accessible label for the Select trigger button | Select trigger |
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

  const [withSearch, setWithSearch] = React.useState(false);

  const [focusedOption, setFocusedOption] = React.useState<HTMLElement | undefined>();
  const [highlightFirstItem, setHighlightFirstItem] = React.useState<boolean>(false);
  const [highlightLastItem, setHighlightLastItem] = React.useState<boolean>(false);
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

  const closePopoverAndFocusTrigger = () => {
    onToggleHandler(false);
    setFocusedOption(undefined);
    triggerRef.current?.focus();
  };

  const focusOptionBoundary = (position: 'first' | 'last') => {
    const listItems = listRef.current?.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');

    if (!listItems?.length) {
      closePopoverAndFocusTrigger();
      return;
    }

    const targetIndex = position === 'first' ? 0 : listItems.length - 1;
    const targetOption = listItems[targetIndex] as HTMLElement;

    targetOption.focus();
    targetOption.scrollIntoView({ block: 'center' });
    setFocusedOption(targetOption);
  };

  const onPopoverKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab' || !openPopover) return;

    const container = listRef.current;
    if (!container) {
      closePopoverAndFocusTrigger();
      return;
    }

    const currentElement = document.activeElement;
    const optionSelector = '[data-test="DesignSystem-Listbox-ItemWrapper"]';
    const isOnOption = currentElement instanceof Element && !!currentElement.closest(optionSelector);

    const focusableSelector = 'button:not([disabled]), input:not([disabled]), [tabindex="0"]';
    const nonOptionFocusables = Array.from(container.querySelectorAll(focusableSelector)).filter((element) => {
      if (element === container) return false;
      if ((element as HTMLButtonElement | HTMLInputElement).disabled) return false;
      if (element.getAttribute('aria-disabled') === 'true') return false;
      if (element.closest(optionSelector)) return false;
      if ((element as HTMLElement).closest('[data-test="DesignSystem-Checkbox"]')) return false;
      return true;
    }) as HTMLElement[];

    const firstOption = container.querySelector(optionSelector);
    const beforeOptions: HTMLElement[] = [];
    const afterOptions: HTMLElement[] = [];

    nonOptionFocusables.forEach((element) => {
      if (!firstOption) {
        beforeOptions.push(element);
      } else if (element.compareDocumentPosition(firstOption) & Node.DOCUMENT_POSITION_FOLLOWING) {
        beforeOptions.push(element);
      } else {
        afterOptions.push(element);
      }
    });

    const tabStops: Array<HTMLElement | null> = [...beforeOptions, ...(firstOption ? [null] : []), ...afterOptions];

    let currentStop = -1;

    if (isOnOption) {
      currentStop = tabStops.indexOf(null);
    } else {
      currentStop = tabStops.findIndex((stop) => stop && (stop === currentElement || stop.contains(currentElement)));
    }

    event.preventDefault();

    if (event.shiftKey) {
      const previousStop = currentStop > 0 ? currentStop - 1 : -1;

      if (previousStop === -1) {
        closePopoverAndFocusTrigger();
      } else if (tabStops[previousStop] === null) {
        focusOptionBoundary('last');
      } else {
        setFocusedOption(undefined);
        (tabStops[previousStop] as HTMLElement).focus();
      }

      return;
    }

    const nextStop = currentStop !== -1 && currentStop < tabStops.length - 1 ? currentStop + 1 : -1;

    if (nextStop === -1) {
      closePopoverAndFocusTrigger();
    } else if (tabStops[nextStop] === null) {
      focusOptionBoundary('first');
    } else {
      setFocusedOption(undefined);
      (tabStops[nextStop] as HTMLElement).focus();
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
    styleType,
    error,
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
            <div role="listbox" id={listboxId} tabIndex={0} ref={listRef} onKeyDown={onPopoverKeyDown}>
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
