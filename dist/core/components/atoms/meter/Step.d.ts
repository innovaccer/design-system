import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type StepSize = 'small' | 'regular' | 'large';
export declare type StepType = 'filled' | 'empty';
export declare type StepColor = 'info' | 'success' | 'warning' | 'alert';
export interface StepProps extends BaseProps {
    stepSize: StepSize;
    type: StepType;
    emptyColor?: string;
    fillColor?: StepColor;
}
export declare const Step: {
    (props: StepProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        stepSize: string;
        type: string;
        emptyColor: string;
    };
};
export default Step;
