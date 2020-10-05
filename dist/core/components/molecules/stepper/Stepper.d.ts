import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface StepProp {
    label: string;
    value?: React.ReactText;
}
export interface StepperProps extends BaseProps {
    active: number;
    completed: number;
    steps: StepProp[];
    onChange?: (active: number, completed: number, label?: string, value?: React.ReactText) => void;
}
export declare const Stepper: {
    (props: StepperProps): JSX.Element;
    displayName: string;
    defaultProps: {
        completed: number;
        active: number;
    };
};
export default Stepper;
