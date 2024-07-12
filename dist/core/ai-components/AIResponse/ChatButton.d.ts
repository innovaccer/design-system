import { ButtonProps } from "../../index.type";
declare type ChatButtonType = Omit<ButtonProps, 'size' | 'largeIcon' | 'appearance'>;
export declare const ChatButton: (props: ChatButtonType) => JSX.Element;
export default ChatButton;
