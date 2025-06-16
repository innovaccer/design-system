import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
export interface LabelProps extends BaseProps, BaseHtmlProps<HTMLLabelElement> {
    children: React.ReactNode;
    disabled?: boolean;
    required?: boolean;
    optional?: boolean;
    withInput?: boolean;
    info?: string;
}
export declare const Label: {
    (props: LabelProps): React.JSX.Element;
    displayName: string;
};
export default Label;
