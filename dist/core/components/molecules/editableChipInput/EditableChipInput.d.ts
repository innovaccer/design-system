import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { ChipInputProps } from "../../../index.type";
export declare type EditableChipInputSize = 'regular' | 'small';
export interface EditableChipInputProps extends BaseProps {
    placeholder: string;
    value?: string[];
    size?: 'regular' | 'small';
    onChange?: (chips: string[]) => void;
    disableSaveAction?: boolean;
    chipInputOptions: Omit<ChipInputProps, 'placeholder' | 'value' | 'defaultValue'>;
}
export declare const EditableChipInput: {
    (props: EditableChipInputProps): React.JSX.Element;
    defaultProps: {
        placeholder: string;
        chipInputOptions: {};
    };
};
export default EditableChipInput;
