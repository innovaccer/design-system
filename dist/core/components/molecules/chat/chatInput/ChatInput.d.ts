import React from 'react';
import { BaseProps } from '@/utils/types';
export type ChatInputProps = {
    placeholder?: string;
    defaultValue?: string;
    disabled?: boolean;
    readOnly?: boolean;
    showStopButton?: boolean;
    actionRenderer?: () => React.JSX.Element;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onSend?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, value?: string) => void;
    onStopGenerating?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & BaseProps;
declare const ChatInput: React.FC<ChatInputProps>;
export default ChatInput;
