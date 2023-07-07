import * as React from 'react';
import { BaseProps } from "../../../../utils/types";
export declare type ActionButtonType = 'filled' | 'outlined' | 'round' | 'two-tone' | 'sharp';
export interface ActionButtonProps extends BaseProps {
    name?: string;
    size: number;
    type?: ActionButtonType;
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
