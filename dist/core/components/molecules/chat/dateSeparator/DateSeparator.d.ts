import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type DateSeparatorProps = {
    date: string | number;
} & BaseProps;
declare const DateSeparator: React.FC<DateSeparatorProps>;
export default DateSeparator;
