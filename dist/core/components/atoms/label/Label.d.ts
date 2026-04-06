import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
type LabelSize = 'small' | 'regular';
export type LabelProps = {
    children: React.ReactNode;
    disabled?: boolean;
    required?: boolean;
    optional?: boolean;
    withInput?: boolean;
    info?: string;
    size?: LabelSize;
} & BaseProps & BaseHtmlProps<HTMLLabelElement>;
export declare const Label: {
    (props: LabelProps): React.JSX.Element;
    displayName: string;
};
export default Label;
