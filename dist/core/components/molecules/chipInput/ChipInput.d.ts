import * as React from 'react';
import { ChipProps } from '@/index.type';
import { BaseProps } from '@/utils/types';
type ChipOptions = {
    icon?: ChipProps['icon'];
    type?: ChipProps['type'];
    iconType?: ChipProps['iconType'];
    clearButton?: ChipProps['clearButton'];
    maxWidth?: ChipProps['maxWidth'];
    onClick?: (value: string, index: number) => void;
};
export type ChipInputSize = 'regular' | 'small';
export type ChipInputProps = {
    allowDuplicates?: boolean;
    chipOptions?: ChipOptions;
    size?: ChipInputSize;
    disabled?: boolean;
    error?: boolean;
    placeholder?: string;
    value?: string[];
    defaultValue?: string[];
    autoFocus?: boolean;
    onChange?: (chips: string[]) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    chipValidator?: (chip: string) => boolean;
} & BaseProps;
export declare const ChipInput: {
    (props: ChipInputProps): React.JSX.Element;
    displayName: string;
};
export default ChipInput;
