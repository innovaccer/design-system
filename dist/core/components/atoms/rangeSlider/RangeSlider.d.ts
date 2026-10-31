import * as React from 'react';
import { MultiSliderProps } from '@/components/atoms/multiSlider';
import { NumberRange } from '@/common.type';
export interface RangeSliderProps extends Omit<MultiSliderProps, 'labelStepSize' | 'max' | 'min' | 'stepSize' | 'labelRenderer'> {
    defaultValue?: NumberRange;
    value?: NumberRange;
    onChange?: (value: NumberRange) => void;
    onRelease?: (value: NumberRange) => void;
    labelStepSize?: number;
    max?: number;
    min?: number;
    stepSize?: number;
    labelRenderer?: boolean | ((value: number) => string);
}
export declare const RangeSlider: {
    (props: RangeSliderProps): React.JSX.Element;
    displayName: string;
};
export default RangeSlider;
