import * as React from 'react';
import { IncomingOptionProps } from './IncomingBubble';
import { OutgoingOptionProps } from './OutgoingBubble';
import { BaseProps } from '@/utils/types';
export type ChatBubbleType = 'incoming' | 'outgoing';
export interface ChatBubbleProps extends BaseProps {
    type: ChatBubbleType;
    incomingOptions?: IncomingOptionProps;
    outgoingOptions?: OutgoingOptionProps;
    children?: React.ReactNode;
}
export declare const ChatBubble: {
    (props: ChatBubbleProps): React.JSX.Element;
    displayName: string;
};
export default ChatBubble;
