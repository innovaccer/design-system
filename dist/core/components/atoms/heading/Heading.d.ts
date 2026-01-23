import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { HeadingAppearance, TextColor } from '@/common.type';
export type HeadingSize = 's' | 'm' | 'l' | 'xl' | 'xxl';
export type HeadingProps = {
    children: string | number;
    appearance?: HeadingAppearance;
    size?: HeadingSize;
    color?: TextColor;
} & BaseProps & BaseHtmlProps<HTMLHeadingElement>;
export declare const Heading: React.ForwardRefExoticComponent<{
    children: string | number;
    appearance?: HeadingAppearance;
    size?: HeadingSize;
    color?: TextColor;
} & BaseProps & BaseHtmlProps<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
export default Heading;
