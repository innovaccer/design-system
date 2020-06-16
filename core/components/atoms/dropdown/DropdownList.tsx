import * as React from 'react';
import { debounce } from 'throttle-debounce';
import Popover, { Position } from '@/components/molecules/popover';
import DropdownButton from './DropdownButton';
import ListCheckbox from './ListCheckbox';
import Option, { OptionRendererProps } from './option';
import Button from '@/components/atoms/button';
import Text from '@/components/atoms/text';
import Input from '@/components/atoms/input';
import classNames from 'classnames';
import Loading from './Loading';

export type Size = 'tiny' | 'regular';
export type DropdownAlign = 'left' | 'right';
type ExternalOptionType =
  'DEFAULT' |
  'WITH_ICON' |
  'WITH_META' |
  'ICON_WITH_META';

type CheckboxOptionType = 'WITH_CHECKBOX';
type AllOptionType = ExternalOptionType | CheckboxOptionType;
export type OptionType = ExternalOptionType;

const DropdownAlignMapping = {
  right: 'bottom-start' as Position,
  left: 'bottom-end' as Position
};

export interface Option {
  icon?: string;
  subInfo?: string;
  group?: string;
  label: string;
  value: any;
  selectedGroup?: boolean;
}

export interface DropdownListProps extends OptionRendererProps {
  /**
   * Size of `Dropdown` trigger button
   * @default "regular"
   */
  triggerSize?: Size;
  /**
   * Aligns the `Dropdown` left/right
   * @default "right"
   */
  dropdownAlign?: DropdownAlign;
  /**
   * Material icon name
   */
  icon?: string;
  /**
   * Option Type
   */
  optionType?: AllOptionType;
  /**
   * String to show when no options are selected
   */
  placeholder?: string;
  /**
   * Label inside `Dropdown button`
   */
  inlineLabel?: string;
  /**
   * Display message when there is no result
   * @default "No result found"
   */
  searchResultMessage?: string;
  /**
   * Parent Checkbox label
   * @default "Select All"
   */
  parentCheckboxLabel?: string;
  /**
   * Label of Footer inside `Dropdown`
   * @default "Search for more options"
   */
  footerLabel?: string;
  /**
   * Determines if type of `dropdown` is a menu
   * @default false
   */
  menu?: boolean;
  /**
   * Determines if `dropdown` is disabled
   */
  disabled?: boolean;
  /**
   * Determines if user can type to search for options
   */
  search?: boolean;
  /**
   * Determines if user can select more than one items
   */
  checkboxes?: boolean;
  /**
   * Determines if dropdown closes on select
   * @default true
   */
  closeOnSelect?: boolean;
  /**
   * Updates the value of selected array after apply button is clicked, applicable in case of multiple selections
   */
  showApplyButton?: boolean;
  /**
   * Wrap label to next line if it is too long
   */
  optionsWrap?: boolean;
  /**
   * Number of selected options to be shown on `Dropdown button`
   * @default 2
   */
  checkedValuesOffset?: number;
  /**
   * Total Options in database
   */
  totalOptions?: number;
  /**
   * Specifies max height of `Dropdown options`
   * @default 200
   */
  maxHeight?: number;
  /**
   * Pre-selected options
   */
  selected?: Option[];
  /**
   * Adds custom width to `Dropdown`
   */
  width?: number;
  /**
   * Adds max width to `Dropdown`
   */
  maxWidth?: number;
  /**
   * Callback function to change the label of trigger button when options are selected
   */
  onChangeTriggerLabel?: (selected: number, totalOptions?: number) => string;
  /**
   * Adds custom trigger
   */
  customTrigger?: (label?: string) => React.ReactElement;
}

interface OptionsProps extends DropdownListProps {
  listOptions: Option[];
  bufferedOption?: Option;
  searchTerm: string;
  bottomOptionsSliced?: boolean;
  topOptionsSliced?: boolean;
  loadingOptions?: boolean;
  searchInit?: boolean;
  async?: boolean;
  limit: number;
  slicedOptionsLength: number;
  remainingOptions: number;
  offset: number;
  optionsLength: number;
  bottomScrollOffset?: number;
  selectedAll?: any;
  onSearchChange?: (searchText: string) => void;
  onScroll?: (direction: string) => void;
  onChange?: (selected: any[] | any) => void;
  onSelectAll?: (selectedAll: boolean) => void;
  onRearrangeOptions?: (selected: any[], selectedLabels: string[]) => void;
  renderOptionsFromTop: () => void;
}

let lastScrollTop = 0;
const bottomScrollOffset = 64;

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
    dropdownAlign = 'right',
    closeOnSelect = true,
    optionsWrap = false,
    parentCheckboxLabel = 'Select All',
    maxHeight = 200,
    remainingOptions,
    totalOptions,
    menu,
    bufferedOption,
    loadingOptions,
    searchTerm,
    limit,
    maxWidth,
    optionsLength,
    showApplyButton,
    checkboxes,
    search,
    onChange,
    onSearchChange,
    onScroll,
    onSelectAll,
    onRearrangeOptions,
    optionRenderer,
  } = props;

  let {
    optionType = 'DEFAULT'
  } = props;
  if (checkboxes) {
    optionType = 'WITH_CHECKBOX';
  }

  const dropdownRef = React.createRef<HTMLDivElement>();
  const triggerRef = React.createRef<HTMLDivElement>();

  const [selected, setSelected] = React.useState<any[]>([]);
  const [selectedLabels, setSelectedLabels] = React.useState<string[]>([]);
  const [buttonLabel, setButtonLabel] = React.useState<string | undefined>('');
  const [dropdownOpen, setDropdownOpen] = React.useState<boolean | undefined>();
  const [popoverStyle, setPopoverStyle] = React.useState<React.CSSProperties>();
  const [previousSelected, setPreviousSelected] = React.useState<any[]>([]);
  const [previousSelectedLabels, setPreviousSelectedLabels] = React.useState<any[]>([]);
  const [optionsApplied, setOptionsApplied] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const prevDropdownOpen = usePrevious(dropdownOpen);
  const prevListOptions = usePrevious(listOptions);
  const width = props.width ? props.width : '100%';

  const setSelectButtonLabel = (selectedArray: any[] = []) => {
    const { checkedValuesOffset = 2 } = props;
    const selectedLength = selectedArray.length;
    let label = '';

    if (selectedLength <= checkedValuesOffset) {
      const labelArray: string[] = [];
      selectedArray.forEach(selectedLabel => {
        labelArray.push(selectedLabel);
      });
      label = labelArray.join(', ');
    } else {
      label = props.onChangeTriggerLabel ?
        props.onChangeTriggerLabel(selectedLength, totalOptions) : `${selectedLength} selected`;
    }
    setSelectedLabels(selectedArray);
    setButtonLabel(label);
  };

  React.useEffect(() => {
    if (dropdownOpen) {
      const dropdownElement = triggerRef.current;
      const popoverWidth = width !== '100%' ? width : `${dropdownElement?.parentElement?.clientWidth}px`;

      const popperWrapperStyle = {
        width: menu ? popoverWidth : `${dropdownElement?.clientWidth}px`,
        minWidth: showApplyButton && checkboxes ? '176px' : '128px',
        maxWidth: maxWidth ? maxWidth : '100%'
      };
      setPopoverStyle(popperWrapperStyle);
    }
  }, [dropdownOpen, checkboxes, showApplyButton]);

  React.useEffect(() => {
    if (props.selected) {
      let selectedValuesArray = selected.slice();
      let selectedLabelsArray = selectedLabels.slice();
      props.selected.forEach(selectedOption => {
        const { label, value } = selectedOption;
        if (!selectedValuesArray.includes(value)) {
          selectedValuesArray = selectedValuesArray.concat(value);
          selectedLabelsArray = selectedLabelsArray.concat(label);
        }
      });
      setPreviousSelected(selectedValuesArray);
      setPreviousSelectedLabels(selectedLabelsArray);
      setSelected(selectedValuesArray);
      setSelectButtonLabel(selectedLabelsArray);
    }
  }, [JSON.stringify(props.selected)]);

  React.useEffect(() => {
    if (props.selectedAll) {
      const { label, value } = props.selectedAll;
      if (label && value) {
        let selectedLabelsCopy = selectedLabels.slice();
        let selectedValue = selected.slice();
        selectedLabelsCopy = label;
        selectedValue = value;
        setSelected(selectedValue);
        setSelectButtonLabel(selectedLabelsCopy);
      }
    }
  }, [props.selectedAll]);

  React.useEffect(() => {
    if (props.bottomOptionsSliced && dropdownRef.current) {
      const className = '.Option-wrapper';
      const element = document.querySelectorAll(className);
      const index = element.length - limit + props.slicedOptionsLength;
      const marker = element[index] as HTMLElement;
      const updatedScrollTop = marker.offsetTop - (maxHeight);

      dropdownRef.current.scrollTop = updatedScrollTop;
      lastScrollTop = updatedScrollTop;
    }
  }, [props.bottomOptionsSliced]);

  React.useEffect(() => {
    if (props.topOptionsSliced && dropdownRef.current) {
      const className = '.Option-wrapper';
      const element = document.querySelectorAll(className);
      const index = limit - props.slicedOptionsLength;
      const marker = element[index] as HTMLElement;

      dropdownRef.current.scrollTop = marker.offsetTop;
      lastScrollTop = marker.offsetTop;
    }
  }, [props.topOptionsSliced]);

  React.useEffect(() => {
    const rearrangeCondition = dropdownOpen && props.async && checkboxes;
    if (rearrangeCondition && onRearrangeOptions) onRearrangeOptions(selected, selectedLabels);
  }, [dropdownOpen]);

  React.useEffect(() => {
    const rearrangeCondition = !searchTerm && props.searchInit && props.async && checkboxes;
    if (rearrangeCondition && onRearrangeOptions) onRearrangeOptions(selected, selectedLabels);
  }, [searchTerm, props.searchInit]);

  const {
    triggerSize = 'regular',
    placeholder,
    icon,
    disabled,
    inlineLabel,
  } = props;

  const trigger = props.customTrigger ? props.customTrigger(buttonLabel) : (
    <DropdownButton
      placeholder={placeholder}
      size={triggerSize}
      icon={icon}
      disabled={disabled}
      inlineLabel={inlineLabel}
      width={width}
      maxWidth={maxWidth}
      menu={menu}
    >
      {buttonLabel}
    </DropdownButton>
  );

  const dropdownWrapperStyle = menu ? {} : {
    width,
  };

  const dropdownStyle: React.CSSProperties = {
    maxHeight,
    overflowY: 'auto',
    overflowX: 'hidden',
  };

  const getDropdownClass = (index: number, currentGroup: string | undefined, isGroup: boolean) => {
    const Dropdown = classNames({
      ['Dropdown--border']: currentGroup !== undefined && isGroup && index !== 0,
    });

    return Dropdown;
  };

  const dropdownClass = classNames({
    ['Dropdown']: true,
    ['Dropdown--placeholder']: !menu,
    ['Dropdown--menu']: menu,
  });

  const dropdownWrapperClass = classNames({
    ['Dropdown-wrapper']: true,
    ['Dropdown-wrapper--wrap']: optionsWrap,
  });

  const onToggleDropdown = () => {
    if (!dropdownOpen) {
      props.renderOptionsFromTop();
    }
    if (!disabled) setDropdownOpen(!dropdownOpen);
    if (!(optionsApplied || !showApplyButton)) {
      setSelected(previousSelected);
      setSelectButtonLabel(previousSelectedLabels);
    }
    setOptionsApplied(false);
    if (search || props.async) searchClearHandler();
  };

  const debounceClear = debounce(400, () => {
    if (onRearrangeOptions) onRearrangeOptions([], []);
    setLoading(false);
  });

  const onClearOptions = () => {
    setSelected([]);
    setSelectButtonLabel([]);
    setLoading(true);
    debounceClear();
    if (onChange && !showApplyButton) onChange([]);
  };

  const onCancelOptions = () => {
    setSelected(previousSelected);
    setSelectedLabels(previousSelectedLabels);
    setSelectButtonLabel(previousSelectedLabels);
    setDropdownOpen(false);
  };

  const onApplyOptions = () => {
    setPreviousSelected(selected);
    setPreviousSelectedLabels(selectedLabels);
    setOptionsApplied(true);
    setDropdownOpen(false);
    if (onChange) onChange(selected);
  };

  const checkboxChangeHandler = (selectedArray: number[], selectedLabelsArray: string[], parentChecked: boolean) => {
    if ((selectedArray.length === 0 || selectedArray.length === optionsLength) || !parentChecked) {
      setSelected(selectedArray);
      setSelectButtonLabel(selectedLabelsArray);
    }
    if (parentChecked) {
      if (onSelectAll) onSelectAll(selectedArray.length > 0);
    } else {
      if (onChange && !showApplyButton) onChange(selectedArray);
    }
  };

  const optionClickHandler = (item: any) => {
    const { label, value } = item;
    setSelectedLabels([label]);
    setButtonLabel(label);
    setSelected([value]);
    setDropdownOpen(!closeOnSelect);
    if (onChange) onChange(value);
  };

  const searchClearHandler = () => {
    if (onSearchChange && searchTerm) onSearchChange('');
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearchChange) onSearchChange(event.target.value);
  };

  const onScrollDropdown = (direction: string, scrollTop: number) => {
    lastScrollTop = scrollTop;
    if (onScroll) {
      onScroll(direction);
    }
  };

  const handleMenuScroll = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const element = e.target as HTMLDivElement;
    const scrollTop = element.scrollTop;
    if (scrollTop <= lastScrollTop) {
      if (scrollTop <= bottomScrollOffset) onScrollDropdown('up', scrollTop);
    } else {
      const scrollContainerBottomPosition = Math.round(element.scrollTop + element.clientHeight);
      const scrollPosition = Math.round(element.scrollHeight - (bottomScrollOffset));

      if (scrollPosition <= scrollContainerBottomPosition) {
        onScrollDropdown('down', scrollTop);
      }
    }
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
    const disable = JSON.stringify(previousSelectedLabels) === JSON.stringify(selected);
    return (
      <div className={'Dropdown-buttonWrapper'}>
        <div style={{ marginRight: '8px' }}>
          <Button appearance={'basic'} onClick={onCancelOptions}> Cancel </Button>
        </div>
        <Button appearance={'primary'} disabled={disable} onClick={onApplyOptions}> Apply </Button>
      </div>
    );
  };

  const renderSearch = () => {
    return (
      <div className={'Dropdown-input'}>
        <Input
          name="search"
          icon={'search'}
          value={searchTerm}
          placeholder={'Search..'}
          disabled={false}
          clearButton={true}
          onChange={searchHandler}
          onClear={searchClearHandler}
        />
      </div>
    );
  };

  const renderLoading = (loadersLength: number) => {
    const arr = Array(loadersLength).fill('Loading');
    return (
      arr.map((option, ind) => {
        return (
          <div className="Option-loading" key={`${option}-${ind}`}>
            <Loading optionType={optionType} />
          </div>
        );
      })
    );
  };

  const renderCheckboxes = () => {
    const list: any[] = [];
    const updatedChecked: boolean[] = [];
    const parentChecked = selected.length === optionsLength;
    const showParentCheckbox = searchTerm === '' && !props.async;
    const selectedCondition = prevDropdownOpen !== dropdownOpen || props.searchInit || prevListOptions !== listOptions;
    const parentLabel = parentCheckboxLabel.trim() ? parentCheckboxLabel.trim() : 'Select All';
    const showGroups = props.async;

    listOptions.forEach(option => {
      const { label, value, group, selectedGroup } = option;
      let checkedValue = false;

      if (selectedCondition && selected && selected.length > 0) {
        const updatedVal = JSON.stringify(value);
        checkedValue = (selected.findIndex(item => JSON.stringify(item) === updatedVal) !== -1) ? true : false;
        updatedChecked.push(checkedValue);
      }
      list.push({ label, value, group, selectedGroup, checked: checkedValue });
    });

    return (
      <ListCheckbox
        label={parentLabel}
        onChange={checkboxChangeHandler}
        checked={parentChecked}
        renderFooter={renderFooter}
        renderGroups={renderGroups}
        remainingOptions={remainingOptions}
        bufferedOption={bufferedOption}
        showGroups={showGroups}
        list={list}
        updatedSelectedArray={updatedChecked}
        style={dropdownStyle}
        ref={dropdownRef}
        selected={selected}
        selectedLabels={selectedLabels}
        optionsLength={optionsLength}
        showParentCheckbox={showParentCheckbox}
        optionRenderer={optionRenderer}
      />
    );
  };

  const renderOptions = (item: Option, index: number) => {
    const top = index === 0;
    const bottom = index + 1 === listOptions.length && !(props.async && remainingOptions > 0);

    return (
      <Option
        optionData={item}
        optionType={optionType}
        optionIsTop={top}
        optionIsBottom={bottom}
        optionsWrap={optionsWrap}
        selected={selected[0] === item.value}
        index={index}
        onClick={() => optionClickHandler(item)}
        optionRenderer={optionRenderer}
      />
    );
  };

  const renderDropdownSection = () => {
    if (loadingOptions || loading) {
      return (
        <div className={'Dropdown-loading'}>
          <div className="Dropdown-scroller" style={dropdownStyle}>
            {
              renderLoading(limit)
            }
          </div>
        </div>
      );
    }

    if (listOptions.length === 0 && !(loading || loadingOptions)) {
      const { searchResultMessage = 'No result found' } = props;
      return (
        <div className={'Dropdown-errorWrapper'}>
          <div className={'Option'}>
            <div className={'Option-subinfo'}>{searchResultMessage}</div>
          </div>
        </div>
      );
    }

    return (
      <div className={dropdownWrapperClass}>
        {checkboxes && renderCheckboxes()}
        {!checkboxes && (
          <div className="Dropdown-scroller" style={dropdownStyle} ref={dropdownRef}>
            {
              listOptions.map((option, index) => {
                const prevGroup = index > 0 ?
                  listOptions[index - 1].group : bufferedOption ? bufferedOption.group : undefined;
                const currentGroup = option.group;
                const isGroup = prevGroup !== currentGroup;

                return (
                  <div className={getDropdownClass(index + props.offset, currentGroup, isGroup)} key={index}>
                    {isGroup && currentGroup && renderGroups(currentGroup)}
                    {renderOptions(option, index)}
                  </div>
                );
              })
            }
            {props.async && remainingOptions > 0 && renderFooter()}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={dropdownClass} ref={triggerRef} onScroll={handleMenuScroll} style={dropdownWrapperStyle}>
      <Popover
        onToggle={onToggleDropdown}
        trigger={trigger}
        open={dropdownOpen}
        style={popoverStyle}
        position={DropdownAlignMapping[dropdownAlign]}
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
