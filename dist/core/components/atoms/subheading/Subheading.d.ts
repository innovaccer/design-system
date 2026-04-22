import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { HeadingAppearance, TextColor } from '@/common.type';
export type SubheadingProps = {
    children: string | number;
    appearance?: HeadingAppearance;
    color?: TextColor;
} & BaseProps & BaseHtmlProps<HTMLHeadingElement>;
export declare const Subheading: React.ForwardRefExoticComponent<{
    children: string | number;
    appearance?: HeadingAppearance;
    color?: TextColor;
} & BaseProps & BaseHtmlProps<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
export default Subheading;
