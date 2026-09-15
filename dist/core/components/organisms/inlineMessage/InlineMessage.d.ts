import * as React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { MessageAppearance } from '@/common.type';
export type MessageSize = 'regular' | 'small';
export type InlineMessageProps = {
    id?: string;
    appearance?: MessageAppearance;
    description?: string;
    size?: MessageSize;
} & BaseProps & BaseHtmlProps<HTMLDivElement>;
export declare const InlineMessage: {
    (props: InlineMessageProps): React.JSX.Element;
    displayName: string;
};
export default InlineMessage;
