import { BaseProps } from "../../../utils/types";
import { TextareaProps } from "../../../index.type";
export interface TextFieldWithTextareaProps extends BaseProps {
    label?: string;
    withTextarea?: boolean;
    max?: number;
    helpText?: string;
}
export declare type TextFieldTextareaProps = TextFieldWithTextareaProps & TextareaProps;
export declare const TextFieldWithTextarea: (props: TextFieldTextareaProps) => JSX.Element;
export default TextFieldWithTextarea;
