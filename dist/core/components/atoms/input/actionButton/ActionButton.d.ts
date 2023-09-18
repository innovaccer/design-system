import * as React from 'react';
import { BaseProps } from "../../../../utils/types";
import { FontVariationType } from "../../../../common.type";
export declare type ActionButtonType = 'outlined' | 'rounded';
export interface ActionButtonProps extends BaseProps {
    name?: string;
    size: number;
    type?: ActionButtonType;
    iconVariations?: FontVariationType;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    children?: React.ReactNode;
    tabIndex?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>['tabIndex'];
}
export declare const ActionButton: {
    (props: ActionButtonProps): JSX.Element;
    displayName: string;
    defaultProps: {
        size: number;
        type: string;
    };
};
export default ActionButton;
