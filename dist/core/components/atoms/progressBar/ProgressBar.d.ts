import { BaseProps } from "../../../utils/types";
export declare type ProgressBarSize = 'small' | 'regular';
export interface ProgressBarProps extends BaseProps {
    value: number;
    max: number;
    size: ProgressBarSize;
}
export declare const ProgressBar: {
    (props: ProgressBarProps): JSX.Element;
    displayName: string;
    defaultProps: {
        max: number;
        size: string;
    };
};
export default ProgressBar;
