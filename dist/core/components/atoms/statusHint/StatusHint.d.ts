import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { MessageAppearance } from "../../../common.type";
export interface StatusHintProps extends BaseProps {
    children: React.ReactText;
    appearance: MessageAppearance;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export declare const StatusHint: {
    (props: StatusHintProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
    };
};
export default StatusHint;
