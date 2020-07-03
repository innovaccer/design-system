/// <reference types="react" />
import { SharedProps } from '../calendar/Calendar';
import { DateType, DateFormat } from '../calendar/types';
import { Position } from '@/components/molecules/popover';
import { Mask, InputMaskProps } from '@/components/molecules/inputMask';
import { Validator } from '../calendar/utility';
export declare type RangePickerProps = {
    onRangeChange?: (startDate: Date, endDate: Date, startValue?: string, endValue?: string) => void;
    startDate?: DateType;
    endDate?: DateType;
    rangeLimit?: number;
    withInput?: boolean;
    open?: boolean;
    position?: Position;
    inputFormat?: DateFormat;
    outputFormat?: DateFormat;
    startInputOptions?: Omit<InputMaskProps, 'mask' | 'value' | 'onChange' | 'Blur' | 'onClick' | 'onClear'>;
    endInputOptions?: Omit<InputMaskProps, 'mask' | 'value' | 'onChange' | 'Blur' | 'onClick' | 'onClear'>;
    mask?: Mask;
    validator?: Validator;
} & SharedProps;
export declare const RangePicker: {
    (props: RangePickerProps): JSX.Element;
    displayName: string;
};
export default RangePicker;
