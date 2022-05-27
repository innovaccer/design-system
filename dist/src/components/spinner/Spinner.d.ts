import { BaseProps } from "../../utils/types";
export declare type SpinnerAppearance = 'primary' | 'secondary' | 'white';
export declare type SpinnerSize = 'small' | 'medium' | 'large';
export interface SpinnerProps extends BaseProps {
    appearance: SpinnerAppearance;
    size: SpinnerSize;
}
export declare const Spinner: {
    (props: SpinnerProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
        size: string;
    };
};
export default Spinner;
