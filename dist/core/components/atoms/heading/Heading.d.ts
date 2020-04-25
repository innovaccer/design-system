/// <reference types="react" />
export declare type Size = 'default' | 'm' | 'l' | 'xl' | 'xxl';
export declare type Appearance = 'default' | 'subtle' | 'disabled' | 'white';
export interface HeadingProps {
    children: string;
    appearance?: Appearance;
    size?: Size;
}
export declare const Heading: {
    (props: HeadingProps): JSX.Element;
    displayName: string;
};
export default Heading;
