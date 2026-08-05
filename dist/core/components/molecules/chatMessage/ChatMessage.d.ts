import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { StatusProps, StatusType } from './Status';
import { BoxProps } from './Box';
import { MessageTextProps } from './MessageText';
export type MessageType = 'incoming' | 'outgoing';
export interface SharedProps {
    type: MessageType;
    isTyping?: boolean;
    statusType?: StatusType;
}
export interface ChatMessageBaseProps extends BaseProps {
    type: MessageType;
    isTyping?: boolean;
    statusOptions?: StatusProps;
}
export type ChatMessageProps = ChatMessageBaseProps & BoxProps & MessageTextProps;
export declare const ChatMessage: {
    (props: ChatMessageProps): React.JSX.Element;
    displayName: string;
};
export default ChatMessage;
