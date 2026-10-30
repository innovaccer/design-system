import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type ProgressRingSize = 'small' | 'regular' | 'large';
export type ProgressRingProps = {
    size?: ProgressRingSize;
    value: number;
    max?: number;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    id?: string;
} & BaseProps;
export declare const ProgressRing: {
    (props: ProgressRingProps): React.JSX.Element;
    displayName: string;
};
export default ProgressRing;
