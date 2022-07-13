import { TimeFormat } from '@/common.type';

const parseDate = (date_time: any) => {
  const d = new Date();
  d.setHours(date_time.substring(0, 2));
  d.setMinutes(date_time.substring(3, 5));
  return d;
};

const isFormat12Hour = (format: string) => {
  return format === 'hh:mm AM';
};

const isTimeIn12HourFormat = (time: string) => {
  return _isTimeInAM(time) || _isTimeInPM(time);
};

const _isTimeInAM = (time: string) => {
  return time.includes('a') || time.includes('A');
};

export const _isTimeInPM = (time: string) => {
  return time.includes('p') || time.includes('P');
};

/**
 * Convert time from 12 hour format to 24 hour format
 * @param timeStr in hh:mm [AM/PM] format
 * @returns time in HH:MM format
 */
const convert12To24HourFormat = (timeStr: string) => {
  const [time, modifier] = timeStr.split(' ');
  const timeArr = time.split(':');
  let hours = timeArr[0];
  const minutes = timeArr[1];

  if (hours === '12' && _isTimeInAM(modifier)) {
    hours = '00';
  }
  if (_isTimeInPM(modifier)) {
    hours = String(parseInt(hours, 10) + 12);
  }
  return `${hours}:${minutes}`;
};

/**
 * @param val
 * @returns insert 0 at start in case of single digit
 */
const convertToTwoDigit = (val: string) => {
  return ('0' + val).slice(-2);
};

/**
 * Convert time from 24 hour format to 12 hour format
 * @param timeStr in HH:MM format
 * @returns time in hh:mm [AM/PM] format
 */
export const convert24To12HourFormat = (timeStr: string) => {
  const timeArr = timeStr.split(':');
  const hours = parseInt(timeArr[0], 10);
  const modifier = hours >= 12 ? 'PM' : 'AM';

  const convertedHours = hours % 12 || 12;
  let hoursInString = String(convertedHours);
  hoursInString = convertToTwoDigit(hoursInString);

  const minutes = timeArr[1];

  const result = `${String(hoursInString)}:${minutes} ${modifier}`;
  return result;
};

export const getTimeIn24HrFormat = (timeStr: string) => {
  if (isTimeIn12HourFormat(timeStr)) {
    return convert12To24HourFormat(timeStr);
  }

  return timeStr;
};

/**
 * @param startTime in HH:MM format
 * @param endTime in HH:MM format
 * @returns returns true if start time is greater than end time
 */
export const checkTimeDifference = (startTime: string, endTime: string) => {
  const parseStartTime = parseDate(startTime);
  const parseEndTime = parseDate(endTime);
  return parseStartTime > parseEndTime;
};

/**
 * @param startTime in HH:MM format
 * @param endTime in HH:MM format
 * @param interval
 * @returns array of 24 hour time list based on interval
 */
export const get24HourTimeList = (startTime: string, endTime: string, interval: number) => {
  const timeList = [];
  const parseStartTime = parseDate(startTime);
  const parseEndTime = parseDate(endTime);

  while (parseStartTime <= parseEndTime) {
    timeList.push(parseStartTime.toTimeString().substring(0, 5));
    parseStartTime.setMinutes(parseStartTime.getMinutes() + interval);
  }

  /*
    startTime="10:15 PM"
    endTime="11:45 AM"
    result = [10:15pm, 10:30pm, 10:45pm, 11:00pm, 11:15pm, 11:]
  */

  console.log('parseStartTime', parseStartTime, 'parseEndTime', parseEndTime, 'cond', parseStartTime > parseEndTime);

  // while (parseStartTime > parseEndTime) {
  //   timeList.push(parseStartTime.toTimeString().substring(0, 5));
  //   parseStartTime.setMinutes(parseStartTime.getMinutes() + interval);
  // }

  return timeList;
};

/**
 * @param startTime in HH:MM format
 * @param interval
 * @returns time list in 24 hour format including times option for next day
 */
const getReverseTimeList = (startTime: string, interval: number) => {
  const timeList = get24HourTimeList('00:00', '23:59', interval);
  const startTimeIndex = timeList.indexOf(startTime);
  const presentDayList = timeList.slice(startTimeIndex);
  const nextDayList = timeList.slice(0, startTimeIndex);
  const result = presentDayList.concat(nextDayList);

  return result;
};

const getNextDayTimeList = (startTime: string, endTime: string, interval: number) => {
  const timeList = get24HourTimeList('00:00', '23:59', interval);
  const startTimeIndex = timeList.indexOf(startTime);
  const endTimeIndex = timeList.indexOf(endTime);
  const presentDayList = timeList.slice(startTimeIndex);
  const nextDayList = timeList.slice(0, endTimeIndex + 1);
  const result = presentDayList.concat(nextDayList);

  return result;
};

export const getTimeListIn24HourFormat = (startTime: string, endTime: string, interval: number) => {
  if (endTime === '') {
    return getReverseTimeList(startTime, interval);
  }

  // if start time is greater than end time
  if (checkTimeDifference(startTime, endTime)) {
    return getNextDayTimeList(startTime, endTime, interval);
  }
  return get24HourTimeList(startTime, endTime, interval);
};

const getCustomLabel = (time: string, timeFormat: TimeFormat, showTimeDifference?: boolean) => {
  let label = time;
  if (isFormat12Hour(timeFormat)) {
    label = convert24To12HourFormat(time);
  }
  if (showTimeDifference) {
    label += ' (todo)';
  }

  return label;
};

export const convertTimeToOptionList = (timeList: string[], timeFormat: TimeFormat, showTimeDifference?: boolean) => {
  const optionList = timeList.map((time) => {
    return {
      label: getCustomLabel(time, timeFormat, showTimeDifference),
      value: time,
    };
  });
  return optionList;
};
