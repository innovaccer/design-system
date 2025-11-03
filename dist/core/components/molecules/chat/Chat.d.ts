import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface ChatProps extends BaseProps {
    children: React.ReactNode;
}
export declare const Chat: {
    (props: ChatProps): React.JSX.Element;
    DateSeparator: React.FC<import("./dateSeparator").DateSeparatorProps>;
    UnreadMessage: React.FC<import("./unreadMessage").UnreadMessageProps>;
    NewMessage: React.FC<import("./newMessage").NewMessageProps>;
    TypingIndicator: React.FC<import("./typingIndicator").TypingIndicatorProps>;
    ChatBubble: {
        (props: import("./chatBubble").ChatBubbleProps): React.JSX.Element;
        displayName: string;
    };
    ChatInput: React.FC<import("./chatInput/ChatInput").ChatInputProps>;
};
export default Chat;
