import * as React from 'react';
export declare type Appearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled';
export interface ParagraphProps {
    children: React.ReactNode;
    appearance?: Appearance;
}
export declare const Paragraph: React.FunctionComponent<ParagraphProps>;
export default Paragraph;
