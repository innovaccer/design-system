import { convertToTwoDigit, isFormat12Hour } from './timePickerUtility';
import { TimeFormat } from '@/common.type';

// const computeThreeDigitToTime = (searchTerm: string, timeFormat: TimeFormat) => {
//   const searchTimeInNum = parseInt(searchTerm, 10);
//   const firstTwoTerm = searchTerm.slice(0, searchTerm.length - 1);

//   if (isFormat12Hour(timeFormat)) {
//     if (searchTimeInNum <= 12) {
//       hh = convertToTwoDigit(firstTwoTerm);
//       mm = searchTerm.slice(2) + '0';
//     } else {
//       hh = '0' + searchTerm[0];
//       mm = searchTerm.slice(1);
//     }
//   } else {
//     if (searchTimeInNum <= 24) {
//       hh = convertToTwoDigit(firstTwoTerm);
//       mm = searchTerm.slice(2) + '0';
//     } else {
//     }
//   }
// };

const computeThreeDigitToTime = (searchTerm: string, timeFormat: TimeFormat) => {
  const searchTimeInNum = parseInt(searchTerm, 10);
  const is12HourFormat = isFormat12Hour(timeFormat);
  return (is12HourFormat && searchTimeInNum <= 12) || (!is12HourFormat && searchTimeInNum <= 24);
};

/**
 * If search term only contains number
 * modify search time according to options available in time list
 * @param searchTerm
 * @returns timeObj with hour & minute
 */
export const getSearchTimeFromNumber = (searchTerm: string, timeFormat: TimeFormat) => {
  const searchLen = searchTerm.length;
  const searchTimeInNum = parseInt(searchTerm, 10);
  const firstTwoTerm = searchTerm.slice(0, searchLen - 1);
  let hh = '00';
  let mm = '00';

  switch (searchLen) {
    case 1: // if search term length is 1 consider it as hour
      hh = '0' + searchTerm;
      break;

    case 2: // if search term length is 2
      if (searchTimeInNum <= 24) {
        // consider it as hour
        hh = convertToTwoDigit(searchTerm);
      } else {
        // consider first term as hour and last term as min
        hh = '0' + searchTerm[0];
        mm = searchTerm[1] + '0';
      }
      break;

    case 3:
      if (computeThreeDigitToTime(searchTerm, timeFormat)) {
        hh = convertToTwoDigit(firstTwoTerm);
        mm = searchTerm.slice(2) + '0';
      }
      // if (firstTwoTerm <= '12') {
      //   hh = convertToTwoDigit(firstTwoTerm);
      //   mm = searchTerm.slice(2) + '0';
      // }
      else {
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
  return { hh, mm };
};
