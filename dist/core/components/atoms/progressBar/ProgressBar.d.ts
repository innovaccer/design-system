import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type ProgressBarSize = 'small' | 'regular';
export type ProgressBarState = 'default' | 'indeterminate';
export interface ProgressBarProps extends BaseProps {
    value?: number;
    max: number;
    size: ProgressBarSize;
    state?: ProgressBarState;
}
export declare const ProgressBar: {
    (props: ProgressBarProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        max: number;
        size: string;
        state: string;
    };
};
export default ProgressBar;
