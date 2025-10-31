import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { TextColor } from '@/common.type';
export type ParagraphAppearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled';
export type ParagraphProps = {
    children: React.ReactNode;
    appearance?: ParagraphAppearance;
    color?: TextColor;
} & BaseProps & BaseHtmlProps<HTMLParagraphElement>;
export declare const Paragraph: React.ForwardRefExoticComponent<{
    children: React.ReactNode;
    appearance?: ParagraphAppearance;
    color?: TextColor;
} & BaseProps & BaseHtmlProps<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export default Paragraph;
