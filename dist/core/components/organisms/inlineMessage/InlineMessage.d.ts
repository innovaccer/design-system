import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { MessageAppearance } from '@/common.type';
export type MessageSize = 'regular' | 'small';
export type InlineMessageProps = {
    appearance?: MessageAppearance;
    description?: string;
    size?: MessageSize;
} & BaseProps;
export declare const InlineMessage: {
    (props: InlineMessageProps): React.JSX.Element;
    displayName: string;
};
export default InlineMessage;
