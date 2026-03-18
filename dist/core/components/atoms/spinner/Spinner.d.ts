import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type SpinnerAppearance = 'primary' | 'secondary' | 'white' | 'alert';
export declare type SpinnerSize = 'xsmall' | 'small' | 'medium' | 'large';
export interface SpinnerProps extends BaseProps {
    appearance: SpinnerAppearance;
    size: SpinnerSize;
    'aria-label'?: string;
}
export declare const Spinner: {
    (props: SpinnerProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
        size: string;
        'aria-label': string;
    };
};
export default Spinner;
