import * as React from 'react';
import { ButtonProps } from "../../index.type";
declare type ChatButtonType = Omit<ButtonProps, 'size' | 'largeIcon' | 'appearance'>;
export declare const ChatButton: (props: ChatButtonType) => React.JSX.Element;
export default ChatButton;
