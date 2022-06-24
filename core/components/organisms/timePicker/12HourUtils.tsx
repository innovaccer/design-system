import { OptionSchema } from '@/components/atoms/dropdown/option';

const get12HourIntervalList = (interval: number) => {
  const timesList = [];
  let startTime = 0;
  const AMPM = ['AM', 'PM'];

  for (let i = 0; startTime < 24 * 60; i++) {
    const hh = Math.floor(startTime / 60); // get hours of day in 0-24 format

    const mm = startTime % 60; // get minutes of the hour in 0-55 format

    // store date in array in [00:00 - 12:00 AM/PM format]
    timesList[i] = ('0' + (hh % 12)).slice(-2) + ':' + ('0' + mm).slice(-2) + ' ' + AMPM[Math.floor(hh / 12)];
    startTime = startTime + interval;
  }

  return timesList;
};

const getNearestTimeOptionIndex = (list: string[], option: string) => {
  const optionIndex = list.indexOf(option);

  // if value is present inside array return index
  if (optionIndex !== -1) {
    return optionIndex;
  }
  // else return nearest time value index
  else {
    let index = 0;
    while (list && index <= list.length && (option > list[index] || getAMPMType(option) !== getAMPMType(list[index]))) {
      index++;
    }

    return index;
  }
};

const getAMPMType = (time: string) => {
  const timeLen = time ? time.length : 0;
  const lastChars = time ? time.substring(timeLen - 2, timeLen) : 'AM';
  let result;
  switch (lastChars) {
    case 'AM':
    case 'am':
      result = 'AM';
      break;
    case 'PM':
    case 'pm':
      result = 'PM';
      break;
  }
  return result;
};

export const get12HourTimeList = (interval: number, startTime: string, endTime: string) => {
  const intervalList = get12HourIntervalList(interval);
  const startIndex = getNearestTimeOptionIndex(intervalList, startTime);
  const endIndex = getNearestTimeOptionIndex(intervalList, endTime);
  const timesList = intervalList.slice(startIndex, endIndex + 1);
  return timesList;
};

export const isFormat12hour = (format: string) => {
  return format === 'hh:mm AM';
};

// =========== SEARCH LOGIC ==============
// const _checkNumberWithAMPM = (str: string) => {
//   const numberWithAMPMRegex = /^[0-9]+[ AaMmPp]*$/;
//   return numberWithAMPMRegex.test(str);
// };

const _checkNumber = (str: string) => {
  const numberRegex = /^[0-9]+$/;
  return numberRegex.test(str);
};

const getCurrentTimeIn12HourFormat = () => {
  return new Date().toLocaleTimeString('en-US', { hour: '2-digit', hour12: true, minute: '2-digit' });
};

/**
 * If search term only contains number
 * modify search time according to options available in time list
 * @param searchTerm
 * @returns timeStr in hh:mm format
 */
const getSearchTimeFromNumber = (searchTerm: string) => {
  const searchLen = searchTerm.length;
  const firstTwoTerm = searchTerm.slice(0, searchLen - 1);
  let hh = '00';
  let mm = '00';

  switch (searchLen) {
    case 1:
      hh = '0' + searchTerm;
      break;
    case 2:
      if (searchTerm <= '12') {
        // hh = searchTerm;
        hh = ('0' + searchTerm).slice(-2);
      } else {
        hh = '0' + searchTerm[0];
        mm = searchTerm[1] + '0';
      }
      break;
    case 3:
      if (firstTwoTerm <= '12') {
        hh = ('0' + firstTwoTerm).slice(-2);
        mm = searchTerm.slice(2) + '0';
      } else {
        hh = '0' + searchTerm[0];
        mm = searchTerm.slice(1);
      }
      break;
    case 4:
      hh = firstTwoTerm;
      mm = searchTerm.slice(2);
      break;
    default:
      hh = '-1';
      mm = '-1';
  }
  const timeStr = `${hh}:${mm}`;
  return timeStr;
};

/**
 * Find next available time zone (AM | PM) slot based on current time
 * @param searchTime
 * @returns search time in hh:mm (AM | PM) format
 */
const getTimeZoneFromCurrentTime = (searchTime: string) => {
  const currentTimeStamp = getCurrentTimeIn12HourFormat();
  const currentTimeZone = currentTimeStamp ? getAMPMType(currentTimeStamp) : 'AM';
  if (currentTimeStamp > searchTime) {
    if (currentTimeZone === 'PM') {
      searchTime += ' AM';
    } else {
      searchTime += 'PM';
    }
  } else {
    searchTime += ` ${currentTimeZone}`;
  }
  return searchTime;
};

const formatSearchTerm = (searchTerm: string) => {
  let searchTime = '00:00';

  // If search term only contains number
  if (_checkNumber(searchTerm)) {
    const searchTimeObj = getSearchTimeFromNumber(searchTerm);
    searchTime = getTimeZoneFromCurrentTime(searchTimeObj);
  }

  // if (_checkNumberWithAMPM(searchTerm)) {
  //   searchTime = getSearchTimeWithoutSpecialChar(searchTerm);
  // }

  return searchTime;
};

const getLabelFromOptionList = (optionList: OptionSchema[]) => {
  const list = optionList.map((option: any) => option.label);
  return list;
};

/**
 * Get index of search term from option list
 * @param options
 * @param searchTerm
 * @returns Index
 */
export const get12HourSearchIndex = (options: OptionSchema[], searchTerm: string) => {
  const modifiedSearchTerm = formatSearchTerm(searchTerm);
  const modifiedOptionList = getLabelFromOptionList(options);
  const searchIndex = getNearestTimeOptionIndex(modifiedOptionList, modifiedSearchTerm);
  if (searchIndex > modifiedOptionList.length) {
    return -1;
  }
  return searchIndex;
};
