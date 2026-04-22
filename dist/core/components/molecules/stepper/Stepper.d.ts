import * as React from 'react';
import { BaseProps } from '@/utils/types';
export interface StepProp {
    label: string;
    value?: string | number;
}
export type StepperProps = {
    active?: number;
    completed?: number;
    steps: StepProp[];
    onChange?: (active: number, completed: number, label?: string, value?: string | number) => void;
    skipIndexes?: number[];
} & BaseProps;
export declare const Stepper: {
    (props: StepperProps): React.JSX.Element;
    displayName: string;
};
export default Stepper;
