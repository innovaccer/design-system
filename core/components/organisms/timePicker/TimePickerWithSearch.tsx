import * as React from 'react';
import { Dropdown } from '@/index';
import { BaseProps } from '@/utils/types';
import { getScrollIndex } from './utility/searchUtils';
import { OptionSchema } from '@/components/atoms/dropdown/option';
import { scrollToOptionIndex } from '@/components/atoms/dropdown/utility';
import { getDropdownOptionList, isFormat12Hour, convert24To12HourFormat } from './utility/timePickerUtility';

type fetchOptionsFunction = (searchTerm: string) => Promise<{
  count: number;
  searchTerm?: string;
  scrollToIndex?: number;
  options: OptionSchema[];
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
   * fetchOptionsFunction: (searchTerm: string) => Promise<{
   *      searchTerm?: string;
   *      count: number,
   *      options: OptionSchema[];
   *      scrollToIndex?: number;
   * }>;
   * <br/> <br/>
   *
   * OptionSchema: {
   *   label: string;
   *   value: React.ReactText;
   *   icon?: string;
   *   subInfo?: string | [MetaListProps]
   *   optionType?: OptionType;
   *   selected?: boolean;
   *   disabled?: boolean;
   *   group?: string;
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

  const [tabIndex, setTabIndex] = React.useState(0);
  const [openPopover, setOpenPopover] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const [counter, setCounter] = React.useState(0);

  const dropdownOptionList = getDropdownOptionList(props);

  React.useEffect(() => {
    open !== undefined && setOpenPopover(open);
  }, [open]);

  React.useEffect(() => {
    let timer: any;

    if (openPopover && selectedIndex != -1) {
      setTabIndex(selectedIndex);

      timer = setTimeout(() => {
        scrollToOptionIndex(selectedIndex, dropdownOptionList);
      }, 100);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [openPopover]);

  // Required to re-render dropdown forcefully whenever props changes
  React.useEffect(() => {
    setCounter(counter + 1);
  }, [startTime, endTime, interval, showDuration, disabledSlotList]);

  const onChangeHandler = (props: string) => {
    let time = props;

    if (isFormat12Hour(timeFormat)) {
      time = convert24To12HourFormat(time);
    }

    const selectIndex = dropdownOptionList.findIndex((option) => option.value === props);
    setSelectedIndex(selectIndex);
    onChange && onChange(time);
  };

  const getOptionList = (searchTerm: string) => {
    let scrollIndex;
    const indexValue = getScrollIndex(dropdownOptionList, searchTerm);

    if (searchTerm === '' && selectedIndex != -1) {
      scrollIndex = selectedIndex;
      setTabIndex(selectedIndex);
    } else {
      scrollIndex = indexValue;
      setTabIndex(indexValue);
    }

    return Promise.resolve({
      options: indexValue === -1 ? [] : dropdownOptionList,
      count: dropdownOptionList.length,
      scrollToIndex: scrollIndex === 0 ? scrollIndex + 1 : scrollIndex,
      searchTerm,
    });
  };

  const fetchOptionList = () => {
    return fetchTimeOptions ? fetchTimeOptions : getOptionList;
  };

  return (
    <Dropdown
      key={counter}
      maxHeight={160}
      loadersCount={0}
      withSearch={true}
      open={openPopover}
      tabIndex={tabIndex}
      searchPlaceholder="Search"
      onChange={onChangeHandler}
      fetchOptions={fetchOptionList()}
      noResultMessage={noResultMessage}
      staticLimit={dropdownOptionList.length}
      onPopperToggle={() => {
        setOpenPopover(!openPopover);
      }}
      error={error}
    />
  );
};

TimePickerWithSearch.defaultProps = {
  timeFormat: '12-Hour',
  interval: 15,
};

TimePickerWithSearch.displayName = 'TimePickerWithSearch';
export default TimePickerWithSearch;
