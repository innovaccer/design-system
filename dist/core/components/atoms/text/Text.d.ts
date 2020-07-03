/// <reference types="react" />
import { BaseProps } from '@/utils/types';
export declare type Appearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled';
export interface TextProps extends BaseProps {
    children: string;
    weight?: 'strong' | 'medium';
    small?: boolean;
    appearance?: Appearance;
}
export declare const Text: {
    (props: TextProps): JSX.Element;
    displayName: string;
};
export default Text;
