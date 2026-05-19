import * as React from 'react';
import { BaseProps, BaseHtmlProps } from "../../../utils/types";
import { AccentAppearance } from "../../../common.type";
export interface BadgeProps extends BaseProps, BaseHtmlProps<HTMLSpanElement> {
    appearance: AccentAppearance;
    subtle?: boolean;
    children: React.ReactText;
}
export declare const Badge: {
    (props: BadgeProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
    };
};
export default Badge;
