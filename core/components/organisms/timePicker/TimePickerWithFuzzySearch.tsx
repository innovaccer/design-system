import * as React from 'react';
import { Dropdown } from '@/index';
import { TimeFormat } from '@/common.type';
import { getTimeOptionList } from './utility';
import { OptionSchema } from '@/components/atoms/dropdown/option';

type fetchOptionsFunction = (searchTerm: string) => Promise<{
  searchTerm?: string;
  count: number;
  options: OptionSchema[];
}>;

export interface TimerListProps {
  /**
   * Indicates the start time for the options in particular time format `hh:mm [AM | PM]` or `hh:mm`
   */
  startTime?: string;
  /**
   * Indicates the end time for the options in particular time format `hh:mm [AM | PM]` or `hh:mm`
   */
  endTime?: string;
  /**
   * Depicts the time interval in `min` between options
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
   * time in hh:mm based on which time difference is shown in option label
   */
  referenceTime: string;
}

export const TimePickerWithFuzzySearch = (props: TimerListProps) => {
  const {
    endTime,
    interval,
    startTime,
    timeFormat,
    optionList,
    fetchOptions,
    referenceTime,
    noResultMessage,
    showTimeDifference,
    ...rest
  } = props;

  const getDropdownOptionList = () => {
    if (optionList) {
      return optionList;
    }

    const updatedStartTime = startTime || '00:00 AM';
    const endTime12HourFormat = '11:59 PM';
    const endTime24HourFormat = '23:59';
    const updatedEndTime = endTime ? endTime : timeFormat === 'hh:mm AM' ? endTime12HourFormat : endTime24HourFormat;
    const timeOptionList = getTimeOptionList(
      updatedStartTime,
      updatedEndTime,
      interval,
      timeFormat,
      referenceTime,
      showTimeDifference
    );
    return timeOptionList;
  };

  const dropdownOptionList = getDropdownOptionList();

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
  referenceTime: '00:00 AM',
  interval: 15,
};

TimePickerWithFuzzySearch.displayName = 'TimePickerWithFuzzySearch';
export default TimePickerWithFuzzySearch;
