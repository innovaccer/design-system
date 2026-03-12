import * as React from 'react';
import { Select } from '@/index';
import { OptionType } from '@/common.type';
import { SelectMethods } from '@/components/organisms/select/Select';
import { BaseProps } from '@/utils/types';
import { getScrollIndex } from './utility/searchUtils';
import { getDropdownOptionList, isFormat12Hour, convert24To12HourFormat } from './utility/timePickerUtility';

type SelectOptionItem = {
  label: string;
  value: string;
  disabled?: boolean;
};

type fetchOptionsFunction = (searchTerm: string) => Promise<{
  count: number;
  searchTerm?: string;
  scrollToIndex?: number;
  options: SelectOptionItem[];
}>;

export type TimeFormat = '12-Hour' | '24-Hour';

export interface TimePickerDropdownProps extends BaseProps {
  /**
   * Set as `true` to show timePicker with search
   */
  withSearch?: boolean;
  /**
   * Indicates the start time for the options in particular time format `hh:mm [AM | PM]` or `hh:mm`
   */
  startTime?: string;
  /**
   * Indicates the end time for the options in particular time format `hh:mm [AM | PM]` or `hh:mm`
   */
  endTime?: string;
  /**
   * Depicts the time interval in `minutes` between options
   */
  interval: number;
  /**
   * Indicates time format for options list
   */
  timeFormat: TimeFormat;
  /**
   * Determines if the `TimePicker Popover` is open
   */
  open?: boolean;
  /**
   * Display message when there is no result
   */
  noResultMessage?: string;
  /**
   * Set as `true` to display time difference in option label w.r.t start time
   */
  showDuration?: boolean;
  /**
   *  Specify list of options in `hh:mm [AM | PM]` or `hh:mm` time format which need to be set as disabled
   */
  disabledSlotList?: string[];
  /**
   * Callback function which is called when options are selected from dropdown.
   */
  onChange?: (selected: any[] | any, name?: string | number) => void;
  /**
   * Callback function to fetch options list from API based on search term
   *
   * <pre className="DocPage-codeBlock p-4">
   * fetchOptionsFunction: (searchTerm: string) => Promise&lt;{
   *      searchTerm?: string;
   *      count: number,
   *      options: SelectOptionItem[];
   *      scrollToIndex?: number;
   * }&gt;;
   * <br/> <br/>
   *
   * SelectOptionItem: {
   *   label: string;
   *   value: string;
   *   disabled?: boolean;
   * }
   * </pre>
   *
   */
  fetchTimeOptions?: fetchOptionsFunction;
  /**
   * Provide unique ID in case of using multiple timePicker together
   */
  id?: string;
  /**
   * Shows error state in case of failed validation
   */
  error?: boolean;
}

export const TimePickerWithSearch = (props: TimePickerDropdownProps) => {
  const {
    open,
    endTime,
    interval,
    onChange,
    startTime,
    timeFormat,
    showDuration,
    noResultMessage,
    disabledSlotList,
    fetchTimeOptions,
    error,
  } = props;

  const [openPopover, setOpenPopover] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [counter, setCounter] = React.useState(0);
  const [fetchedOptions, setFetchedOptions] = React.useState<SelectOptionItem[]>([]);
  const [isFetchMode, setIsFetchMode] = React.useState(false);

  const listRef = React.useRef<HTMLDivElement>(null);
  const selectRef = React.useRef<SelectMethods>(null);

  const dropdownOptionList = React.useMemo(
    () => getDropdownOptionList(props),
    [startTime, endTime, interval, timeFormat, showDuration, disabledSlotList, counter]
  );

  const activeOptions = isFetchMode ? fetchedOptions : dropdownOptionList;

  const scrollIndex = React.useMemo(() => {
    if (searchTerm === '' && selectedIndex !== -1) {
      return selectedIndex;
    }
    return getScrollIndex(dropdownOptionList, searchTerm);
  }, [searchTerm, selectedIndex, dropdownOptionList]);

  React.useEffect(() => {
    if (open !== undefined) {
      setOpenPopover(open);
      selectRef.current?.setOpen(open);
    }
  }, [open]);

  React.useEffect(() => {
    setCounter((c) => c + 1);
  }, [startTime, endTime, interval, showDuration, disabledSlotList]);

  React.useEffect(() => {
    if (fetchTimeOptions) {
      setIsFetchMode(true);
      fetchTimeOptions(searchTerm).then((result) => {
        setFetchedOptions(result.options);
      });
    }
  }, [searchTerm, fetchTimeOptions]);

  React.useEffect(() => {
    if (!openPopover) {
      setSearchTerm('');
      setFetchedOptions([]);
      setIsFetchMode(false);
      return;
    }

    if (fetchTimeOptions) {
      setIsFetchMode(true);
      fetchTimeOptions('').then((result) => {
        setFetchedOptions(result.options);
      });
    }

    const timer = setTimeout(() => {
      scrollToIndex(selectedIndex !== -1 ? selectedIndex : scrollIndex);
    }, 100);

    return () => clearTimeout(timer);
  }, [openPopover]);

  React.useEffect(() => {
    if (openPopover && scrollIndex >= 0) {
      const timer = setTimeout(() => scrollToIndex(scrollIndex), 50);
      return () => clearTimeout(timer);
    }
  }, [scrollIndex]);

  const scrollToIndex = (index: number) => {
    if (index < 0 || !listRef.current) return;
    const items = listRef.current.querySelectorAll('[role="option"]');
    if (items[index]) {
      items[index].scrollIntoView({ block: 'center' });
    }
  };

  const onSelectHandler = (option?: OptionType | OptionType[]) => {
    if (!option || Array.isArray(option)) return;

    let time = option.value as string;

    if (isFormat12Hour(timeFormat)) {
      time = convert24To12HourFormat(time);
    }

    const selectIdx = dropdownOptionList.findIndex((opt) => opt.value === option.value);
    setSelectedIndex(selectIdx);
    setOpenPopover(false);
    onChange && onChange(time);
  };

  const onSearchChange = (value?: string) => {
    const term = value || '';
    setSearchTerm(term);

    if (!fetchTimeOptions) {
      const idx = getScrollIndex(dropdownOptionList, term);
      setIsFetchMode(idx === -1);
    }
  };

  const onSearchClear = () => {
    setSearchTerm('');
    setIsFetchMode(false);
  };

  const showEmptyState = !fetchTimeOptions
    ? getScrollIndex(dropdownOptionList, searchTerm) === -1 && searchTerm !== ''
    : isFetchMode && fetchedOptions.length === 0 && searchTerm !== '';

  const selectedValue =
    selectedIndex >= 0 && dropdownOptionList[selectedIndex]
      ? { label: dropdownOptionList[selectedIndex].label, value: dropdownOptionList[selectedIndex].value }
      : undefined;

  return (
    <Select
      ref={selectRef}
      key={counter}
      onSelect={onSelectHandler}
      maxHeight={160}
      value={selectedValue}
      error={error}
      width="100%"
      triggerOptions={{
        placeholder: 'Select',
      }}
      onToggle={(isOpen) => setOpenPopover(isOpen)}
    >
      <Select.SearchInput placeholder="Search" value={searchTerm} onChange={onSearchChange} onClear={onSearchClear} />

      {showEmptyState ? (
        <Select.EmptyTemplate
          title={noResultMessage || 'No result found'}
          data-test="DesignSystem-Select-EmptyState--wrapper"
        />
      ) : (
        <div ref={listRef}>
          <Select.List>
            {activeOptions.map((option, index) => {
              const isActive = index === scrollIndex && searchTerm !== '';

              return (
                <Select.Option
                  key={`${option.value}-${index}`}
                  option={{ label: option.label, value: option.value }}
                  disabled={option.disabled}
                  data-test="DesignSystem-Select-Option"
                  data-active={isActive || undefined}
                >
                  {option.label}
                </Select.Option>
              );
            })}
          </Select.List>
        </div>
      )}
    </Select>
  );
};

TimePickerWithSearch.defaultProps = {
  timeFormat: '12-Hour',
  interval: 15,
};

TimePickerWithSearch.displayName = 'TimePickerWithSearch';
export default TimePickerWithSearch;
