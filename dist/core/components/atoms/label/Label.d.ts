import * as React from 'react';
import { BaseProps } from '@/utils/types';
export interface LabelProps extends BaseProps {
    children: React.ReactNode;
    disabled?: boolean;
    required?: boolean;
    withInput?: boolean;
}
export declare const Label: {
    (props: LabelProps): JSX.Element;
    displayName: string;
};
export default Label;
