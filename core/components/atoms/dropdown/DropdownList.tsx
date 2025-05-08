import * as React from 'react';
import { scrollIntoView, _isEqual, _isSelectAllPresent, scrollToOptionIndex, groupListOptions } from './utility';
import { Popover, Checkbox, Button, Text, Input } from '@/index';
import { PopoverProps } from '@/index.type';
import DropdownButton, { TriggerProps } from './DropdownButton';
import Option, { OptionRendererProps, OptionSchema } from './option';
import classNames from 'classnames';
import Loading from './Loading';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { ChangeEvent } from '@/common.type';
import { ErrorTemplate } from './ErrorTemplate';
import { ErrorType } from './Dropdown';
import dropdownStyles from '@css/components/dropdown.module.css';
import checkboxStyles from '@css/components/checkbox.module.css';

export type DropdownAlign = 'left' | 'right';
export type OptionType = 'DEFAULT' | 'WITH_ICON' | 'WITH_META' | 'ICON_WITH_META';

const alignmentMapping = {
  right: 'bottom-start' as const,
  left: 'bottom-end' as const,
};

export interface Selected {
  label: OptionSchema['label'];
  value: OptionSchema['value'];
}

export interface SelectAll {
  indeterminate: boolean;
  checked: boolean;
}

interface PopoverOptions {
  appendToBody?: PopoverProps['appendToBody'];
  hideOnReferenceEscape?: PopoverProps['hideOnReferenceEscape'];
  boundaryElement?: PopoverProps['boundaryElement'];
}

type TriggerAndOptionProps = TriggerProps & OptionRendererProps;

export interface ErrorTemplateProps {
  errorType?: ErrorType;
}

export interface DropdownListProps extends TriggerAndOptionProps {
  /**
   * Aligns the `Dropdown` left/right
   * @default "right"
   */
  align?: DropdownAlign;
  /**
   * Display message when there is no result
   */
  noResultMessage?: string;
  /**
   * Template to be rendered when **error: true**
   */
  errorTemplate?: (props: ErrorTemplateProps) => React.ReactElement;
  /**
   * Label of Select All checkbox
   * @default "Select All"
   */
  selectAllLabel?: string;
  /**
   * Label of Footer inside `Dropdown`
   * @default "Search for more options"
   */
  footerLabel?: string;
  /**
   * Label for selected options section
   * @default "Selected Items"
   */
  selectedSectionLabel?: string;
  /**
   * Label for the rest all items options section
   * @default "All Items"
   */
  allItemsSectionLabel?: string;
  /**
   * Label of Apply button
   *
   * (visible in case of `withCheckbox` and `showApplyButton`)
   * @default "Apply"
   */
  applyButtonLabel?: string;
  /**
   * Label of Cancel button
   *
   * (visible in case of `withCheckbox` and `showApplyButton`)
   * @default "Cancel"
   */
  cancelButtonLabel?: string;
  /**
   * Determines if user can type to search for options (Always true for options count > staticLimit)
   */
  withSearch?: boolean;
  /**
   * Determines if user can select more than one items
   */
  withCheckbox?: boolean;
  /**
   * Determines if `Select All` option is visible
   * **Applicable only in case of `withCheckbox` and `options <= staticLimit`**
   * @default true
   */
  withSelectAll?: boolean;
  /**
   * Updates the value of selected array after apply button is clicked, applicable in case of multiple selections
   */
  showApplyButton?: boolean;
  /**
   * Trims label if it is too long
   * @default true
   */
  truncateOption?: boolean;
  /**
   * Total Options in database
   */
  totalOptions?: number;
  /**
   * Specifies max height of `Dropdown`
   * @default 200
   */
  maxHeight?: number;
  /**
   * Adds custom width to `Dropdown Popper`
   */
  width?: number;
  /**
   * Adds maximum width to `Dropdown Popper`
   */
  maxWidth?: number;
  /**
   * Adds minimum width to `Dropdown Popper`
   */
  minWidth?: number;
  /**
   * Number of loaders to be shown when loading is true
   * @default 10
   */
  loadersCount?: number;
  /**
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * PopoverOptions:
   * {
   *    appendToBody?: boolean;
   *    hideOnReferenceEscape?: boolean;
   *    boundaryElement?: Element;
   * }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | appendToBody | Appends `Dropdown` inside body element | true |
   * | hideOnReferenceEscape | Hides the `Dropdown` when its reference element is outside the boundaries | true |
   * | boundaryElement | Boundary of Popover | |
   *
   */
  popoverOptions?: PopoverOptions;
  /**
   * Adds custom placeholder to searchBar
   */
  searchPlaceholder?: string;
  /**
   * Specify index of option where cursor should scroll
   * @ignore
   */
  scrollIndex?: number;
}

interface OptionsProps extends DropdownListProps, BaseProps {
  listOptions: OptionSchema[];
  searchTerm: string;
  triggerLabel: string;
  loadingOptions?: boolean;
  searchInit?: boolean;
  dropdownOpen?: boolean;
  async?: boolean;
  remainingOptions: number;
  firstEnabledOption: number;
  selected: OptionSchema[];
  tempSelected: OptionSchema[];
  previousSelected: OptionSchema[];
  selectAll: SelectAll;
  inputRef: React.RefObject<HTMLInputElement | null>;
  customTrigger?: (label: string) => React.ReactElement;
  applyOptions: () => void;
  cancelOptions: () => void;
  toggleDropdown: (open: boolean, type?: string) => void;
  onClearOptions: () => void;
  onSelectAll: (event: ChangeEvent) => void;
  onSearchChange?: (searchText: string) => void;
  onOptionSelect: (selected: any[] | any) => void;
  onSelect: (option: OptionSchema, checked: boolean) => void;
  updateOptions: () => void;
  errorType: ErrorType;
  errorTemplate?: (props: ErrorTemplateProps) => React.ReactElement;
}

export const usePrevious = (value: any) => {
  const ref = React.useRef<any>(undefined);
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const DropdownList = (props: OptionsProps) => {
  const {
    listOptions = [],
    inputRef,
    align = 'right',
    optionType = 'DEFAULT',
    applyButtonLabel = 'Apply',
    cancelButtonLabel = 'Cancel',
    truncateOption = true,
    withSelectAll = true,
    maxHeight = 200,
    customTrigger,
    selected,
    tempSelected,
    previousSelected,
    remainingOptions,
    firstEnabledOption,
    dropdownOpen,
    menu,
    searchTerm,
    showApplyButton,
    withCheckbox,
    withSearch,
    popoverOptions,
    onSearchChange,
    optionRenderer,
    applyOptions,
    cancelOptions,
    toggleDropdown,
    className,
    searchPlaceholder = 'Search..',
    scrollIndex,
    updateOptions,
    noResultMessage,
    errorType,
    loadingOptions,
  } = props;

  const baseProps = extractBaseProps(props);

  const dropdownRef = React.createRef<HTMLDivElement>();
  const triggerRef = React.createRef<HTMLDivElement>();
  const dropdownTriggerRef = React.createRef<HTMLButtonElement>();
  const dropdownCancelButtonRef = React.createRef<HTMLButtonElement>();
  const dropdownApplyButtonRef = React.createRef<HTMLButtonElement>();

  const [popoverStyle, setPopoverStyle] = React.useState<PopoverProps['customStyle']>();
  const [cursor, setCursor] = React.useState(firstEnabledOption);
  const [minHeight, setMinHeight] = React.useState<number | undefined>();

  const getMinHeight = () => {
    if (dropdownRef.current) {
      const minHeight = dropdownRef.current?.offsetHeight;
      minHeight && setMinHeight(minHeight);
    }
  };

  const isDropdownListBlank = listOptions.length === 0 && !loadingOptions && selected.length <= 0;

  React.useEffect(() => {
    let timer: any;
    if (dropdownOpen) {
      const { width, minWidth, maxWidth } = props;
      const popperWidth = triggerRef.current?.clientWidth;
      const popperMinWidth = showApplyButton ? 176 : menu ? 128 : popperWidth;

      const popperWrapperStyle = {
        width: width ? width : popperWidth,
        minWidth: minWidth ? minWidth : popperMinWidth,
        maxWidth: maxWidth ? maxWidth : '100%',
      };
      requestAnimationFrame(getMinHeight);

      setPopoverStyle(popperWrapperStyle);

      // scrolls to current time
      if (scrollIndex && tempSelected.length === 0) {
        timer = setTimeout(() => {
          scrollToOptionIndex(scrollIndex, listOptions);
        }, 100);
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [dropdownOpen]);

  React.useEffect(() => {
    if (firstEnabledOption !== cursor) setCursor(firstEnabledOption);
  }, [firstEnabledOption]);

  const {
    triggerSize = 'regular',
    placeholder = 'Select',
    icon,
    error,
    disabled,
    inlineLabel,
    triggerLabel,
    iconType,
  } = props;

  const CustomTrigger = customTrigger ? customTrigger(triggerLabel ? triggerLabel : placeholder) : <></>;
  const NewCustomTrigger = React.cloneElement(CustomTrigger, { tabIndex: 0, ref: dropdownTriggerRef });

  const trigger = customTrigger ? (
    NewCustomTrigger
  ) : (
    <DropdownButton
      placeholder={placeholder}
      triggerSize={triggerSize}
      open={dropdownOpen}
      icon={icon}
      disabled={disabled}
      inlineLabel={inlineLabel}
      menu={menu}
      error={error}
      ref={dropdownTriggerRef}
      iconType={iconType}
    >
      {triggerLabel}
    </DropdownButton>
  );

  const dropdownStyle: React.CSSProperties = {
    maxHeight,
    overflowY: 'auto',
    overflowX: 'hidden',
    minHeight: minHeight,
  };

  const loaderStyle: React.CSSProperties = {
    maxHeight: minHeight ? minHeight : maxHeight,
    overflowY: 'auto',
    overflowX: 'hidden',
    minHeight: minHeight,
  };

  const defaultErrorTemplate = () => {
    return (
      <ErrorTemplate
        dropdownStyle={{ ...dropdownStyle, minHeight: maxHeight }}
        updateOptions={updateOptions}
        errorType={errorType}
      />
    );
  };

  const getDropdownSectionClass = (showClearButton?: boolean) => {
    return classNames({
      [dropdownStyles['Dropdown-section']]: true,
      [dropdownStyles['Dropdown-section--withClear']]: showClearButton,
    });
  };

  const dropdownClass = classNames(
    {
      [dropdownStyles['Dropdown']]: true,
    },
    className
  );

  const dropdownWrapperClass = classNames({
    [dropdownStyles['Dropdown-wrapper']]: true,
    [dropdownStyles['Dropdown-wrapper--wrap']]: !truncateOption,
  });

  const SelectAllClass = classNames({
    [dropdownStyles['Option-checkbox--active']]: cursor === 0,
    [dropdownStyles['Option-checkboxWrapper']]: true,
    [dropdownStyles['Option-checkbox']]: true,
    ['OptionWrapper']: true,
  });

  const onToggleDropdown = (open: boolean, type?: string) => {
    toggleDropdown(open, type);
    if (!disabled) dropdownTriggerRef.current?.focus();
    setCursor(firstEnabledOption);
  };

  const onCancelOptions = () => {
    cancelOptions();
    dropdownTriggerRef.current?.focus();
  };

  const onApplyOptions = () => {
    applyOptions();
    dropdownTriggerRef.current?.focus();
  };

  const optionClickHandler = (item: any) => {
    props.onOptionSelect(item);
    dropdownTriggerRef.current?.focus();
  };

  const searchClearHandler = () => {
    setCursor(firstEnabledOption);
    if (onSearchChange && searchTerm) onSearchChange('');
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCursor(firstEnabledOption);
    if (onSearchChange) onSearchChange(event.target.value);
  };

  const updateActiveOption = (index: number, parentCheckbox?: boolean) => {
    const updatedIndex = withCheckbox && withSelectAll && !props.async && !parentCheckbox ? index + 1 : index;

    setCursor(updatedIndex);
  };

  const renderFooter = () => {
    const { footerLabel = 'Search for more options' } = props;
    return (
      <div className={dropdownStyles['Dropdown-footer']}>
        <Text size="small" appearance={'subtle'}>
          {footerLabel}
        </Text>
      </div>
    );
  };

  const renderGroups = (group: string, selectedGroup?: boolean) => {
    const { onClearOptions } = props;
    const isClearDisabled = selected.every((option) => option.disabled);

    return (
      <div className={getDropdownSectionClass(selectedGroup)}>
        <Text size="small" appearance={'subtle'}>
          {group}
        </Text>
        {selectedGroup && (
          <Button
            onClick={onClearOptions}
            disabled={isClearDisabled}
            appearance="transparent"
            size="tiny"
            type="button"
          >
            Clear
          </Button>
        )}
      </div>
    );
  };

  const renderApplyButton = () => {
    const disable = _isEqual(previousSelected, tempSelected) || props.loadingOptions;

    return (
      <div className={dropdownStyles['Dropdown-buttonWrapper']}>
        <Button
          ref={dropdownCancelButtonRef}
          className="mr-4"
          appearance={'basic'}
          onClick={onCancelOptions}
          disabled={props.loadingOptions}
          size={'tiny'}
          tabIndex={-1}
          data-test="DesignSystem-Dropdown-CancelButton"
          type="button"
        >
          {cancelButtonLabel}
        </Button>
        <Button
          ref={dropdownApplyButtonRef}
          appearance={'primary'}
          disabled={disable}
          size={'tiny'}
          onClick={onApplyOptions}
          data-test="DesignSystem-Dropdown-ApplyButton"
          type="button"
        >
          {applyButtonLabel}
        </Button>
      </div>
    );
  };

  const renderSearch = () => {
    return (
      <div className={dropdownStyles['Dropdown-inputWrapper']}>
        <Input
          name="Dropdown-search"
          icon={'search'}
          value={searchTerm}
          placeholder={searchPlaceholder}
          // TODO(a11y): research more on this.
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={true}
          onChange={searchHandler}
          onClear={searchClearHandler}
          ref={inputRef}
          autoComplete={'off'}
          className={dropdownStyles['Dropdown-input']}
        />
      </div>
    );
  };

  const renderLoading = (loadersLength: number) => {
    const arr = Array(loadersLength).fill('Loading');
    const type = withCheckbox ? 'WITH_CHECKBOX' : optionType;
    return arr.map((option, ind) => {
      return (
        <div className={dropdownStyles['Option-loading']} key={`${option}-${ind}`}>
          <Loading loadingType={type} optionIndex={ind} />
        </div>
      );
    });
  };

  const renderSelectAll = () => {
    const { selectAllLabel = 'Select All', selectAll, onSelectAll } = props;

    const label = selectAllLabel.trim() ? selectAllLabel.trim() : 'Select All';
    const id = `Checkbox-option-${label.toLowerCase().replace(/\s+/g, '')}-${new Date().getTime()}`;

    return (
      <div className={SelectAllClass} onMouseEnter={() => updateActiveOption(0, true)}>
        <label htmlFor={id} className={dropdownStyles['Checkbox-label']}>
          <Checkbox
            label={label}
            onChange={onSelectAll}
            checked={selectAll.checked}
            indeterminate={selectAll.indeterminate}
            tabIndex={-1}
            className={dropdownStyles['OptionCheckbox']}
            id={id}
          />
        </label>
      </div>
    );
  };

  const renderOptions = (item: OptionSchema, index: number) => {
    // const selectAllPresent = withCheckbox
    //   && remainingOptions === 0
    //   && searchTerm === ''
    //   && withSelectAll;

    const selectAllPresent = _isSelectAllPresent(searchTerm, remainingOptions, withSelectAll, withCheckbox);

    const active = selectAllPresent ? index + 1 === cursor : index === cursor;
    const optionIsSelected = tempSelected.findIndex((option) => option.value === item.value) !== -1;
    const id = `Checkbox-option-${index}-${item.value}-${new Date().getTime()}`;

    return (
      <label htmlFor={id} key={index}>
        <Option
          optionData={item}
          truncateOption={truncateOption}
          selected={optionIsSelected}
          index={index}
          updateActiveOption={updateActiveOption}
          optionRenderer={optionRenderer}
          active={active}
          checkboxes={withCheckbox}
          menu={menu}
          onClick={() => optionClickHandler(item)}
          onChange={(e) => props.onSelect(item, e.target.checked)}
          optionType={props.optionType}
          id={id}
        />
      </label>
    );
  };

  const renderDropdownSection = () => {
    const {
      selectedSectionLabel = 'Selected Items',
      allItemsSectionLabel = 'All Items',
      loadersCount = 10,
      errorTemplate = defaultErrorTemplate,
    } = props;
    const selectAllPresent = _isSelectAllPresent(searchTerm, remainingOptions, withSelectAll, withCheckbox);

    const groupedListOptions = groupListOptions(listOptions);

    const emptyMessageClass = classNames({
      [dropdownStyles['Dropdown-wrapper']]: true,
      'w-100': true,
    });

    if (loadersCount && loadingOptions) {
      return (
        <div className={dropdownStyles['Dropdown-loading']}>
          <div className={dropdownStyles['Dropdown-wrapper']} style={loaderStyle}>
            {renderLoading(loadersCount)}
          </div>
        </div>
      );
    }

    if (isDropdownListBlank) {
      if (noResultMessage) {
        return (
          <div className={emptyMessageClass} style={dropdownStyle} data-test="DesignSystem-Dropdown--errorWrapper">
            <div className={dropdownStyles['Option']}>
              <div className={dropdownStyles['Option-subinfo']}>{noResultMessage}</div>
            </div>
          </div>
        );
      } else {
        return errorTemplate && errorTemplate({ errorType });
      }
    }

    return (
      <div className={dropdownWrapperClass} style={dropdownStyle} ref={dropdownRef}>
        {selectAllPresent && renderSelectAll()}
        {selected.length > 0 && renderGroups(selectedSectionLabel, true)}
        {selected.map((option, index) => renderOptions(option, index))}
        {selected.length > 0 &&
          listOptions.length - selected.length > 0 &&
          !listOptions[0].group?.trim() && // allItemsSectionLabel is displayed only when there are no groups
          renderGroups(allItemsSectionLabel)}
        {groupedListOptions.map((option, index) => {
          const prevGroup =
            index > 0 ? groupedListOptions[index - 1].group : selected.length ? selectedSectionLabel : undefined;
          const currentGroup = option.group;
          const isGroupDifferent = prevGroup !== currentGroup;
          const updatedIndex = index + selected.length;

          return (
            <div className={dropdownStyles['Option-checkboxWrapper']} key={index}>
              {isGroupDifferent && currentGroup && renderGroups(currentGroup)}
              {renderOptions(option, updatedIndex)}
            </div>
          );
        })}
        {props.async && remainingOptions > 0 && renderFooter()}
      </div>
    );
  };

  const focusOption = (direction: string, classes: string) => {
    const elements = document.querySelectorAll(classes);

    const updatedCursor = direction === 'down' ? cursor + 1 : cursor - 1;
    let startIndex = updatedCursor;
    const endIndex = direction === 'down' ? elements.length : -1;

    while (startIndex !== endIndex) {
      const node = elements[startIndex];

      if (node.getAttribute('data-disabled') !== 'true') {
        const element: HTMLElement = elements[startIndex] as HTMLElement;
        if (element) scrollIntoView(dropdownRef.current, element);
        if (element !== undefined) setCursor(startIndex);
        break;
      }

      if (direction === 'down') {
        startIndex++;
      } else {
        startIndex--;
      }
    }
  };

  const onkeydown = (event: any) => {
    const optionClass = '.OptionWrapper';
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        dropdownOpen ? focusOption('down', optionClass) : onToggleDropdown(!dropdownOpen);
        break;
      case 'ArrowUp':
        event.preventDefault();
        dropdownOpen ? focusOption('up', optionClass) : onToggleDropdown(!dropdownOpen);
        break;
      case 'Enter': {
        const activeElement = document.activeElement;
        if (dropdownOpen && (inputRef.current === activeElement || dropdownTriggerRef.current === activeElement)) {
          event.preventDefault();
          const classes = withCheckbox ? `${optionClass} .${checkboxStyles['Checkbox-input']}` : optionClass;
          const elements = document.querySelectorAll(classes);
          const element = elements[cursor] as HTMLElement;
          if (element) element.click();
        }
        if (!dropdownOpen) onToggleDropdown(!dropdownOpen);
        break;
      }
      case 'Tab': {
        if (!showApplyButton && dropdownOpen) {
          event.preventDefault();
          onToggleDropdown(false, 'onClick');
          return;
        }

        const currentElement = document.activeElement;
        const disabledApplyButton = dropdownApplyButtonRef.current?.disabled;

        if (
          ((currentElement === dropdownCancelButtonRef.current && disabledApplyButton) ||
            currentElement === dropdownApplyButtonRef.current) &&
          dropdownOpen
        ) {
          event.preventDefault();
          onToggleDropdown(false, 'onClick');
          return;
        }

        if (showApplyButton && dropdownOpen) {
          event.preventDefault();
          if (currentElement === dropdownCancelButtonRef.current) {
            dropdownApplyButtonRef.current?.focus();
          } else {
            dropdownCancelButtonRef.current?.focus();
          }
        }

        break;
      }
      default:
        break;
    }
  };

  const enableSearch = withSearch || props.async;

  return (
    //TODO(a11y)
    //eslint-disable-next-line
    <div {...baseProps} className={dropdownClass} ref={triggerRef} onKeyDown={onkeydown}>
      <Popover
        onToggle={onToggleDropdown}
        trigger={trigger}
        triggerClass={!menu ? 'w-100' : ''}
        open={dropdownOpen}
        customStyle={popoverStyle}
        position={alignmentMapping[align]}
        {...popoverOptions}
        data-test="DesignSystem-Dropdown--Popover"
      >
        {enableSearch && renderSearch()}
        {renderDropdownSection()}
        {showApplyButton && withCheckbox && renderApplyButton()}
      </Popover>
    </div>
  );
};

DropdownList.displayName = 'DropdownList';

export default DropdownList;
