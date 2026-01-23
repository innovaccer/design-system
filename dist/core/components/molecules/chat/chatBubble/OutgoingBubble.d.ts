import * as React from 'react';
import { BaseProps } from '@/utils/types';
export interface OutgoingOptionProps extends BaseProps {
    metaData?: string;
    status?: boolean;
    failed?: boolean;
    children?: React.ReactNode;
    time?: string | number;
    actionBar?: () => React.ReactElement;
    urgentMessage?: () => React.ReactElement;
    failedMessage?: () => React.ReactElement;
}
export declare const OutgoingBubble: {
    (props: OutgoingOptionProps): React.JSX.Element;
    displayName: string;
};
export default OutgoingBubble;
