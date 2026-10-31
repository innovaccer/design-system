import * as React from 'react';
import { MultiSliderProps } from '@/components/atoms/multiSlider';
export interface SliderProps extends Omit<MultiSliderProps, 'labelStepSize' | 'max' | 'min' | 'stepSize' | 'labelRenderer'> {
    defaultValue?: number;
    value?: number;
    onChange?: (value: number) => void;
    onRelease?: (value: number) => void;
    labelStepSize?: number;
    max?: number;
    min?: number;
    stepSize?: number;
    labelRenderer?: boolean | ((value: number) => string);
}
export declare const Slider: {
    (props: SliderProps): React.JSX.Element;
    displayName: string;
};
export default Slider;
