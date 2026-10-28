import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type ProgressRingSize = 'small' | 'regular' | 'large';
export interface ProgressRingProps extends BaseProps {
    size: ProgressRingSize;
    value: number;
    max: number;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    id?: string;
}
export declare const ProgressRing: {
    (props: ProgressRingProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        size: string;
        max: number;
    };
};
export default ProgressRing;
