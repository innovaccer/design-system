import { TimeType, AMPMType } from './TimePickerWithInput';
import { InputProps } from '@/index.type';

interface TimeObject {
  hours: number;
  minutes: number;
  am_pm: string;
}

export const placeholders: { [key: string]: InputProps['placeholder'] } = {
  ['hh:mm']: '--:--',
  ['hh:mm AM']: '--:-- AM',
};

export const isPlaceholderPresent = (placeholderChar: string, time?: string) => {
  return time && time.includes(placeholderChar);
};

export const isFormat12hour = (format: string) => {
  return format === 'hh:mm AM';
};

const get12hourFormat = (hours: number) => {
  const AMPM = hours < 12 ? 'AM' : 'PM';
  const hrs = hours % 12 || 12;
  return { hrs, AMPM };
};

const get24hourFormat = (hours: number, am_pm?: AMPMType | string) => {
  let convertedHours = hours;

  if (am_pm) {
    if (am_pm === 'PM' && hours < 12) {
      convertedHours = hours + 12;
    } else if (am_pm === 'AM' && hours === 12) {
      convertedHours = hours - 12;
    }

    return convertedHours;
  }

  return hours;
};

export const translateToTime = (format: string, time?: TimeType) => {
  if (!time) return '';

  if (typeof time === 'number') {
    const timeObj = getTimeObjectFromNumber(format, time);
    return translateToString(format, timeObj);
  }

  return time;
};

const getTimeObjectFromNumber = (format: string, time: number) => {
  const d = new Date(time);
  const hrs = d.getHours();

  const hours = isFormat12hour(format) ? get12hourFormat(hrs).hrs : hrs;
  const am_pm = isFormat12hour(format) ? get12hourFormat(hrs).AMPM : '';
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  return { hours, minutes, seconds, am_pm };
};

export const getTimeObjFromStr = (format: string, time: string) => {
  const separator = ':';
  let hours = 0;
  let minutes = 0;

  const len = format.length;
  const timeLength = time.length;
  const lastChars = format.substring(len - 2, len);
  const is12hrFormat = lastChars === 'AM' || lastChars === 'PM';

  const am_pm: AMPMType | string = is12hrFormat ? time.substring(timeLength - 2, timeLength) : '';
  const timeFormat = is12hrFormat ? time.substring(0, timeLength - 3) : time;
  const inputFormat = is12hrFormat ? format.substring(0, len - 3) : format;

  const v = timeFormat.split(separator);
  inputFormat.split(separator).forEach((f, i) => {
    switch (f) {
      case 'hh':
        hours = +v[i] || 0;
        break;
      case 'mm':
        minutes = +v[i] || 0;
        break;
    }
  });
  return { hours, minutes, am_pm };
};

export const getOutputTimeString = (inputFormat: string, outputFormat: string, time: string) => {
  if (inputFormat === outputFormat) return time;

  const { hours, minutes, am_pm } = getTimeObjFromStr(inputFormat, time);
  const AMPM = isFormat12hour(outputFormat) ? get12hourFormat(hours).AMPM : '';
  const hrs = isFormat12hour(outputFormat) ? get12hourFormat(hours).hrs : get24hourFormat(hours, am_pm);

  const timeStr = translateToString(outputFormat, { minutes, hours: hrs, am_pm: AMPM });
  return timeStr;
};

const translateToString = (format: string, time: TimeObject) => {
  const { hours, minutes, am_pm } = time;

  const separator = ':';
  const timeFormat = format.split(' ');
  const v = timeFormat[0].split(separator);
  let val = '';

  v.forEach((f, i) => {
    switch (f) {
      case 'hh':
        val += hours < 10 ? `0${hours}` : hours;
        break;
      case 'mm':
        val += minutes < 10 ? `0${minutes}` : minutes;
        break;
    }
    if (i !== f.length - 1) val += separator;
  });

  val += isFormat12hour(format) && am_pm ? ` ${am_pm}` : '';
  return val;
};
