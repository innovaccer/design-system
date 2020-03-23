import * as React from 'react';
import Popover, { PositionType } from '@/components/molecules/popover';
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
  right: 'bottom-start' as PositionType,
  left: 'bottom-end' as PositionType
};

export interface Option {
  icon?: string;
  subInfo?: string;
  label?: string;
  value?: any;
  checked?: boolean;
  loading?: boolean;
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
  searchResultMessage?: string; //
  disabled?: boolean;
  search?: boolean;
  checkboxes?: boolean;
  closeOnSelect?: boolean;
  showApplyButton?: boolean;
  checkedValuesOffset?: number;
  bottomScrollOffset?: number; //
  topScrollOffset?: number; //
  subheading?: Subheading;
  maxHeight?: number;
  selected?: any[] | any;
  style?: React.CSSProperties;
}

interface IOptionsProps extends IDropdownListProps {
  listOptions: Option[];
  bottomOptionsSliced?: boolean;
  topOptionsSliced?: boolean;
  limit: number;
  offset: number;
  onSearchChange?: (searchText: string) => void;
  onScroll?: (direction: string) => void;
  onChange?: (selected: any[] | any) => void;
}

let lastScrollTop = 0;

const DropdownList: React.FunctionComponent<IOptionsProps> = props => {
  const {
    subheading = {},
    listOptions = [],
    size = 'regular',
    dropdownAlign = 'right',
    checkedValuesOffset = 2,
    closeOnSelect = true,
    // searchResultMessage = 'No Result Found',
    placeholder,
    maxHeight = 200,
    bottomScrollOffset = 0,
    limit,
    offset,
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
  } = props;

  const dropdownRef = React.createRef<HTMLDivElement>();

  const [selected, setSelected] = React.useState(props.selected);
  const [buttonLabel, setButtonLabel] = React.useState<string | undefined>('');
  const [dropdownOpen, setDropdownOpen] = React.useState<boolean | undefined>();
  const [checkboxSelected, setCheckboxSelected] = React.useState(props.selected);

  const getLabelFromSelected = (selectedArray: any[]) => {
    const selectedLength = selectedArray.length;
    let label = '';
    if (selectedLength > checkedValuesOffset) {
      const str = `${selectedLength} selected`;
      label = str;
    } else {
      const labelArray: string[] = [];
      selectedArray.forEach(selectedObj => {
        const { label: selectedLabel } = selectedObj;
        labelArray.push(selectedLabel);
      });
      label = labelArray.join(', ');
    }

    return label;
  };

  React.useEffect(() => {
    if (props.selected) {
      if (checkboxes) {
        getLabelFromSelected(props.selected);
      } else {
        const { label } = props.selected;
        setButtonLabel(label);
      }
    }
  }, [props.selected]);

  React.useEffect(() => {
    if (props.bottomOptionsSliced && dropdownRef.current) {
      const updatedScrollTop = dropdownRef.current.scrollTop - (limit * 32);
      dropdownRef.current.scrollTop = updatedScrollTop;
      lastScrollTop = updatedScrollTop;
    }
  }, [props.bottomOptionsSliced]);

  React.useEffect(() => {
    if (props.topOptionsSliced && dropdownRef.current) {
      const updatedScrollTop = dropdownRef.current.scrollTop + (limit * 32);
      dropdownRef.current.scrollTop = updatedScrollTop;
      lastScrollTop = updatedScrollTop;
    }
  }, [props.topOptionsSliced]);

  const trigger = (
    <DropdownButton
      placeholder={placeholder}
      size={size}
      icon={icon}
      disabled={disabled}
      inlineLabel={inlineLabel}
    >
      {buttonLabel}
    </DropdownButton>
  );

  const popoverStyle = {
    width: '100%',
    minWidth: showApplyButton && checkboxes ? '176px' : '128px',
  };

  const dropdownStyle = {
    maxHeight,
    'overflow-y': 'auto',
    'overflow-x': 'hidden',
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
      ['Option-wrapper--selected']: selected && selected.value === optionValue
    });

    return OptionWrapper;
  };

  const getValuesFromSelectedObj = (selectedArray: any[] = []) => {
    const selectedValues: any[] = [];
    selectedArray.forEach(selectedObj => {
      const { value } = selectedObj;
      selectedValues.push(value);
    });

    return selectedValues;
  };

  const setSelectButtonLabel = (selectedArray: any[] = []) => {
    const label = getLabelFromSelected(selectedArray);
    setButtonLabel(label);
    setSelected(selectedArray);
    if (onChange) {
      const selectedValues = getValuesFromSelectedObj(selectedArray);
      onChange(selectedValues);
    }
  };

  const onToggleDropdown = () => {
    if (!disabled) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  const onCancelOptions = () => {
    setButtonLabel(placeholder);
    setSelected([]);
    setDropdownOpen(false);
  };

  const onApplyOptions = () => {
    setSelectButtonLabel(checkboxSelected);
    setDropdownOpen(false);
  };

  const checkboxChangeHandler = (selectedArray: any[]) => {
    if (showApplyButton) {
      setCheckboxSelected(selectedArray);
      return;
    }
    setSelectButtonLabel(selectedArray);
  };

  const optionClickHandler = (event: ReactMouseEvent, item: Option) => {
    event.preventDefault();
    const { value, label } = item;
    setButtonLabel(label);
    setSelected(item);
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
        {/* {( listOptions.length == 0) && <div className={'Option-subinfo'}>{searchResultMessage}</div>} */}
      </div>
    );
  };

  const renderCheckboxes = () => {
    const list: any[] = [];
    listOptions.forEach(option => {
      const { checked, label, value } = option;
      let checkedValue = checked;
      if (selected && Array.isArray(selected)) {
        const selectedValues = getValuesFromSelectedObj(selected);
        checkedValue = (selectedValues.indexOf(value) !== -1) ? true : checkedValue;
      }
      list.push({ label, value, checked: checkedValue });
    });

    return (
      <ListCheckbox
        label={'Select All'}
        onChange={checkboxChangeHandler}
        list={list}
        style={dropdownStyle}
        ref={dropdownRef}
      />
    );
  };

  const renderOptions = (item: Option, index: number) => {
    const { label, value, icon: optionIcon = '', subInfo, loading = false } = item;
    if (loading) {
      return (
        <div className="Option-wrapper">
          <PlaceholderParagraph />
        </div>
      );
    }

    return (
      <div className={getOptionWrapperClass(optionIcon, value, index)} onClick={e => optionClickHandler(e, item)}>
        {optionIcon && <div className={'Option-icon'}><Icon helpers={['mr-4']} name={optionIcon} /></div>}
        <div className={'.Option-label'}>
          <div>{label}</div>
          {subInfo && <div className={'Option-subinfo'}>{subInfo}</div>}
        </div>
      </div>
    );
  };

  return (
    <div className={'Dropdown'} onScroll={handleMenuScroll} style={style}>
      <Popover
        onToggle={onToggleDropdown}
        trigger={trigger}
        open={dropdownOpen}
        style={popoverStyle}
        position={DropdownAlignMapping[dropdownAlign]}
        appendToBody={false}
      >
        {search && renderSearch()}
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
        {showApplyButton && checkboxes && renderApplyButton()}
      </Popover >
    </div>
  );
};

DropdownList.displayName = 'Dropdown';

export default DropdownList;
