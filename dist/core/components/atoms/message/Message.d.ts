import * as React from 'react';
export declare type Appearance = 'default' | 'alert' | 'info' | 'success' | 'warning';
export interface MessageProps {
    appearance?: Appearance;
    title?: string;
    children: React.ReactNode;
}
export declare const Message: React.FunctionComponent<MessageProps>;
export default Message;
