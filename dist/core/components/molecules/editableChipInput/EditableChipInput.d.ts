import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { ChipInputProps } from '@/index.type';
export type EditableChipInputProps = {
    placeholder?: string;
    value?: string[];
    onChange?: (chips: string[]) => void;
    disableSaveAction?: boolean;
    chipInputOptions?: Omit<ChipInputProps, 'placeholder' | 'value' | 'defaultValue'>;
} & BaseProps;
export declare const EditableChipInput: (props: EditableChipInputProps) => React.JSX.Element;
export default EditableChipInput;
