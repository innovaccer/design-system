import * as React from 'react';
import { BaseProps } from "../../utils/types";
import { AccentAppearance } from "../../common.type";
export interface BadgeProps extends BaseProps {
    appearance: AccentAppearance;
    subtle?: boolean;
    children: React.ReactNode;
    ariaLabel?: string;
}
export declare const Badge: {
    (props: BadgeProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
    };
};
export default Badge;
