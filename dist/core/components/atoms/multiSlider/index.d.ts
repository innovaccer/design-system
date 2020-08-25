import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import Handle, { HandleProps } from "./Handle";
declare type NumberRange = [number, number];
export interface MultiSliderProps extends BaseProps {
    disabled?: boolean;
    labelStepSize?: number;
    labelPrecision?: number;
    max?: number;
    min?: number;
    stepSize?: number;
    label?: string;
    labelRenderer?: boolean | ((value: number) => string);
}
interface SliderBaserProps extends MultiSliderProps {
    onChange?: (values: number) => void;
    onRelease?: (values: number) => void;
}
interface RangeSliderBaseProps extends MultiSliderProps {
    onRangeChange?: (values: NumberRange) => void;
    onRangeRelease?: (values: NumberRange) => void;
}
interface MultiSliderState {
    labelPrecision: number;
    tickSize: number;
    tickSizeRatio: number;
}
declare const defaultProps: {
    disabled: boolean;
    labelStepSize: number;
    max: number;
    min: number;
    stepSize: number;
};
declare type DefaultProps = Readonly<typeof defaultProps>;
declare type InternalMultiSliderProps = SliderBaserProps & RangeSliderBaseProps & DefaultProps;
export declare class MultiSlider extends React.Component<InternalMultiSliderProps, MultiSliderState> {
    static defaultProps: {
        disabled: boolean;
        labelStepSize: number;
        max: number;
        min: number;
        stepSize: number;
    };
    static Handle: React.FunctionComponent<HandleProps>;
    handleElements: Handle[];
    trackElement: HTMLElement | null;
    constructor(props: InternalMultiSliderProps);
    getDerivedStateFromProps(props: InternalMultiSliderProps): {
        labelPrecision: number;
    };
    getSnapshotBeforeUpdate(prevProps: InternalMultiSliderProps): null;
    componentDidMount(): void;
    getLabelPrecision: ({ labelPrecision, stepSize }: InternalMultiSliderProps) => number;
    getOffsetRatio: (value: number) => number;
    addHandleRef: (ref: Handle) => void;
    getHandleValues: (props: React.PropsWithChildren<InternalMultiSliderProps>) => HandleProps[];
    updateTickSize: () => void;
    getTrackFill: (start: HandleProps, end?: HandleProps | undefined) => boolean;
    nearestHandleForValue(handles: Handle[], getOffset: (handle: Handle) => number): Handle | undefined;
    maybeHandleTrackClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    getLockedHandleIndex: (startIndex: number, endIndex: number) => number;
    getNewHandleValues: (newValue: number, oldIndex: number) => number[];
    onReleaseHandler: (newValue: number, index: number) => void;
    onChangeHandler: (newValue: number, index: number) => void;
    renderHandles: () => JSX.Element[] | null;
    formatLabel: (value: number) => string;
    renderLabels: () => JSX.Element[];
    renderTrackFill: (index: number, start: HandleProps, end: HandleProps) => JSX.Element;
    renderTracks: () => JSX.Element[];
    render(): JSX.Element;
}
export default MultiSlider;
