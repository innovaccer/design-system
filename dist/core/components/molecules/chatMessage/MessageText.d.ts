import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { SharedProps } from './ChatMessage';
export interface MessageTextProps extends BaseProps {
    text?: string;
    typingText?: string;
}
export type InternalTextProps = MessageTextProps & SharedProps;
export declare const MessageText: {
    (props: InternalTextProps): React.JSX.Element;
    displayName: string;
};
export default MessageText;
