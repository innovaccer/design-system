import { Mask } from "./types";
import { DatePickerProps, InputMaskProps } from "../index.type";
declare type DateFormat = DatePickerProps['inputFormat'];
export declare const date: Record<DateFormat, Mask>;
export declare const time: {
    [key: string]: InputMaskProps['mask'];
};
export {};
