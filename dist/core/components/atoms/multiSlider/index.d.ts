import * as React from 'react';
import { BaseProps } from '@/utils/types';
import Handle, { HandleProps } from './Handle';
import { NumberRange } from '@/common.type';
export type MultiSliderProps = {
    disabled?: boolean;
    labelStepSize: number;
    labelPrecision?: number;
    max: number;
    min: number;
    stepSize: number;
    label?: string;
    labelRenderer: boolean | ((value: number) => string);
} & BaseProps;
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
    hoveredLabelValue?: number;
}
type InternalMultiSliderProps = SliderBaserProps & RangeSliderBaseProps & {
    children?: React.ReactNode;
};
export declare class MultiSlider extends React.Component<InternalMultiSliderProps, MultiSliderState> {
    static defaultProps: {
        labelStepSize: number;
        max: number;
        min: number;
        stepSize: number;
        labelRenderer: boolean;
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
    getTrackFill: (start: HandleProps, end?: HandleProps) => boolean;
    nearestHandleForValue(handles: Handle[], getOffset: (handle: Handle) => number): Handle | undefined;
    maybeHandleTrackClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    getLockedHandleIndex: (startIndex: number, endIndex: number) => number;
    getNewHandleValues: (newValue: number, oldIndex: number) => number[];
    onReleaseHandler: (newValue: number, index: number) => void;
    onChangeHandler: (newValue: number, index: number) => void;
    formatLabel: (value: number) => string;
    renderHandles: () => React.JSX.Element[] | null;
    renderLabels: () => React.ReactElement[];
    renderTrackFill: (index: number, start: HandleProps, end: HandleProps) => React.JSX.Element;
    renderTracks: () => React.ReactElement<unknown, string | React.JSXElementConstructor<any>>[];
    handleLabelMouseOver: (value: number) => void;
    handleLabelMouseLeave: () => void;
    render(): React.JSX.Element;
}
export default MultiSlider;
