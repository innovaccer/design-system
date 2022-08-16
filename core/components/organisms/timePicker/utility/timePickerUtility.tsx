import { TimePickerDropdownProps, TimeFormat } from '../TimePickerWithSearch';

const parseDate = (date_time: any) => {
  const d = new Date();
  d.setHours(date_time.substring(0, 2));
  d.setMinutes(date_time.substring(3, 5));
  return d;
};

export const isFormat12Hour = (format: string) => {
  return format === '12-Hour';
};

const isTimeIn12HourFormat = (time: string) => {
  return _isTimeInAM(time) || _isTimeInPM(time);
};

export const _isTimeInAM = (time: string) => {
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
export const convert12To24HourFormat = (timeStr: string) => {
  const [time, modifier] = timeStr.split(' ');
  const timeArr = time.split(':');
  let hours = timeArr[0];
  const minutes = timeArr[1];

  if (hours === '12' && _isTimeInAM(modifier)) {
    hours = '00';
  }
  if (_isTimeInPM(modifier) && hours !== '12') {
    hours = (parseInt(hours, 10) + 12).toString();
  }
  return `${hours}:${minutes}`;
};

/**
 * @param val
 * @returns insert 0 at start in case of single digit
 */
export const convertToTwoDigit = (val: string | number) => {
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
  let hoursInString = convertedHours.toString();
  hoursInString = convertToTwoDigit(hoursInString);

  const minutes = timeArr[1];

  const result = `${hoursInString.toString()}:${minutes} ${modifier}`;
  return result;
};

const getTimeIn24HrFormat = (timeStr: string) => {
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
const get24HourTimeList = (startTime: string, endTime: string, interval: number) => {
  const timeList = [];
  const parseStartTime = parseDate(startTime);
  const parseEndTime = parseDate(endTime);

  while (parseStartTime <= parseEndTime) {
    timeList.push(parseStartTime.toTimeString().substring(0, 5));
    parseStartTime.setMinutes(parseStartTime.getMinutes() + interval);
  }

  return timeList;
};

/**
 * @param startTime in HH:MM format
 * @param interval
 * @returns time list in 24 hour format including times option for next day
 */
const getReverseTimeList = (startTime: string, endTime: string, interval: number) => {
  const timeList = get24HourTimeList('00:00', '23:59', interval);
  const startTimeIndex = timeList.indexOf(startTime);
  const endTimeIndex = timeList.indexOf(endTime);
  const nextDayTimeIndex = endTime === '' ? startTimeIndex : endTimeIndex + 1;

  const presentDayList = timeList.slice(startTimeIndex);
  const nextDayList = timeList.slice(0, nextDayTimeIndex);
  const result = presentDayList.concat(nextDayList);

  return result;
};

const getTimeListIn24HourFormat = (startTime: string, endTime: string, interval: number) => {
  if (endTime === '' || checkTimeDifference(startTime, endTime)) {
    return getReverseTimeList(startTime, endTime, interval);
  }

  return get24HourTimeList(startTime, endTime, interval);
};

export const getTimeDifference = (startTime: string, endTime: string) => {
  const timeStart = new Date('07/07/2022 ' + startTime);
  const timeEnd = new Date('07/07/2022 ' + endTime);

  const diff = timeEnd.getTime() - timeStart.getTime();
  const diff_as_date = new Date(diff);

  const hour = diff_as_date.getUTCHours();
  const minute = diff_as_date.getUTCMinutes();

  return { hour, minute };
};

const getCustomLabel = (time: string, timeFormat: TimeFormat, showDuration?: boolean, referenceTime?: string) => {
  let label = time;
  if (isFormat12Hour(timeFormat)) {
    label = convert24To12HourFormat(time);
  }
  if (showDuration && referenceTime) {
    const { hour, minute } = getTimeDifference(referenceTime, time);
    const timeDiffLabel = ` (${hour} hr ${minute} min)`;
    label += timeDiffLabel;
  }

  return label;
};

const isOptionDisabled = (time: string, timeFormat: TimeFormat, disabledSlotList: string[]) => {
  let timeValue = time;
  if (isFormat12Hour(timeFormat)) {
    timeValue = convert24To12HourFormat(time);
  }
  if (disabledSlotList.includes(timeValue)) {
    return true;
  }

  return false;
};

const convertTimeToOptionList = (
  timeList: string[],
  timeFormat: TimeFormat,
  id = 'TimePicker-Option-key',
  showDuration?: boolean,
  referenceTime?: string,
  disabledSlotList?: string[]
) => {
  const optionList = timeList.map((time, index) => {
    return {
      label: getCustomLabel(time, timeFormat, showDuration, referenceTime),
      value: time,
      disabled: disabledSlotList && isOptionDisabled(time, timeFormat, disabledSlotList),
      selected: false,
      optionID: id + index,
    };
  });
  return optionList;
};

const computeEndTime = (startTime: string | undefined) => {
  return startTime ? '' : '23:59';
};

export const getDropdownOptionList = (props: TimePickerDropdownProps) => {
  const { startTime, endTime, interval, timeFormat, showDuration, disabledSlotList, id } = props;

  const startTimeIn24Hr = startTime ? getTimeIn24HrFormat(startTime) : '00:00';
  const endTimeIn24Hr = endTime ? getTimeIn24HrFormat(endTime) : computeEndTime(startTime);

  const timeList = getTimeListIn24HourFormat(startTimeIn24Hr, endTimeIn24Hr, interval);

  const dropdownOptionList = convertTimeToOptionList(
    timeList,
    timeFormat,
    id,
    showDuration,
    startTime,
    disabledSlotList
  );

  return dropdownOptionList;
};
