import * as React from 'react';
import { BaseProps } from "../../../../utils/types";
export interface UnreadMessageProps extends BaseProps {
    text: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
}
declare const UnreadMessage: React.FC<UnreadMessageProps>;
export default UnreadMessage;
