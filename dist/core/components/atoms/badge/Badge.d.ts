import * as React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { AccentAppearance } from '@/common.type';
export type BadgeProps = {
    appearance?: AccentAppearance;
    subtle?: boolean;
    children: string | number;
} & BaseProps & BaseHtmlProps<HTMLSpanElement>;
export declare const Badge: {
    (props: BadgeProps): React.JSX.Element;
    displayName: string;
};
export default Badge;
