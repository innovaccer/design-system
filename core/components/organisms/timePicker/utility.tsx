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
  const searchIndex = get12HourSearchIndex(options, searchTerm) + 1;
  const result: [] = [];
  if (searchIndex === -1) return result; // if no option matches search term

  const dropdownWrapper = document.getElementsByClassName('Dropdown-wrapper')[0] as HTMLDivElement;
  const optionList = document.querySelectorAll('.Dropdown-items');
  const targetOption = optionList[searchIndex] as HTMLDivElement;
  const activeOptionClassName = 'Option--active';

  // remove class from previous selected option
  optionList.forEach((i) => i.classList.remove(activeOptionClassName));

  // add active class to current target option
  targetOption.classList.add(activeOptionClassName);
  if (targetOption) {
    scrollIntoView(dropdownWrapper, targetOption);
  }
  return options;
};

export const scrollIntoView = (menuElement: HTMLDivElement | null, focusedElement: HTMLElement) => {
  const menuRect = menuElement?.getBoundingClientRect();
  const focusedRect = focusedElement.getBoundingClientRect();
  const overscroll = focusedElement.offsetHeight;

  if (menuRect && focusedRect.bottom > menuRect.bottom && menuElement) {
    scrollTo(menuElement, focusedElement.offsetTop - menuRect!.height + overscroll);
  } else if (menuRect && focusedRect.top < menuRect!.top && menuElement) {
    scrollTo(menuElement, focusedElement.offsetTop - overscroll);
  }
};

export const scrollTo = (element: Element, top: number) => {
  element.scrollTo(0, top);
};
