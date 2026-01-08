import * as React from 'react';
import { TBaseHtmlProps } from '../common.type';
export interface ChatActionBarProps extends TBaseHtmlProps<HTMLDivElement> {
    children: React.ReactNode;
    'data-test'?: string;
    className?: string;
}
export declare const ChatActionBar: (props: ChatActionBarProps) => React.JSX.Element;
export default ChatActionBar;
