import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import { TextColor } from '@/common.type';
export type ParagraphAppearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled';
export interface ParagraphProps extends BaseProps, BaseHtmlProps<HTMLParagraphElement> {
    children: React.ReactNode;
    appearance: ParagraphAppearance;
    color?: TextColor;
}
export declare const Paragraph: React.ForwardRefExoticComponent<ParagraphProps & React.RefAttributes<HTMLParagraphElement>>;
export default Paragraph;
