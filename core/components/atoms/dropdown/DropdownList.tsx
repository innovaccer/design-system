import * as React from 'react';
import { scrollIntoView, _isEqual } from './utility';
import Popover, { Position } from '@/components/molecules/popover';
import DropdownButton, { TriggerProps } from './DropdownButton';
import Checkbox from '@/components/atoms/checkbox';
import Option, { OptionRendererProps, OptionSchema } from './option';
import Button from '@/components/atoms/button';
import Text from '@/components/atoms/text';
import Input from '@/components/atoms/input';
import classNames from 'classnames';
import Loading from './Loading';

export type DropdownAlign = 'left' | 'right';
export type OptionType =
  'DEFAULT' |
  'WITH_ICON' |
  'WITH_META' |
  'ICON_WITH_META';

const alignmentMapping = {
  right: 'bottom-start' as Position,
  left: 'bottom-end' as Position
};

export interface Selected {
  label: string;
  value: any;
}

export interface SelectAll {
  indeterminate: boolean;
  checked: boolean;
}

type ListProps = TriggerProps & OptionRendererProps;

export interface DropdownListProps extends ListProps {
  /**
   * Aligns the `Dropdown` left/right
   * @default "right"
   */
  align?: DropdownAlign;
  /**
   * Display message when there is no result
   * @default "No result found"
   */
  noResultMessage?: string;
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
   * Determines if user can type to search for options (Always true for options count > 50)
   */
  search?: boolean;
  /**
   * Determines if user can select more than one items
   */
  checkboxes?: boolean;
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
   * Adds custom width to `Dropdown Trigger` and `Dropdown Popper` (Min-width is 128px)
   */
  width?: number;
  /**
   * Number of loaders to be shown when loading is true
   * @default 10
   */
  loadersCount?: number;
}

interface OptionsProps extends DropdownListProps {
  listOptions: OptionSchema[];
  searchTerm: string;
  triggerLabel: string;
  loadingOptions?: boolean;
  dropdownOpen?: boolean;
  async?: boolean;
  remainingOptions: number;
  selected: OptionSchema[];
  tempSelected: OptionSchema[];
  previousSelected: OptionSchema[];
  selectAll: SelectAll;
  customTrigger?: (label: string) => React.ReactElement;
  applyOptions: () => void;
  cancelOptions: () => void;
  toggleDropdown: () => void;
  onClearOptions: () => void;
  onSelectAll: (selectedAll: boolean) => void;
  onSearchChange?: (searchText: string) => void;
  onOptionSelect: (selected: any[] | any) => void;
  onSelect: (option: OptionSchema, checked: boolean) => void;
}

export const usePrevious = (value: any) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const DropdownList = (props: OptionsProps) => {
  const {
    listOptions = [],
    align = 'right',
    optionType = 'DEFAULT',
    truncateOption = true,
    maxHeight = 200,
    customTrigger,
    selected,
    tempSelected,
    previousSelected,
    remainingOptions,
    dropdownOpen,
    menu,
    searchTerm,
    maxWidth,
    showApplyButton,
    checkboxes,
    search,
    onSearchChange,
    optionRenderer,
    applyOptions,
    cancelOptions,
    toggleDropdown,
  } = props;

  const dropdownRef = React.createRef<HTMLDivElement>();
  const triggerRef = React.createRef<HTMLDivElement>();
  const dropdownInputRef = React.createRef<HTMLInputElement>();
  const dropdownTriggerRef = React.createRef<HTMLButtonElement>();
  const dropdownCancelButtonRef = React.createRef<HTMLButtonElement>();
  const dropdownApplyButtonRef = React.createRef<HTMLButtonElement>();

  const [popoverStyle, setPopoverStyle] = React.useState<React.CSSProperties>();
  const [cursor, setCursor] = React.useState(0);

  const width = props.width ? props.width : menu || customTrigger ? 'fit-content' : '100%';

  React.useEffect(() => {
    if (dropdownOpen) {
      const dropdownElement = triggerRef.current;
      const popoverWidth = props.width ? props.width : `${dropdownElement?.parentElement?.clientWidth}px`;

      const popperWrapperStyle = {
        width: menu || customTrigger ? popoverWidth : `${dropdownElement?.clientWidth}px`,
        minWidth: showApplyButton && checkboxes ? '176px' : '128px',
        maxWidth: maxWidth ? maxWidth : '100%',
      };

      setPopoverStyle(popperWrapperStyle);
    }
  }, [dropdownOpen]);

  const {
    triggerSize = 'regular',
    placeholder = 'Select',
    icon,
    error,
    disabled,
    inlineLabel,
    triggerLabel
  } = props;

  const CustomTrigger = customTrigger ? customTrigger(triggerLabel ? triggerLabel : placeholder) : <></>;
  const NewCustomTrigger = React.cloneElement(CustomTrigger, { tabindex: 0, ref: dropdownTriggerRef });

  const trigger = customTrigger ? NewCustomTrigger : (
    <DropdownButton
      placeholder={placeholder}
      triggerSize={triggerSize}
      icon={icon}
      disabled={disabled}
      inlineLabel={inlineLabel}
      maxWidth={maxWidth}
      menu={menu}
      error={error}
      ref={dropdownTriggerRef}
    >
      {triggerLabel}
    </DropdownButton>
  );

  const dropdownStyle: React.CSSProperties = {
    maxHeight,
    overflowY: 'auto',
    overflowX: 'hidden',
  };

  const getDropdownClass = (index: number, isGroup: boolean) => {
    const Dropdown = classNames({
      ['Dropdown--border']: isGroup && index !== 0,
    });

    return Dropdown;
  };

  const dropdownClass = classNames({
    ['Dropdown']: true,
  });

  const dropdownWrapperClass = classNames({
    ['Dropdown-wrapper']: true,
    ['Dropdown-wrapper--wrap']: !truncateOption,
  });

  const SelectAllClass = classNames({
    ['Option']: true,
    ['Option-wrapper']: true,
    ['Option--top']: true,
    ['Option--active']: cursor === 0
  });

  const onToggleDropdown = () => {
    toggleDropdown();
    if (!disabled) dropdownTriggerRef.current?.focus();
    setCursor(0);
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
    setCursor(0);
    if (onSearchChange && searchTerm) onSearchChange('');
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCursor(0);
    if (onSearchChange) onSearchChange(event.target.value);
  };

  const updateActiveOption = (index: number, parentCheckbox?: boolean) => {
    const updatedIndex = checkboxes && !props.async && !parentCheckbox ? index + 1 : index;
    setCursor(updatedIndex);
  };

  const renderFooter = () => {
    const { footerLabel = 'Search for more options' } = props;
    return (
      <div className={'Dropdown-footer'}>
        <Text small={true} appearance={'subtle'}>{footerLabel}</Text>
      </div>
    );
  };

  const renderGroups = (group: string, selectedGroup?: boolean) => {
    const { onClearOptions } = props;
    return (
      <div className={'Dropdown-subinfo'}>
        <Text small={true} appearance={'subtle'}>{group}</Text>
        {selectedGroup && (
          <div onClick={onClearOptions} className={'Dropdown-clear'}>
            <Text>Clear</Text>
          </div>
        )}
      </div>
    );
  };

  const renderApplyButton = () => {
    const disable = _isEqual(previousSelected, tempSelected);
    return (
      <div className={'Dropdown-buttonWrapper'}>
        <Button
          ref={dropdownCancelButtonRef}
          className="mr-4"
          appearance={'basic'}
          onClick={onCancelOptions}
          tabIndex={-1}
        >
          Cancel
        </Button>
        <Button
          ref={dropdownApplyButtonRef}
          appearance={'primary'}
          disabled={disable}
          onClick={onApplyOptions}
        >
          Apply
        </Button>
      </div>
    );
  };

  const renderSearch = () => {
    return (
      <div className={'Dropdown-input'}>
        <Input
          name="Dropdown-search"
          icon={'search'}
          value={searchTerm}
          placeholder={'Search..'}
          disabled={false}
          autoFocus={true}
          onChange={searchHandler}
          onClear={searchClearHandler}
          ref={dropdownInputRef}
          autocomplete={'off'}
        />
      </div>
    );
  };

  const renderLoading = (loadersLength: number) => {
    const arr = Array(loadersLength).fill('Loading');
    const type = checkboxes ? 'WITH_CHECKBOX' : optionType;
    return (
      arr.map((option, ind) => {
        return (
          <div className="Option-loading" key={`${option}-${ind}`}>
            <Loading loadingType={type} />
          </div>
        );
      })
    );
  };

  const renderSelectAll = () => {
    const {
      selectAllLabel = 'Select All',
      selectAll,
      onSelectAll
    } = props;

    const label = selectAllLabel.trim() ? selectAllLabel.trim() : 'Select All';
    return (
      <div className={SelectAllClass} onMouseEnter={_e => updateActiveOption(0, true)}>
        <Checkbox
          label={label}
          onChange={onSelectAll}
          checked={selectAll.checked}
          indeterminate={selectAll.indeterminate}
          tabIndex={-1}
        />
      </div>
    );
  };

  const renderOptions = (item: OptionSchema, index: number) => {
    const selectAllPresent = checkboxes && remainingOptions === 0 && searchTerm === '';
    const active = selectAllPresent ? index + 1 === cursor : index === cursor;
    const top = index === 0 && !selectAllPresent;
    const bottom = index + 1 === (listOptions.length + selected.length) && !(props.async && remainingOptions > 0);
    const optionIsSelected = tempSelected.findIndex(option => option.value === item.value) !== -1;

    return (
      <Option
        optionData={item}
        optionIsTop={top}
        optionIsBottom={bottom}
        truncateOption={truncateOption}
        selected={optionIsSelected}
        index={index}
        onClick={() => optionClickHandler(item)}
        updateActiveOption={updateActiveOption}
        optionRenderer={optionRenderer}
        active={active}
        checkboxes={checkboxes}
        menu={menu}
        onChange={c => props.onSelect(item, c)}
        optionType={props.optionType}
      />
    );
  };

  const renderDropdownSection = () => {
    const { selectedSectionLabel = 'Selected Items', loadersCount = 10, loadingOptions } = props;
    if (loadersCount && loadingOptions) {
      return (
        <div className={'Dropdown-loading'}>
          <div className="Dropdown-scroller" style={dropdownStyle}>
            {
              renderLoading(loadersCount)
            }
          </div>
        </div>
      );
    }

    if (listOptions.length === 0 && !loadingOptions) {
      const { noResultMessage = 'No result found' } = props;
      return (
        <div className={'Dropdown-errorWrapper'}>
          <div className={'Option'}>
            <div className={'Option-subinfo'}>{noResultMessage}</div>
          </div>
        </div>
      );
    }

    return (
      <div className={dropdownWrapperClass}>
        {checkboxes && remainingOptions === 0 && searchTerm === '' && renderSelectAll()}
        <div className="Dropdown-scroller" style={dropdownStyle} ref={dropdownRef}>
          {selected.length > 0 && renderGroups(selectedSectionLabel, true)}
          {
            selected.map((option, index) =>
              renderOptions(option, index)
            )
          }
          {
            listOptions.map((option, index) => {
              const prevGroup = index > 0 ?
                listOptions[index - 1].group : selected.length ? selectedSectionLabel : undefined;
              const currentGroup = option.group;
              const isGroup = prevGroup !== currentGroup;
              const updatedIndex = index + selected.length;

              return (
                <div className={getDropdownClass(updatedIndex, isGroup)} key={index}>
                  {isGroup && currentGroup && renderGroups(currentGroup)}
                  {renderOptions(option, updatedIndex)}
                </div>
              );
            })
          }
          {props.async && remainingOptions > 0 && renderFooter()}
        </div>
      </div>
    );
  };

  const focusOption = (direction: string, className: string) => {
    const updatedCursor = direction === 'down' ? cursor + 1 : cursor - 1;
    const elements = document.querySelectorAll(className);
    const element: HTMLElement = elements[updatedCursor] as HTMLElement;
    if (element) scrollIntoView(dropdownRef.current, element);
    if (element !== undefined) setCursor(updatedCursor);
  };

  const onkeydown = (event: any) => {
    const optionClass = optionRenderer ? '.Option-wrapper' : '.Option';
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        dropdownOpen ? focusOption('down', optionClass) : onToggleDropdown();
        break;
      case 'ArrowUp':
        event.preventDefault();
        dropdownOpen ? focusOption('up', optionClass) : onToggleDropdown();
        break;
      case 'Enter':
        const activeElement = document.activeElement;
        if (
          dropdownOpen &&
          (dropdownInputRef.current === activeElement || dropdownTriggerRef.current === activeElement)
        ) {
          event.preventDefault();
          const className = checkboxes ? `${optionClass} .Checkbox` : optionClass;
          const elements = document.querySelectorAll(className);
          const element = elements[cursor] as HTMLElement;
          if (element) element.click();
        }
        if (!dropdownOpen) onToggleDropdown();
        break;
      case 'Tab':
        if (!showApplyButton && dropdownOpen) {
          event.preventDefault();
          onToggleDropdown();
          return;
        }

        const currentElement = document.activeElement;
        const disabledApplyButton = dropdownApplyButtonRef.current?.disabled;

        if (
          ((currentElement === dropdownCancelButtonRef.current
            && disabledApplyButton
          )
            || currentElement === dropdownApplyButtonRef.current
          ) && dropdownOpen
        ) {
          event.preventDefault();
          onToggleDropdown();
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
      default:
        break;
    }
  };

  return (
    <div
      className={dropdownClass}
      ref={triggerRef}
      style={{ width }}
      onKeyDown={onkeydown}
    >
      <Popover
        onToggle={onToggleDropdown}
        trigger={trigger}
        open={dropdownOpen}
        style={popoverStyle}
        position={alignmentMapping[align]}
        appendToBody={true}
      >
        {(search || props.async) && renderSearch()}
        {renderDropdownSection()}
        {showApplyButton && checkboxes && renderApplyButton()}
      </Popover >
    </div>
  );
};

DropdownList.displayName = 'DropdownList';

export default DropdownList;
