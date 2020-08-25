/// <reference types="react" />
import { MultiSliderProps } from "../multiSlider";
export interface SliderProps extends MultiSliderProps {
    defaultValue?: number;
    value?: number;
    onChange?: (value: number) => void;
    onRelease?: (value: number) => void;
}
export declare const Slider: (props: SliderProps) => JSX.Element;
export default Slider;
