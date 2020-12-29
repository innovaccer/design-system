import { BaseProps } from "../../../utils/types";
export interface Data {
    name: string;
    value: any;
}
export interface DonutChartProps extends BaseProps {
    data: Data[];
    withLegends?: boolean;
    withTooltip?: boolean;
    withActiveSegment?: boolean;
    colors: string[];
    withCenterText: boolean;
    colorOfTotalCount: string;
    radius?: number;
    width: number;
    legendWidth: number;
    customTooltip?: (payload: any) => JSX.Element;
}
export declare const DonutChart: {
    (props: DonutChartProps): JSX.Element;
    displayName: string;
    defaultProps: {
        width: number;
        legendWidth: number;
        colors: string[];
        withCenterText: boolean;
        colorOfTotalCount: string;
    };
};
export default DonutChart;
