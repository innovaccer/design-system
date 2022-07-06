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

/**
 * @param val
 * @returns insert 0 at start in case of single digit
 */
const convertToTwoDigit = (val: string | number) => {
  return ('0' + val).slice(-2);
};

/**
 * Convert time in 24 hour format
 * @param time in hh:mm [AM | PM] 12 hour format
 * @returns time in hhmm 24 hour format
 */
const convertTo24hrFormat = (time: string) => {
  const timeArr = time.split(':');
  let hour = timeArr[0];
  if (_isTimeInPM(time)) {
    hour = convertToTwoDigit(Number(timeArr[0]) + 12);
  }
  const min = timeArr[1];
  return `${hour}${min}`;
};

export const getTimeDifference = (startTime: string, endTime: string) => {
  const startTimeIn24Format = convertTo24hrFormat(startTime);
  const endTimeIn24Format = convertTo24hrFormat(endTime);
  let timeDiff = String(Number(endTimeIn24Format.slice(0, 4)) - Number(startTimeIn24Format.slice(0, 4)));
  timeDiff = ('0' + timeDiff).slice(-4);
  const hour = timeDiff.slice(0, 2);
  const min = timeDiff.slice(2);
  return `${hour} hr ${min} min`;
};

// =========== SEARCH LOGIC ==============
const _checkNumber = (str: string) => {
  const numberRegex = /^[0-9]+$/;
  return numberRegex.test(str);
};

const _checkNumberWithAMPM = (str: string) => {
  const numberWithAMPMRegex = /^[0-9]+[ AaMmPp]+$/;
  return numberWithAMPMRegex.test(str);
};

const specialCharRegex = /[`\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

const _checkNumberWithSpecialChar = (str: string) => {
  const numberWithSpecialCharRegex = /^[0-9]+[`\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~][0-9]*$/;
  return numberWithSpecialCharRegex.test(str);
};

const _checkNumberWithSpecialCharAPM = (str: string) => {
  const numberWithSpecialCharAPM = /^[0-9]+[`\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~][0-9]+[ AaMmPp]+$/;
  return numberWithSpecialCharAPM.test(str);
};

const _isTimeInAM = (str: string) => {
  return str.includes('a') || str.includes('A');
};

export const _isTimeInPM = (str: string) => {
  return str.includes('p') || str.includes('P');
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
    case 1: // if search term length is 1 consider it as hour
      hh = '0' + searchTerm;
      break;

    case 2: // if search term length is 2
      if (searchTerm <= '12') {
        // consider it as hour
        hh = convertToTwoDigit(searchTerm);
      } else {
        // consider first term as hour and last term as min
        hh = '0' + searchTerm[0];
        mm = searchTerm[1] + '0';
      }
      break;

    case 3:
      if (firstTwoTerm <= '12') {
        hh = convertToTwoDigit(firstTwoTerm);
        mm = searchTerm.slice(2) + '0';
      } else {
        hh = '0' + searchTerm[0];
        mm = searchTerm.slice(1);
      }
      break;

    case 4:
      // @todo: add support if user type 2100
      // hh = String(Number(firstTwoTerm) % 12);
      hh = firstTwoTerm;
      mm = searchTerm.slice(2);
      break;

    default:
      // set time as -1 in case of invalid time
      hh = '-1';
      mm = '-1';
  }
  const timeStr = `${hh}:${mm}`;
  return timeStr;
};

/**
 * Find next available time zone (AM | PM) slot based on current time
 * @param searchTime in hh:mm format
 * @returns search time in hh:mm (AM | PM) format
 */
const getTimeZoneFromCurrentTime = (searchTime: string) => {
  const currentTimeStamp = getCurrentTimeIn12HourFormat();
  const currentTimeZone = currentTimeStamp ? getAMPMType(currentTimeStamp) : 'AM';
  // @todo check this condition like ('12:03' > '02:00' returns true which is incorrect)
  if (currentTimeStamp > searchTime) {
    if (currentTimeZone === 'PM') {
      // @todo: add this condition
      // if next date is allowed
      searchTime += ' AM';
      // else show invalid time
    } else {
      searchTime += 'PM';
    }
  } else {
    searchTime += ` ${currentTimeZone}`;
  }
  return searchTime;
};

/**
 * @param searchTime in [number APM] format
 * @returns search time in hh:mm APM format
 */
const getTimeFromNumberWithAPM = (searchTime: string) => {
  const timeArr = searchTime.split(/[\saAmMpP]/);
  const timeValue = timeArr[0];
  const timeInHourMin = getSearchTimeFromNumber(timeValue);
  const timeZone = _isTimeInAM(searchTime) ? 'AM' : 'PM';
  const modifiedSearchTime = timeInHourMin + ` ${timeZone}`;
  return modifiedSearchTime;
};

/**
 * @param searchTime in [number special-char] format
 * @returns time in hh:mm format
 */
const getTimeFromNumberWithSpecialChar = (searchTime: string) => {
  const time = searchTime.split(specialCharRegex);
  const hh = convertToTwoDigit(time[0]);
  const mm = time[1] !== '' ? (time[1] + '0').slice(0, 2) : '00';
  const timeInHHMM = `${hh}:${mm}`;

  return timeInHHMM;
};

/**
 * Modifies the search term w.r.t time shown in option list
 * @param searchTerm entered by user in any format
 * @returns modified search term in hh:mm AM|PM format
 */
const formatSearchTerm = (searchTerm: string) => {
  let searchTime = '00:00';

  // If search term only contains numbers
  if (_checkNumber(searchTerm)) {
    const timeInHHMM = getSearchTimeFromNumber(searchTerm);
    searchTime = getTimeZoneFromCurrentTime(timeInHHMM);
  }

  // if search term contains numbers along with [apm]
  else if (_checkNumberWithAMPM(searchTerm)) {
    searchTime = getTimeFromNumberWithAPM(searchTerm);
  }

  // if search term contains numbers along with special character
  else if (_checkNumberWithSpecialChar(searchTerm)) {
    const timeInHHMM = getTimeFromNumberWithSpecialChar(searchTerm);
    searchTime = getTimeZoneFromCurrentTime(timeInHHMM);
  }

  // if search term contains numbers, special character & [AmPm]
  else if (_checkNumberWithSpecialCharAPM(searchTerm)) {
    const timeWithoutAPM = searchTerm.replace(/[\saApPmM]/g, '');
    let timeInHHMM = '00:00';

    if (_checkNumber(timeWithoutAPM)) {
      timeInHHMM = getSearchTimeFromNumber(timeWithoutAPM);
    } else if (_checkNumberWithSpecialChar(timeWithoutAPM)) {
      timeInHHMM = getTimeFromNumberWithSpecialChar(timeWithoutAPM);
    }

    const timeZone = _isTimeInAM(searchTerm) ? 'AM' : 'PM';
    searchTime = timeInHHMM + ` ${timeZone}`;
  }

  return searchTime;
};

const getValueFromOptionList = (optionList: OptionSchema[]) => {
  const list = optionList.map((option: any) => option.value);
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
  const modifiedOptionList = getValueFromOptionList(options);
  const searchIndex = getNearestTimeOptionIndex(modifiedOptionList, modifiedSearchTerm);
  if (searchIndex > modifiedOptionList.length) {
    return -1;
  }
  return searchIndex;
};
