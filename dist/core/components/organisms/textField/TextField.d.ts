import { TextFieldTextareaProps } from "./TextFieldWithTextarea";
import { TextFieldInputProps } from "./TextFieldWithInput";
export declare type TextFieldProps = TextFieldTextareaProps & TextFieldInputProps;
export declare const TextField: {
    (props: TextFieldProps): JSX.Element;
    displayName: string;
};
export default TextField;
