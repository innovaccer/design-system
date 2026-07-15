import { Mask } from '@/utils/types';
import { DatePickerProps, InputMaskProps } from '@/index.type';
type DateFormat = DatePickerProps['inputFormat'];
export declare const date: Record<DateFormat, Mask>;
export declare const rangeDate: Record<DateFormat, Mask>;
export declare const time: {
    [key: string]: InputMaskProps['mask'];
};
export {};
