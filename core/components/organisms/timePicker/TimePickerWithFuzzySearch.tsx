import * as React from 'react';
import { Dropdown } from '@/index';
import { TimeFormat } from '@/common.type';
// import { getTimeOptionList } from './timePickerUtility';
import { OptionSchema } from '@/components/atoms/dropdown/option';
// import { getTimeIn24HrFormat, getTimeListIn24HourFormat, convertTimeToOptionList } from './timePickerUtility';
import { getDropdownOptionList } from './timePickerUtility';

type fetchOptionsFunction = (searchTerm: string) => Promise<{
  searchTerm?: string;
  count: number;
  options: OptionSchema[];
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
   * refers to time based on which time difference is shown in option label
   */
  // referenceTime?: string;
  /**
   * Callback function to be called when options are selected from dropdown.
   */
  onChange: (selected: any[] | any, name?: string | number) => void;
}

export const TimePickerWithFuzzySearch = (props: TimePickerWithDropdown) => {
  const {
    endTime,
    interval,
    startTime,
    timeFormat,
    optionList,
    fetchOptions,
    // referenceTime,
    noResultMessage,
    showTimeDifference,
    ...rest
  } = props;

  const dropdownOptionList = getDropdownOptionList(props);

  // const [dropdownOptionList, setDropdownOptionList] = React.useState<OptionSchema[]>(
  //   getTimeOptionList(startTime, endTime, interval)
  // );

  return (
    <Dropdown
      maxHeight={160}
      withSearch={true}
      isTimePickerRange={true}
      searchPlaceholder="Search"
      fetchOptions={fetchOptions}
      options={dropdownOptionList}
      noResultMessage={noResultMessage}
      staticLimit={dropdownOptionList.length}
      {...rest}
    />
  );
};

TimePickerWithFuzzySearch.defaultProps = {
  timeFormat: 'hh:mm AM',
  // referenceTime: '00:00 AM',
  interval: 15,
};

TimePickerWithFuzzySearch.displayName = 'TimePickerWithFuzzySearch';
export default TimePickerWithFuzzySearch;
