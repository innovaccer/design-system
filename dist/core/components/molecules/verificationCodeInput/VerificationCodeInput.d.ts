import React from 'react';
import { BaseProps } from '@/utils/types';
import { InputProps } from '@/index.type';
interface VerificationProps extends BaseProps {
    fields?: number;
    type?: 'text' | 'number' | 'password';
    onComplete?: (value: string) => void;
    onChange?: (value: string) => void;
}
export type VerificationCodeInputProps = VerificationProps & Omit<InputProps, 'name' | 'type' | 'defaultValue' | 'size' | 'icon' | 'inlineLabel' | 'autoComplete' | 'onChange' | 'onClear' | 'info' | 'min' | 'max' | 'minLength' | 'maxLength' | 'actionIcon'>;
declare const VerificationCodeInput: {
    (props: VerificationCodeInputProps): React.JSX.Element;
    displayName: string;
};
export default VerificationCodeInput;
