import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type ProgressBarSize = 'small' | 'regular';
export type ProgressBarState = 'default' | 'indeterminate';
export type ProgressBarProps = {
    value?: number;
    max?: number;
    size?: ProgressBarSize;
    state?: ProgressBarState;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    id?: string;
} & BaseProps;
export declare const ProgressBar: {
    (props: ProgressBarProps): React.JSX.Element;
    displayName: string;
};
export default ProgressBar;
