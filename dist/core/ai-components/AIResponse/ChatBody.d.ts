import * as React from 'react';
import { TBaseHtmlProps } from '../common.type';
export interface ChatBodyProps extends TBaseHtmlProps<HTMLDivElement> {
    children: React.ReactNode;
    'data-test'?: string;
    className?: string;
}
export declare const ChatBody: (props: ChatBodyProps) => React.JSX.Element;
export default ChatBody;
