import * as React from 'react';
import { MultiSliderProps } from '@/components/atoms/multiSlider';
import { NumberRange } from '@/common.type';
export interface RangeSliderProps extends MultiSliderProps {
    defaultValue: NumberRange;
    value?: NumberRange;
    onChange?: (value: NumberRange) => void;
    onRelease?: (value: NumberRange) => void;
}
export declare const RangeSlider: {
    (props: RangeSliderProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        defaultValue: number[];
        labelStepSize: number;
        max: number;
        min: number;
        stepSize: number;
        labelRenderer: boolean;
    };
};
export default RangeSlider;
