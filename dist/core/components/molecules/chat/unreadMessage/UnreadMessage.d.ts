import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type UnreadMessageProps = {
    text: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
} & BaseProps;
declare const UnreadMessage: React.FC<UnreadMessageProps>;
export default UnreadMessage;
