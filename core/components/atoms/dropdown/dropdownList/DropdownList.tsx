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
  label: string;
  value: any;
  selected?: boolean;
}

export interface Options {
  items: Option[];
}

export interface Subheading {
  [key: number]: string;
}

export interface IDropdownListProps {
  size?: Size;
  dropdownAlign?: DropdownAlign;
  icon?: string;
  placeholder?: string;
  inlineLabel?: string;
  searchResultMessage?: string;
  disabled?: boolean;
  search?: boolean;
  checkboxes?: boolean;
  closeOnSelect?: boolean;
  showApplyButton?: boolean;
  loadingOptions?: boolean;
  checkedValuesOffset?: number;
  bottomScrollOffset?: number;
  topScrollOffset?: number;
  subheading?: Subheading;
  maxHeight?: number;
  style?: React.CSSProperties;
}

interface IOptionsProps extends IDropdownListProps {
  listOptions: Option[];
  searchTerm: string;
  bottomOptionsSliced?: boolean;
  topOptionsSliced?: boolean;
  selectAll: boolean;
  limit: number;
  offset: number;
  optionsLength: number;
  selectedAll?: number[];
  selected?: any;
  onSearchChange?: (searchText: string) => void;
  onScroll?: (direction: string) => void;
  onChange?: (selected: any[] | any) => void;
  onSelectAll?: (selectedAll: boolean) => void;
  setSearchTerm?: (searchTerm: string) => void;
}

let lastScrollTop = 0;

const usePrevious = (value: any) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const DropdownList: React.FunctionComponent<IOptionsProps> = props => {
  const {
    subheading = {},
    listOptions = [],
    selectedAll = [],
    size = 'regular',
    dropdownAlign = 'right',
    checkedValuesOffset = 2,
    closeOnSelect = true,
    loadingOptions = false,
    selectAll,
    searchResultMessage = 'No Result Found',
    placeholder,
    searchTerm,
    maxHeight = 200,
    bottomScrollOffset = 0,
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
  } = props;

  const dropdownRef = React.createRef<HTMLDivElement>();

  const [selected, setSelected] = React.useState<any[]>([]);
  const [selectedLabels, setSelectedLabels] = React.useState<string[]>([]);
  const [buttonLabel, setButtonLabel] = React.useState<string | undefined>('');
  const [dropdownOpen, setDropdownOpen] = React.useState<boolean | undefined>();
  const [checkboxSelected, setCheckboxSelected] = React.useState<any[]>([]);
  const [previousSelected, setPreviousSelected] = React.useState<any[]>([]);
  const [previousSelectedLabels, setPreviousSelectedLabels] = React.useState<any[]>([]);
  const [optionsApplied, setOptionsApplied] = React.useState(false);

  const prevSearchTerm = usePrevious(searchTerm);
  const width = (style && style.width) ? style.width : '128px';

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
    if (prevSearchTerm === searchTerm) {
      setSelected(checkboxSelected);
    }
  }, [listOptions.length]);

  React.useEffect(() => {
    const { label, value } = props.selected;
    if (label && value) {
      let selectedLabelsCopy = selectedLabels.slice();
      let selectedValue = selected.slice();
      if (value.length === optionsLength || selected.length === optionsLength) {
        selectedLabelsCopy = label;
        selectedValue = value;
      } else if (JSON.stringify(label) !== JSON.stringify(selectedLabelsCopy)) {
        selectedLabelsCopy = selectedLabelsCopy.concat(label);
        selectedValue = selectedValue.concat(value);
      }
      if (showApplyButton && (value.length !== optionsLength || selectAll) && value.length > 0 && !searchTerm) {
        const prevValuesCopy = value;
        const prevLabelsCopy = label;
        setPreviousSelected(prevValuesCopy);
        setPreviousSelectedLabels(prevLabelsCopy);
      }
      setCheckboxSelected(selectedValue);
      setSelected(selectedValue);
      setSelectButtonLabel(selectedLabelsCopy);
    }
  }, [props.selected]);

  React.useEffect(() => {
    if (props.bottomOptionsSliced && dropdownRef.current) {
      const updatedScrollTop = dropdownRef.current.scrollTop - (limit * 32);
      dropdownRef.current.scrollTop = updatedScrollTop;
      lastScrollTop = updatedScrollTop;
      if (checkboxes) setSelected(checkboxSelected);
    }
  }, [props.bottomOptionsSliced]);

  React.useEffect(() => {
    if (props.topOptionsSliced && dropdownRef.current) {
      const updatedScrollTop = dropdownRef.current.scrollTop + (limit * 32);
      dropdownRef.current.scrollTop = updatedScrollTop;
      lastScrollTop = updatedScrollTop;
      if (checkboxes) setSelected(checkboxSelected);
    }
  }, [props.topOptionsSliced]);

  React.useEffect(() => {
    if (searchTerm || prevSearchTerm) {
      setSelected(checkboxSelected);
    }
  }, [searchTerm]);

  const trigger = (
    <DropdownButton
      placeholder={placeholder}
      size={size}
      icon={icon}
      disabled={disabled}
      inlineLabel={inlineLabel}
      width={width}
    >
      {buttonLabel}
    </DropdownButton>
  );

  const dropdownDivStyle = {
    minWidth: width,
    maxWidth: width,
    ...style
  };

  const popoverStyle = {
    width: '100%',
    minWidth: showApplyButton && checkboxes ? '176px' : width,
  };

  const dropdownStyle: React.CSSProperties = {
    maxHeight,
    overflowY: 'auto',
    overflowX: 'hidden',
  };

  const getDropdownClass = (index: number) => {
    const Dropdown = classNames({
      ['Dropdown-border']: subheading.hasOwnProperty(index) && index !== 0,
    });

    return Dropdown;
  };

  const getOptionWrapperClass = (optionIcon: string, optionValue: any, index: number) => {
    const OptionWrapper = classNames({
      ['Option-wrapper']: true,
      ['Option-wrapper--top']: index === 0,
      ['Option-wrapper--bottom']: index + 1 === listOptions.length,
      ['Option-wrapper--icon']: optionIcon,
      ['Option-wrapper--selected']: selected[0] === optionValue
    });

    return OptionWrapper;
  };

  const onToggleDropdown = () => {
    if (!disabled) setDropdownOpen(!dropdownOpen);
    if (optionsApplied || !showApplyButton) {
      setSelected(checkboxSelected);
    } else {
      setCheckboxSelected(previousSelected);
      setSelected(previousSelected);
      setSelectButtonLabel(previousSelectedLabels);
    }
    setOptionsApplied(false);
    if (search && setSearchTerm) setSearchTerm('');
  };

  const onCancelOptions = () => {
    setButtonLabel(placeholder);
    setDropdownOpen(false);
  };

  const onApplyOptions = () => {
    setPreviousSelected(checkboxSelected);
    setPreviousSelectedLabels(selectedLabels);
    setOptionsApplied(true);
    setDropdownOpen(false);
    if (onChange) onChange(checkboxSelected);
  };

  const checkboxChangeHandler = (selectedArray: number[], selectedLabelsArray: string[], parentChecked: boolean) => {
    if ((selectedArray.length === 0 || selectedArray.length === optionsLength) || !parentChecked) {
      setCheckboxSelected(selectedArray);
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
    setCheckboxSelected([value]);
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

    if (scrollTop < lastScrollTop) {
      if (scrollTop === 0) onScrollDropdown('up', scrollTop);
    } else {
      const scrollContainerBottomPosition = Math.round(element.scrollTop + element.clientHeight);
      const scrollPosition = Math.round(element.scrollHeight - (bottomScrollOffset));
      if (scrollPosition === scrollContainerBottomPosition) onScrollDropdown('down', scrollTop);
    }
  };

  const renderApplyButton = () => {
    return (
      <div className={'Dropdown-buttonWrapper'}>
        <div style={{ marginRight: '8px' }}>
          <Button appearance={'basic'} onClick={onCancelOptions}> Cancel </Button>
        </div>
        <Button appearance={'primary'} onClick={onApplyOptions}> Apply </Button>
      </div>
    );
  };

  const renderSearch = () => {
    return (
      <div>
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

  const renderLoading = () => {
    const arr = Array(limit).fill('Loading');
    return (
      <div className="Scroller-wrapper" style={dropdownStyle}>
        {
          arr.map((option, ind) => {
            return (
              <div className="Option-loadingWrapper" key={`${option}-${ind}`}>
                <PlaceholderParagraph length={'large'} />
              </div>
            );
          })
        }
      </div>
    );
  };

  const renderCheckboxes = () => {
    const list: any[] = [];
    const updatedChecked: boolean[] = [];
    const parentChecked = checkboxSelected.length === optionsLength;
    const showParentCheckbox = searchTerm === '';

    listOptions.forEach(option => {
      const { label, value } = option;
      let checkedValue = false;

      if (selected && selected.length > 0) {
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
        list={list}
        updatedSelectedArray={updatedChecked}
        style={dropdownStyle}
        ref={dropdownRef}
        selectedAll={selectedAll}
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
        {optionIcon && <div className={'Option-icon'}><Icon helpers={['mr-4']} name={optionIcon} /></div>}
        <div className={'Option-label'}>
          <div className={'Option-text'}>{label}</div>
          {subInfo && <div className={'Option-subinfo'}>{subInfo}</div>}
        </div>
      </div>
    );
  };

  const renderDropdownSection = () => {
    if (loadingOptions) {
      return (
        <div className={'Dropdown-loaderWrapper'}>
          {renderLoading()}
        </div>
      );
    }
    if (listOptions.length === 0) {
      return (
        <div className={'Dropdown-wrapper'}>
          <div className={'Option-wrapper'}>
            <div className={'Option-subinfo'}>{searchResultMessage}</div>
          </div>
        </div>
      );
    }

    return (
      <div className={'Dropdown-wrapper'}>
        {checkboxes && renderCheckboxes()}
        {!checkboxes && (
          <div className="Scroller-wrapper" style={dropdownStyle} ref={dropdownRef}>
            {
              listOptions.map((option, index) => {
                return (
                  <div className={getDropdownClass(index + offset)} key={index}>
                    {subheading.hasOwnProperty(index + offset) && subheading[index + offset] && (
                      <div className={'Dropdown-subinfo'}>{subheading[index + offset]}</div>
                    )}
                    {renderOptions(option, index)}
                  </div>
                );
              })
            }
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={'Dropdown'} onScroll={handleMenuScroll} style={dropdownDivStyle}>
      <Popover
        onToggle={onToggleDropdown}
        trigger={trigger}
        open={dropdownOpen}
        style={popoverStyle}
        position={DropdownAlignMapping[dropdownAlign]}
        appendToBody={false}
      >
        {search && renderSearch()}
        {renderDropdownSection()}
        {showApplyButton && checkboxes && renderApplyButton()}
      </Popover >
    </div>
  );
};

DropdownList.displayName = 'Dropdown';

export default DropdownList;
