import * as React from 'react';
import { BaseProps } from "../../../../utils/types";
export interface AvatarIconProps extends BaseProps {
    name?: string;
    type?: 'outlined' | 'rounded';
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    tabIndex?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>['tabIndex'];
}
export declare const AvatarIcon: (props: AvatarIconProps) => JSX.Element;
export default AvatarIcon;
