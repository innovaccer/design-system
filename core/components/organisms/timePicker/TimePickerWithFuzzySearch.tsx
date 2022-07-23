import * as React from 'react';
import { Dropdown } from '@/index';
import { TimeFormat } from '@/common.type';
import { getScrollIndex } from './searchUtils';
import { OptionSchema } from '@/components/atoms/dropdown/option';
import { getDropdownOptionList, isFormat12Hour, convert24To12HourFormat } from './timePickerUtility';

type fetchOptionsFunction = (searchTerm: string) => Promise<{
  searchTerm?: string;
  count: number;
  options: OptionSchema[];
  scrollToIndex: number;
}>;

export interface TimePickerWithDropdown {
  /**
   * show timer with dropdown
   */
  withDropdown?: boolean;
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
   * Indicates time format for options
   */
  timeFormat: TimeFormat;
  /**
   * Specify options to show inside list
   */
  optionList?: OptionSchema[];
  /**
   * Callback function to fetch options from API based on search term
   */
  fetchOptions?: fetchOptionsFunction;
  /**
   * Display message when there is no result
   */
  noResultMessage?: string;
  /**
   * Set as true if wants to display time difference in option label w.r.t reference time
   */
  showTimeDifference?: boolean;
  /**
   *  Specify list of options in `hh:mm [AM | PM]` or `hh:mm` time format which need to be set as disabled
   */
  disabledOptionList?: string[];
  /**
   * Callback function to be called when options are selected from dropdown.
   */
  onChange: (selected: any[] | any, name?: string | number) => void;
}

export const TimePickerWithFuzzySearch = (props: TimePickerWithDropdown) => {
  const { onChange, timeFormat, fetchOptions, noResultMessage } = props;

  const dropdownOptionList = getDropdownOptionList(props);

  const onChangeHandler = (props: string) => {
    let time = props;
    if (isFormat12Hour(timeFormat)) {
      time = convert24To12HourFormat(time);
    }

    onChange && onChange(time);
  };

  const getOptionList = (searchTerm: string) => {
    const indexValue = getScrollIndex(dropdownOptionList, searchTerm);
    console.log('aaindexValue', indexValue, dropdownOptionList[indexValue]);

    return Promise.resolve({
      options: indexValue === -1 ? [] : dropdownOptionList,
      count: dropdownOptionList.length,
      scrollToIndex: indexValue + 1,
      searchTerm,
    });
  };

  const fetchOptionList = () => {
    return fetchOptions ? fetchOptions : getOptionList;
  };

  // const [dropdownOptionList, setDropdownOptionList] = React.useState<OptionSchema[]>(
  //   getTimeOptionList(startTime, endTime, interval)
  // );

  return (
    <Dropdown
      maxHeight={160}
      loadersCount={0}
      withSearch={true}
      searchPlaceholder="Search"
      onChange={onChangeHandler}
      fetchOptions={fetchOptionList()}
      noResultMessage={noResultMessage}
      staticLimit={dropdownOptionList.length}
    />
  );
};

TimePickerWithFuzzySearch.defaultProps = {
  timeFormat: 'hh:mm AM',
  interval: 15,
};

TimePickerWithFuzzySearch.displayName = 'TimePickerWithFuzzySearch';
export default TimePickerWithFuzzySearch;
