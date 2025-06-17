import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { OptionSchema } from '@/components/atoms/dropdown/option';
type fetchOptionsFunction = (searchTerm: string) => Promise<{
    count: number;
    searchTerm?: string;
    scrollToIndex?: number;
    options: OptionSchema[];
}>;
export type TimeFormat = '12-Hour' | '24-Hour';
export interface TimePickerDropdownProps extends BaseProps {
    withSearch?: boolean;
    startTime?: string;
    endTime?: string;
    interval: number;
    timeFormat: TimeFormat;
    open?: boolean;
    noResultMessage?: string;
    showDuration?: boolean;
    disabledSlotList?: string[];
    onChange?: (selected: any[] | any, name?: string | number) => void;
    fetchTimeOptions?: fetchOptionsFunction;
    id?: string;
    error?: boolean;
}
export declare const TimePickerWithSearch: {
    (props: TimePickerDropdownProps): React.JSX.Element;
    defaultProps: {
        timeFormat: string;
        interval: number;
    };
    displayName: string;
};
export default TimePickerWithSearch;
