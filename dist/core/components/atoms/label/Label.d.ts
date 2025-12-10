import * as React from 'react';
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
declare type LabelSize = 'small' | 'regular';
export interface LabelProps extends BaseProps, BaseHtmlProps<HTMLLabelElement> {
    children: React.ReactNode;
    disabled?: boolean;
    required?: boolean;
    optional?: boolean;
    withInput?: boolean;
    info?: string;
    size?: LabelSize;
}
export declare const Label: {
    (props: LabelProps): React.JSX.Element;
    displayName: string;
};
export default Label;
