/// <reference types="react" />
import { BaseProps } from '@/utils/types';
export interface ProgressBarProps extends BaseProps {
    value: number;
    max?: number;
}
export declare const ProgressBar: {
    (props: ProgressBarProps): JSX.Element;
    displayName: string;
};
export default ProgressBar;
