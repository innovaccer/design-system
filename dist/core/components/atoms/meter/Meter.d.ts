import * as React from 'react';
import { StepColor } from "./Step";
import { BaseProps } from "../../../utils/types";
export declare type MeterLabelSize = 'small' | 'regular' | 'large';
export declare type MeterSize = 'small' | 'regular' | 'large';
export declare type RenderLabelProps = {
    filledSteps: number;
    value: number;
    min: number;
    max: number;
    stepCount: number;
    percentage: number;
};
export declare type FillStepProps = {
    value: number;
    stepCount: number;
    min: number;
    max: number;
};
export declare type MeterValueProps = {
    value: number;
    min: number;
    max: number;
    stepCount: number;
    getFilledSteps?: (props: FillStepProps) => number;
};
export interface MeterProps extends BaseProps, React.HTMLAttributes<HTMLDivElement> {
    value: number;
    min: number;
    max: number;
    stepCount: number;
    emptyColor?: string;
    fillColor?: StepColor | StepColor[];
    meterSize: MeterSize;
    labelSize?: MeterLabelSize;
    renderLabel?: (props: RenderLabelProps) => React.ReactText;
    showLabel?: boolean;
    getFilledSteps?: (props: FillStepProps) => number;
    ariaLabel?: string;
}
export declare const Meter: {
    (props: MeterProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        value: number;
        min: number;
        max: number;
        stepCount: number;
        fillColor: string;
        meterSize: string;
        type: string;
        showLabel: boolean;
        emptyColor: string;
    };
    useMeterValues: (props: MeterValueProps) => {
        filledSteps: number;
        percentage: number;
        value: number;
        min: number;
        max: number;
        stepCount: number;
    };
};
export default Meter;
