import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type ProgressRingSize = 'small' | 'regular' | 'large';
export interface ProgressRingProps extends BaseProps {
    size: ProgressRingSize;
    value: number;
    max: number;
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
