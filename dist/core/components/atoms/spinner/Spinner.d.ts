/// <reference types="react" />
import { BaseProps } from "../../../utils/types";
export declare type Appearance = 'primary' | 'secondary' | 'white';
export declare type Size = 'small' | 'medium' | 'large';
export interface SpinnerProps extends BaseProps {
    appearance?: Appearance;
    size?: Size;
}
export declare const Spinner: {
    (props: SpinnerProps): JSX.Element;
    displayName: string;
};
export default Spinner;
