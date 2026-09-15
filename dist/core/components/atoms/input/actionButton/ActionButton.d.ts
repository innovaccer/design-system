import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { IconType } from '@/common.type';
export type ActionButtonType = 'outlined' | 'rounded';
export type ActionButtonProps = {
    name?: string;
    size?: number;
    type?: ActionButtonType;
    iconType?: IconType;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    children?: React.ReactNode;
    tabIndex?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>['tabIndex'];
} & BaseProps;
export declare const ActionButton: {
    (props: ActionButtonProps): React.JSX.Element;
    displayName: string;
};
export default ActionButton;
