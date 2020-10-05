/// <reference types="react" />
import { BaseProps } from "../../../utils/types";
export declare type Size = 'small' | 'regular';
export interface ProgressRingProps extends BaseProps {
    size: Size;
    value: number;
    max: number;
}
export declare const ProgressRing: {
    (props: ProgressRingProps): JSX.Element;
    displayName: string;
    defaultProps: {
        size: string;
        max: number;
    };
};
export default ProgressRing;
