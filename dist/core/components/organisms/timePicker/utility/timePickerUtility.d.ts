import { TimePickerDropdownProps } from "../TimePickerWithSearch";
export declare const isFormat12Hour: (format: string) => boolean;
export declare const _isTimeInAM: (time: string) => boolean;
export declare const _isTimeInPM: (time: string) => boolean;
export declare const convert12To24HourFormat: (timeStr: string) => string;
export declare const convertToTwoDigit: (val: string | number) => string;
export declare const convert24To12HourFormat: (timeStr: string) => string;
export declare const checkTimeDifference: (startTime: string, endTime: string) => boolean;
export declare const getTimeDifference: (startTime: string, endTime: string) => {
    hour: number;
    minute: number;
};
export declare const getDropdownOptionList: (props: TimePickerDropdownProps) => {
    label: string;
    value: string;
    disabled: boolean | undefined;
    selected: boolean;
    optionID: string;
}[];
