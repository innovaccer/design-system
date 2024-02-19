import { MultiSliderProps } from "../multiSlider";
export interface SliderProps extends MultiSliderProps {
    defaultValue: number;
    value?: number;
    onChange?: (value: number) => void;
    onRelease?: (value: number) => void;
}
export declare const Slider: {
    (props: SliderProps): JSX.Element;
    displayName: string;
    defaultProps: {
        defaultValue: number;
        labelStepSize: number;
        max: number;
        min: number;
        stepSize: number;
        labelRenderer: boolean;
    };
};
export default Slider;
