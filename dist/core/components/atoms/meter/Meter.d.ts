import * as React from 'react';
import { StepColor } from './Step';
import { BaseProps } from '@/utils/types';
export type MeterLabelSize = 'small' | 'regular' | 'large';
export type MeterSize = 'small' | 'regular' | 'large';
export type RenderLabelProps = {
    filledSteps: number;
    value: number;
    min: number;
    max: number;
    stepCount: number;
    percentage: number;
};
export type FillStepProps = {
    value: number;
    stepCount: number;
    min: number;
    max: number;
};
export type MeterValueProps = {
    value: number;
    min: number;
    max: number;
    stepCount: number;
    getFilledSteps?: (props: FillStepProps) => number;
};
export type MeterProps = {
    value?: number;
    min?: number;
    max?: number;
    stepCount?: number;
    emptyColor?: string;
    fillColor?: StepColor | StepColor[];
    meterSize?: MeterSize;
    labelSize?: MeterLabelSize;
    renderLabel?: (props: RenderLabelProps) => string | number;
    showLabel?: boolean;
    getFilledSteps?: (props: FillStepProps) => number;
    ariaLabel?: string;
} & BaseProps & React.HTMLAttributes<HTMLDivElement>;
export declare const Meter: {
    (props: MeterProps): React.JSX.Element;
    displayName: string;
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
