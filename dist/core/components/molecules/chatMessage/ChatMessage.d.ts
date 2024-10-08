import { BaseProps } from "../../../utils/types";
import { StatusProps, StatusType } from "./Status";
import { BoxProps } from "./Box";
import { MessageTextProps } from "./MessageText";
export declare type MessageType = 'incoming' | 'outgoing';
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
export declare type ChatMessageProps = ChatMessageBaseProps & BoxProps & MessageTextProps;
export declare const ChatMessage: {
    (props: ChatMessageProps): JSX.Element;
    displayName: string;
};
export default ChatMessage;
