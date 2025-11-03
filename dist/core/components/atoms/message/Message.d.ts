import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { MessageAppearance } from '@/common.type';
type MessageSize = 'small' | 'regular';
export type MessageProps = {
    appearance?: MessageAppearance;
    title?: string;
    size?: MessageSize;
    children?: React.ReactNode;
    description?: string;
    actions?: React.ReactNode;
} & BaseProps;
export declare const Message: {
    (props: MessageProps): React.JSX.Element;
    displayName: string;
};
export default Message;
