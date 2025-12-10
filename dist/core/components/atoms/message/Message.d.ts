import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { MessageAppearance } from "../../../common.type";
declare type MessageSize = 'small' | 'regular';
export interface MessageProps extends BaseProps {
    appearance: MessageAppearance;
    title?: string;
    size?: MessageSize;
    children?: React.ReactNode;
    description: string;
    actions?: React.ReactNode;
}
export declare const Message: {
    (props: MessageProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
        description: string;
    };
};
export default Message;
