import * as React from 'react';
import Popover, { Position } from '@/components/molecules/popover';
import DropdownButton from '@/components/atoms/dropdown/dropdownButton';
import Icon from '@/components/atoms/icon';
import ListCheckbox from '@/components/atoms/listCheckbox';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import Button from '@/components/atoms/button';
import Input from '@/components/atoms/input';
import classNames from 'classnames';

type ReactMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

export type Size = 'tiny' | 'regular';

export type DropdownAlign = 'left' | 'right';

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
  selected?: boolean;
}

export interface Subheading {
  [key: number]: string;
}

export interface DropdownListProps {
  /**
   * Size of `Dropdown`
   * @default "regular"
   */
  size?: Size;
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
   * String to show when no options are selected
   */
  placeholder?: string;
  /**
   * Label inside `Dropdown button`
   */
  inlineLabel?: string;
  /**
   * Display message when there is no result
   * @default "No Result Found"
   */
  searchResultMessage?: string;
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
   * Specifies max height of `Dropdown options`
   * @default 200
   */
  maxHeight?: number;
  /**
   * Adds custom CSS to `Dropdown`
   */
  style?: React.CSSProperties;
}

interface OptionsProps extends DropdownListProps {
  listOptions: Option[];
  bufferedOption?: Option;
  subheading?: Subheading;
  searchTerm: string;
  bottomOptionsSliced?: boolean;
  topOptionsSliced?: boolean;
  loadingMoreUp?: boolean;
  loadingOptions?: boolean;
  loadingMoreDown?: boolean;
  async?: boolean;
  limit: number;
  slicedOptionsLength: number;
  offset: number;
  optionsLength: number;
  bottomScrollOffset?: number;
  selected?: any;
  onSearchChange?: (searchText: string) => void;
  onScroll?: (direction: string) => void;
  onChange?: (selected: any[] | any) => void;
  onSelectAll?: (selectedAll: boolean) => void;
  setSearchTerm?: (searchTerm: string) => void;
  renderOptionsFromTop: () => void;
}

let lastScrollTop = 0;

export const usePrevious = (value: any) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const DropdownList = (props: OptionsProps) => {
  const {
    subheading = {},
    listOptions = [],
    size = 'regular',
    dropdownAlign = 'right',
    checkedValuesOffset = 2,
    closeOnSelect = true,
    optionsWrap = false,
    searchResultMessage = 'No Result Found',
    maxHeight = 200,
    bottomScrollOffset = 64,
    menu,
    bufferedOption,
    slicedOptionsLength,
    loadingOptions,
    loadingMoreUp,
    loadingMoreDown,
    placeholder,
    searchTerm,
    limit,
    offset,
    optionsLength,
    showApplyButton,
    icon,
    disabled,
    inlineLabel,
    checkboxes,
    search,
    style,
    onChange,
    onSearchChange,
    onScroll,
    onSelectAll,
    setSearchTerm,
    renderOptionsFromTop,
  } = props;

  const dropdownRef = React.createRef<HTMLDivElement>();
  const triggerRef = React.createRef<HTMLButtonElement>();

  const [selected, setSelected] = React.useState<any[]>([]);
  const [selectedLabels, setSelectedLabels] = React.useState<string[]>([]);
  const [buttonLabel, setButtonLabel] = React.useState<string | undefined>('');
  const [dropdownOpen, setDropdownOpen] = React.useState<boolean | undefined>();
  const [popoverStyle, setPopoverStyle] = React.useState<React.CSSProperties>();
  const [previousSelected, setPreviousSelected] = React.useState<any[]>([]);
  const [previousSelectedLabels, setPreviousSelectedLabels] = React.useState<any[]>([]);
  const [optionsApplied, setOptionsApplied] = React.useState(false);

  const prevDropdownOpen = usePrevious(dropdownOpen);
  const prevListOptions = usePrevious(listOptions);
  const width = (style && style.width) ? style.width : '100%';

  const setSelectButtonLabel = (selectedArray: any[] = []) => {
    const selectedLength = selectedArray.length;
    let label = '';
    if (selectedLength > checkedValuesOffset) {
      const str = `${selectedLength} selected`;
      label = str;
    } else {
      const labelArray: string[] = [];
      selectedArray.forEach(selectedLabel => {
        labelArray.push(selectedLabel);
      });
      label = labelArray.join(', ');
    }
    setSelectedLabels(selectedArray);
    setButtonLabel(label);
  };

  React.useEffect(() => {
    if (dropdownOpen) {
      const popperWrapperStyle = {
        width: `${triggerRef.current?.clientWidth}px`,
        minWidth: showApplyButton && checkboxes ? '176px' : '128px',
      };
      setPopoverStyle(popperWrapperStyle);
    }
  }, [dropdownOpen, checkboxes, showApplyButton]);

  React.useEffect(() => {
    const { label, value } = props.selected;
    if (label && value) {
      let selectedLabelsCopy = selectedLabels.slice();
      let selectedValue = selected.slice();
      selectedLabelsCopy = label;
      selectedValue = value;
      setSelected(selectedValue);
      setSelectButtonLabel(selectedLabelsCopy);
    }
  }, [props.selected]);

  React.useEffect(() => {
    if (props.bottomOptionsSliced && dropdownRef.current) {
      const className = checkboxes ? '.ListCheckbox-childWrapper' : '.Option-wrapper';
      const element = document.querySelectorAll(className);
      const index = element.length - limit + slicedOptionsLength;
      const marker = element[index] as HTMLElement;
      const updatedScrollTop = marker.offsetTop - (maxHeight / 2);

      dropdownRef.current.scrollTop = updatedScrollTop;
      lastScrollTop = updatedScrollTop;
    }
  }, [props.bottomOptionsSliced]);

  React.useEffect(() => {
    if (props.topOptionsSliced && dropdownRef.current) {
      const className = checkboxes ? '.ListCheckbox-childWrapper' : '.Option-wrapper';
      const element = document.querySelectorAll(className);
      const index = limit - slicedOptionsLength;
      const marker = element[index] as HTMLElement;
      dropdownRef.current.scrollTop = marker.offsetTop - (maxHeight / 2);
      lastScrollTop = marker.offsetTop;
    }
  }, [props.topOptionsSliced]);

  const trigger = (
    <DropdownButton
      placeholder={placeholder}
      size={size}
      icon={icon}
      disabled={disabled}
      inlineLabel={inlineLabel}
      width={width}
      menu={menu}
      ref={triggerRef}
    >
      {buttonLabel}
    </DropdownButton>
  );

  const dropdownWrapperStyle = {
    width,
    display: 'flex',
    ...style
  };

  const dropdownStyle: React.CSSProperties = {
    maxHeight,
    overflowY: 'auto',
    overflowX: 'hidden',
  };

  const getDropdownClass = (index: number, currentGroup: string | undefined, isGroup: boolean) => {
    const Dropdown = classNames({
      ['Dropdown-border']: currentGroup !== undefined && isGroup && index !== 0,
    });

    return Dropdown;
  };

  const getOptionWrapperClass = (optionIcon: string, optionValue: any, index: number) => {
    const OptionWrapper = classNames({
      ['Option-wrapper']: true,
      ['Option-wrapper--top']: index === 0 && !subheading[0],
      ['Option-wrapper--bottom']: index + 1 === listOptions.length,
      ['Option-wrapper--icon']: optionIcon,
      ['Option-wrapper--selected']: selected[0] === optionValue
    });

    return OptionWrapper;
  };

  const dropdownClass = classNames({
    ['Dropdown']: true,
    ['Dropdown-placeholder']: !menu,
  });

  const dropdownWrapperClass = classNames({
    ['Dropdown-wrapper']: true,
    ['Dropdown-wrapper--wrap']: optionsWrap,
  });

  const optionTextClass = classNames({
    ['Option-text']: true,
    ['Option-text--wrap']: optionsWrap,
  });

  const onToggleDropdown = () => {
    if (!dropdownOpen) {
      renderOptionsFromTop();
    }
    if (!disabled) setDropdownOpen(!dropdownOpen);
    if (!(optionsApplied || !showApplyButton)) {
      setSelected(previousSelected);
      setSelectButtonLabel(previousSelectedLabels);
    }
    setOptionsApplied(false);
    if (search && setSearchTerm) setSearchTerm('');
  };

  const onCancelOptions = () => {
    setSelected([]);
    setPreviousSelected([]);
    setPreviousSelectedLabels([]);
    setSelectedLabels([]);
    setButtonLabel(placeholder);
    setDropdownOpen(false);
    if (onChange) onChange([]);
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

  const optionClickHandler = (event: ReactMouseEvent, item: Option) => {
    event.preventDefault();
    const { value, label } = item;
    setSelectedLabels([label]);
    setButtonLabel(label);
    setSelected([value]);
    setDropdownOpen(!closeOnSelect);
    if (onChange) onChange(value);
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
      if (scrollTop <= bottomScrollOffset && !loadingMoreUp) onScrollDropdown('up', scrollTop);
    } else {
      const scrollContainerBottomPosition = Math.round(element.scrollTop + element.clientHeight);
      const scrollPosition = Math.round(element.scrollHeight - (bottomScrollOffset));

      if (scrollPosition <= scrollContainerBottomPosition && !loadingMoreDown) {
        onScrollDropdown('down', scrollTop);
      }
    }
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
          placeholder={'Search..'}
          disabled={false}
          onChange={searchHandler}
        />
      </div>
    );
  };

  const renderLoading = (loadersLength: number) => {
    const arr = Array(loadersLength).fill('Loading');
    return (
      arr.map((option, ind) => {
        return (
          <div className="Option-loadingWrapper" key={`${option}-${ind}`}>
            <PlaceholderParagraph length={'large'} />
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
    const condition1 = JSON.stringify(prevDropdownOpen) !== JSON.stringify(dropdownOpen);
    const condition2 = JSON.stringify(prevListOptions) !== JSON.stringify(listOptions);

    listOptions.forEach(option => {
      const { label, value } = option;
      let checkedValue = false;

      if ((condition1 || condition2) && selected && selected.length > 0) {
        const updatedVal = JSON.stringify(value);
        checkedValue = (selected.findIndex(item => JSON.stringify(item) === updatedVal) !== -1) ? true : false;
        updatedChecked.push(checkedValue);
      }
      list.push({ label, value, checked: checkedValue });
    });

    return (
      <ListCheckbox
        label={'Select All'}
        onChange={checkboxChangeHandler}
        checked={parentChecked}
        loadingMoreUp={loadingMoreUp}
        loadingMoreDown={loadingMoreDown}
        list={list}
        updatedSelectedArray={updatedChecked}
        style={dropdownStyle}
        ref={dropdownRef}
        selected={selected}
        selectedLabels={selectedLabels}
        optionsLength={optionsLength}
        showParentCheckbox={showParentCheckbox}
      />
    );
  };

  const renderOptions = (item: Option, index: number) => {
    const { label, value, icon: optionIcon = '', subInfo } = item;

    return (
      <div className={getOptionWrapperClass(optionIcon, value, index)} onClick={e => optionClickHandler(e, item)}>
        {optionIcon && <div className={'Option-icon'}><Icon className="mr-4" name={optionIcon} /></div>}
        <div className={'Option-label'}>
          <div className={optionTextClass}>{label}</div>
          {subInfo && <div className={'Option-subinfo'}>{subInfo}</div>}
        </div>
      </div>
    );
  };

  const renderDropdownSection = () => {
    if (loadingOptions) {
      return (
        <div className={'Dropdown-loaderWrapper'}>
          <div className="Scroller-wrapper" style={dropdownStyle}>
            {
              renderLoading(limit)
            }
          </div>
        </div>
      );
    }
    if (listOptions.length === 0) {
      return (
        <div className={'Dropdown-errorWrapper'}>
          <div className={'Option-wrapper'}>
            <div className={'Option-subinfo'}>{searchResultMessage}</div>
          </div>
        </div>
      );
    }

    return (
      <div className={dropdownWrapperClass}>
        {checkboxes && renderCheckboxes()}
        {!checkboxes && (
          <div className="Scroller-wrapper" style={dropdownStyle} ref={dropdownRef}>
            {loadingMoreUp && renderLoading(2)}
            {
              listOptions.map((option, index) => {
                const prevGroup = index > 0 ?
                  listOptions[index - 1].group : bufferedOption ? bufferedOption.group : undefined;
                const currentGroup = option.group;
                const isGroup = prevGroup !== currentGroup;

                return (
                  <div className={getDropdownClass(index + offset, currentGroup, isGroup)} key={index}>
                    {isGroup && currentGroup && (
                      <div className={'Dropdown-subinfo'}>{currentGroup}</div>
                    )}
                    {renderOptions(option, index)}
                  </div>
                );
              })
            }
            {loadingMoreDown && renderLoading(2)}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={dropdownClass} onScroll={handleMenuScroll} style={dropdownWrapperStyle}>
      <Popover
        onToggle={onToggleDropdown}
        trigger={trigger}
        open={dropdownOpen}
        style={popoverStyle}
        position={DropdownAlignMapping[dropdownAlign]}
        appendToBody={true}
      >
        {search && renderSearch()}
        {renderDropdownSection()}
        {showApplyButton && checkboxes && renderApplyButton()}
      </Popover >
    </div>
  );
};

DropdownList.displayName = 'DropdownList';

export default DropdownList;
