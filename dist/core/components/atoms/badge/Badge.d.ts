import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type Appearance = 'primary' | 'secondary' | 'alert' | 'warning' | 'success' | 'accent1' | 'accent2' | 'accent3' | 'accent4';
export interface BadgeProps extends BaseProps {
    appearance: Appearance;
    subtle?: boolean;
    children: React.ReactText;
}
export declare const Badge: {
    (props: BadgeProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
    };
};
export default Badge;
