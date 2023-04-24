import { BaseProps } from "../../../utils/types";
import { InputProps } from "../../../index.type";
interface VerificationProps extends BaseProps {
    fields?: number;
    type?: 'text' | 'number' | 'password';
    onComplete?: (value: string) => void;
}
export declare type VerificationCodeInputProps = VerificationProps & Omit<InputProps, 'name' | 'type' | 'defaultValue' | 'size' | 'icon' | 'inlineLabel' | 'autoComplete' | 'onChange' | 'onClear' | 'info' | 'min' | 'max' | 'minLength' | 'maxLength' | 'actionIcon'>;
declare const VerificationCodeInput: {
    (props: VerificationCodeInputProps): JSX.Element;
    displayName: string;
    defaultProps: {
        type: string;
        fields: number;
    };
};
export default VerificationCodeInput;
