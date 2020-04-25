/// <reference types="react" />
export declare type Appearance = 'default' | 'subtle' | 'disabled' | 'white';
export interface SubheadingProps {
    children: string;
    appearance?: Appearance;
}
export declare const Subheading: {
    (props: SubheadingProps): JSX.Element;
    displayName: string;
};
export default Subheading;
