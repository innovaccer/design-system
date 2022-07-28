import * as React from 'react';
import { Dropdown } from '@/index';
import { getScrollIndex } from './utility/searchUtils';
import { OptionSchema } from '@/components/atoms/dropdown/option';
import { getDropdownOptionList, isFormat12Hour, convert24To12HourFormat } from './utility/timePickerUtility';
import { scrollToOptionIndex } from '@/components/atoms/dropdown/utility';

type fetchOptionsFunction = (searchTerm: string) => Promise<{
  searchTerm?: string;
  count: number;
  options: OptionSchema[];
  scrollToIndex?: number;
}>;

export type TimeFormat = '12-Hour' | '24-Hour';

export interface TimePickerDropdownProps {
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
}

let scrollFlag = false;
let selectedList: OptionSchema[] = [];

export const TimePickerAsDropdown = (props: TimePickerDropdownProps) => {
  const { onChange, timeFormat, fetchTimeOptions, noResultMessage } = props;

  const [tabIndex, setTabIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const dropdownOptionList = getDropdownOptionList(props);

  React.useEffect(() => {
    if (open && scrollFlag) {
      setTimeout(() => {
        scrollToOptionIndex(tabIndex + 1);
      }, 100);
    }
  }, [open, scrollFlag]);

  const onChangeHandler = (props: string) => {
    let time = props;
    scrollFlag = true;

    if (isFormat12Hour(timeFormat)) {
      time = convert24To12HourFormat(time);
    }

    const index = dropdownOptionList.findIndex((option) => option.value === props);
    selectedList = [dropdownOptionList[index]];
    dropdownOptionList[index].selected = true;
    setTabIndex(index);
    onChange && onChange(time);
  };

  const getOptionList = (searchTerm: string) => {
    const indexValue = getScrollIndex(dropdownOptionList, searchTerm);

    scrollFlag = false;

    if (searchTerm === '' && selectedList.length > 0) {
      const selectedIndex = dropdownOptionList.findIndex((option) => option.value === selectedList[0].value);
      setTabIndex(selectedIndex);
      scrollFlag = true;
    } else {
      setTabIndex(indexValue);
    }

    return Promise.resolve({
      options: indexValue === -1 ? [] : dropdownOptionList,
      count: dropdownOptionList.length,
      scrollToIndex: indexValue + 1,
      searchTerm,
    });
  };

  const fetchOptionList = React.useCallback(() => {
    return fetchTimeOptions ? fetchTimeOptions : getOptionList;
  }, []);

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
      open={open}
      onPopperToggle={() => {
        setOpen(!open);
      }}
    />
  );
};

TimePickerAsDropdown.defaultProps = {
  timeFormat: '12-Hour',
  interval: 15,
};

TimePickerAsDropdown.displayName = 'TimePickerAsDropdown';
export default TimePickerAsDropdown;
