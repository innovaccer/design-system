/// <reference types="react" />
export declare type Appearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled';
export interface TextProps {
    children: string;
    weight?: 'strong' | 'medium';
    small?: boolean;
    appearance?: Appearance;
}
export declare const Text: (props: TextProps) => JSX.Element;
export default Text;
