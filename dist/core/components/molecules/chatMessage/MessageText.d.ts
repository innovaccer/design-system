import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { SharedProps } from "./ChatMessage";
export interface MessageTextProps extends BaseProps {
    text: string;
    typingText: string;
}
export declare type InternalTextProps = MessageTextProps & SharedProps;
export declare const MessageText: {
    (props: InternalTextProps): React.JSX.Element;
    defaultProps: {
        text: string;
        typingText: string;
    };
    displayName: string;
};
export default MessageText;
