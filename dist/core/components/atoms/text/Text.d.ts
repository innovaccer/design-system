import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { TextColor } from '@/common.type';
export type TextSize = 'small' | 'regular' | 'large';
export type TextAppearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled' | 'success' | 'link';
export interface TextProps extends BaseProps, BaseHtmlProps<HTMLSpanElement> {
    children: React.ReactText;
    weight?: 'strong' | 'medium';
    small?: boolean;
    appearance?: TextAppearance;
    size?: TextSize;
    color?: TextColor;
}
export declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLSpanElement>>;
export default Text;
