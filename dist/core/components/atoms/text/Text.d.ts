import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { TextColor } from '@/common.type';
export type TextSize = 'small' | 'regular' | 'large';
export type TextAppearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled' | 'success' | 'link';
export type TextProps = {
    children: string | number;
    weight?: 'strong' | 'medium';
    small?: boolean;
    appearance?: TextAppearance;
    size?: TextSize;
    color?: TextColor;
} & BaseProps & BaseHtmlProps<HTMLSpanElement>;
export declare const Text: React.ForwardRefExoticComponent<{
    children: string | number;
    weight?: "strong" | "medium";
    small?: boolean;
    appearance?: TextAppearance;
    size?: TextSize;
    color?: TextColor;
} & BaseProps & BaseHtmlProps<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
export default Text;
