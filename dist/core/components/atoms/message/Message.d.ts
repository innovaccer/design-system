import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { MessageAppearance } from "../../../common.type";
export interface MessageProps extends BaseProps {
    appearance: MessageAppearance;
    title?: string;
    children?: React.ReactNode;
    description: string;
    actions?: React.ReactNode;
}
export declare const Message: {
    (props: MessageProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
        description: string;
    };
};
export default Message;
