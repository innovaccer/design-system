/// <reference types="react" />
export declare type Appearance = 'primary' | 'secondary' | 'white';
export declare type Size = 'small' | 'medium' | 'large';
export interface SpinnerProps {
    appearance?: Appearance;
    size?: Size;
}
export declare const Spinner: {
    (props: SpinnerProps): JSX.Element;
    displayName: string;
};
export default Spinner;
