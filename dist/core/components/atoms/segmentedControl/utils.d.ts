export interface IndicatorDimensions {
    left: number;
    width: number;
    top: number;
    height: number;
}
export interface CalculateIndicatorPositionParams {
    selectedButton: HTMLButtonElement;
    container: HTMLDivElement;
    selectedIndex: number;
    totalChildren: number;
    dividerRefs: Array<HTMLSpanElement | null>;
}
export declare const calculateIndicatorPosition: (params: CalculateIndicatorPositionParams) => IndicatorDimensions;
export interface MeasureButtonWidthsParams {
    buttons: HTMLButtonElement[];
    maxWidth?: string | number;
}
export interface MeasureButtonWidthsResult {
    equalWidth: number | null;
    isConstrained: boolean;
}
export declare const measureButtonWidths: (params: MeasureButtonWidthsParams) => MeasureButtonWidthsResult;
