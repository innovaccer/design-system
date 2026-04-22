import * as React from 'react';
import { TBaseHtmlProps } from '../common.type';
export interface ChatBoxProps extends TBaseHtmlProps<HTMLDivElement> {
    children: React.ReactNode;
    showGlow?: boolean;
    'data-test'?: string;
    className?: string;
}
export declare const ChatBox: (props: ChatBoxProps) => React.JSX.Element;
export default ChatBox;
