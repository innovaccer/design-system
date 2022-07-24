import * as React from 'react';
import { Dropdown } from '@/index';
import { getScrollIndex } from './utility/searchUtils';
import { OptionSchema } from '@/components/atoms/dropdown/option';
import { getDropdownOptionList, isFormat12Hour, convert24To12HourFormat } from './utility/timePickerUtility';

type fetchOptionsFunction = (
  searchTerm: string,
  options?: OptionSchema[]
) => Promise<{
  searchTerm?: string;
  count: number;
  options: OptionSchema[];
  scrollToIndex: number;
}>;

export type TimeFormat = '12-Hour' | '24-Hour';

export interface TimePickerWithDropdown {
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
   * Callback function to fetch options list from API based on search term
   *
   * <pre className="DocPage-codeBlock p-4">
   * fetchOptionsFunction: (searchTerm: string, options: OptionSchema[]) => Promise<{
   *      searchTerm?: string;
   *      count: number,
   *      option: Option[],
   * }>;
   * </pre>
   *
   */
  fetchTimeOptions?: fetchOptionsFunction;
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
  onChange: (selected: any[] | any, name?: string | number) => void;
}

export const TimePickerWithFuzzySearch = (props: TimePickerWithDropdown) => {
  const { onChange, timeFormat, fetchTimeOptions, noResultMessage } = props;

  const [tabIndex, setTabIndex] = React.useState(0);

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

    setTabIndex(indexValue);

    return Promise.resolve({
      options: indexValue === -1 ? [] : dropdownOptionList,
      count: dropdownOptionList.length,
      scrollToIndex: indexValue + 1,
      searchTerm,
    });
  };

  const fetchOptionList = () => {
    return fetchTimeOptions ? fetchTimeOptions : getOptionList;
  };

  return (
    <Dropdown
      maxHeight={160}
      loadersCount={0}
      withSearch={true}
      tabIndex={tabIndex}
      searchPlaceholder="Search"
      onChange={onChangeHandler}
      fetchOptions={fetchOptionList()}
      noResultMessage={noResultMessage}
      staticLimit={dropdownOptionList.length}
    />
  );
};

TimePickerWithFuzzySearch.defaultProps = {
  timeFormat: '12-Hour',
  interval: 15,
};

TimePickerWithFuzzySearch.displayName = 'TimePickerWithFuzzySearch';
export default TimePickerWithFuzzySearch;
