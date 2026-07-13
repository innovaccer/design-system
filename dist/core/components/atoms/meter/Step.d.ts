import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type StepSize = 'small' | 'regular' | 'large';
export type StepType = 'filled' | 'empty';
export type StepColor = 'info' | 'success' | 'warning' | 'alert';
export type StepProps = {
    stepSize?: StepSize;
    type?: StepType;
    emptyColor?: string;
    fillColor?: StepColor;
} & BaseProps;
export declare const Step: {
    (props: StepProps): React.JSX.Element;
    displayName: string;
};
export default Step;
