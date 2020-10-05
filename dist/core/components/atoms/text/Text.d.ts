import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type Size = 'small' | 'regular' | 'large';
export declare type Appearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled' | 'success' | 'link';
export interface TextProps extends BaseProps {
    children: React.ReactText;
    weight?: 'strong' | 'medium';
    small?: boolean;
    appearance: Appearance;
    size: Size;
}
export declare const Text: {
    (props: TextProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
        size: string;
    };
};
export default Text;
