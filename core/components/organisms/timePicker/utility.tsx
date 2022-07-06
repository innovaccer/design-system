import { isFormat12hour, get12HourTimeList, get12HourSearchIndex, getTimeDifference } from './12HourUtils';
import { get24HourTimeList } from './24HourUtils';
import { OptionSchema } from '@/components/atoms/dropdown/option';
// import { getTimeObjFromStr } from './utils';

/**
 *
 * @param startTime
 * @param endTime
 * @param timeFormat
 */
// const getTimeDifference = (startTime: string, endTime: string, timeFormat: string) => {
//   const startTimeObj = getTimeObjFromStr(timeFormat, startTime);
//   const endTimeObj = getTimeObjFromStr(timeFormat, endTime);
//   const startDate = new Date(2022, 10, 10, startTimeObj.hours, startTimeObj.minutes);
//   const endDate = new Date(2022, 10, 10, endTimeObj.hours, endTimeObj.minutes);
//   let difference = endDate.getTime() - startDate.getTime();
//   console.log('diff', difference);

//   difference = difference / 1000;
//   const hourDifference = Math.floor(difference / 3600);
//   difference -= hourDifference * 3600;
//   const minuteDifference = Math.floor(difference / 60);
//   difference -= minuteDifference * 60;

//   // console.log('hourDifference', hourDifference, 'minuteDifference', minuteDifference);

//   // console.log('startTime', startTime, 'startTimeObj', startTimeObj, 'endTimeObj', endTimeObj, 'endTime', endTime);
//   return `${hourDifference} hr ${minuteDifference} min`;
// };

const getTimeListObj = (list: string[], referenceTime: string, showTimeDifference?: boolean) => {
  if (showTimeDifference) {
    const optionList = list.map((currTime) => {
      const timeDiff = getTimeDifference(referenceTime, currTime);
      return { label: currTime + ` (${timeDiff})`, value: currTime };
    });

    return optionList;
  }

  const optionList = list.map((time) => {
    return { label: time, value: time };
  });

  return optionList;
};

export const getTimeOptionList = (
  startTime: string,
  endTime: string,
  interval: number,
  timeFormat: string,
  referenceTime: string,
  showTimeDifference?: boolean
) => {
  let timeList = [];

  if (isFormat12hour(timeFormat)) {
    timeList = get12HourTimeList(interval, startTime, endTime);
  } else {
    timeList = get24HourTimeList(interval, startTime, endTime);
  }

  const optionList = getTimeListObj(timeList, referenceTime, showTimeDifference);

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
