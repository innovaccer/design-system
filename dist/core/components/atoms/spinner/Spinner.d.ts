import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type SpinnerAppearance = 'primary' | 'secondary' | 'white';
export type SpinnerSize = 'xsmall' | 'small' | 'medium' | 'large';
export type SpinnerProps = {
    appearance?: SpinnerAppearance;
    size?: SpinnerSize;
} & BaseProps;
export declare const Spinner: {
    (props: SpinnerProps): React.JSX.Element;
    displayName: string;
};
export default Spinner;
