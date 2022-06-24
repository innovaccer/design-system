import { scrollIntoView } from '@/components/atoms/dropdown/utility';
import { isFormat12hour, get12HourTimeList, get12HourSearchIndex } from './12HourUtils';
import { get24HourTimeList } from './24HourUtils';
import { OptionSchema } from '@/components/atoms/dropdown/option';

export const getTimeOptionList = (startTime: string, endTime: string, interval: number, timeFormat: string) => {
  let timeList = [];

  if (isFormat12hour(timeFormat)) {
    timeList = get12HourTimeList(interval, startTime, endTime);
  } else {
    timeList = get24HourTimeList(interval, startTime, endTime);
  }

  const optionList = timeList.map((time) => {
    return { label: time, value: time };
  });

  return optionList;
};

export const getSearchedTimeList = (options: OptionSchema[], searchTerm: string) => {
  const searchIndex = get12HourSearchIndex(options, searchTerm);
  const result: [] = [];
  if (searchIndex === -1) return result;

  const dropdownWrapper = document.getElementsByClassName('Dropdown-wrapper')[0] as HTMLDivElement;
  const optionText = document.querySelectorAll('.Dropdown-items')[searchIndex] as HTMLDivElement;

  scrollIntoView(dropdownWrapper, optionText);
  return options;
};
