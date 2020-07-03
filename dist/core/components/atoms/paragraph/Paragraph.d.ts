import * as React from 'react';
import { BaseProps } from '@/utils/types';
export declare type Appearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled';
export interface ParagraphProps extends BaseProps {
    children: React.ReactNode;
    appearance?: Appearance;
}
export declare const Paragraph: React.FunctionComponent<ParagraphProps>;
export default Paragraph;
