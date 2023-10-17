import { BaseProps } from "../../../utils/types";
import { ChipInputProps } from "../../../index.type";
export interface EditableChipInputProps extends BaseProps {
    placeholder: string;
    value?: string[];
    onChange?: (chips: string[]) => void;
    disableSaveAction?: boolean;
    chipInputOptions: Omit<ChipInputProps, 'placeholder' | 'value' | 'defaultValue'>;
}
export declare const EditableChipInput: {
    (props: EditableChipInputProps): JSX.Element;
    defaultProps: {
        placeholder: string;
        chipInputOptions: {};
    };
};
export default EditableChipInput;
