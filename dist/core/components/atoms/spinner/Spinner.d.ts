import * as React from 'react';
export declare type Appearance = 'primary' | 'secondary' | 'white';
export declare type Size = 'small' | 'medium' | 'large';
export interface SpinnerProps {
    appearance?: Appearance;
    size?: Size;
}
export declare const Spinner: React.FunctionComponent<SpinnerProps>;
export default Spinner;
