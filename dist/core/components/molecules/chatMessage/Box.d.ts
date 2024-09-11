import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { SharedProps } from "./ChatMessage";
export interface BoxProps extends BaseProps {
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export interface BoxBaseProps {
    withStatus?: boolean;
    children: React.ReactNode;
}
export declare type InternalBoxProps = BoxProps & BoxBaseProps & SharedProps;
export declare const Box: {
    (props: InternalBoxProps): JSX.Element;
    displayName: string;
};
export default Box;
