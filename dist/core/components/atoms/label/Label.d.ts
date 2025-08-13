import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
export type LabelProps = {
    children: React.ReactNode;
    disabled?: boolean;
    required?: boolean;
    optional?: boolean;
    withInput?: boolean;
    info?: string;
} & BaseProps & BaseHtmlProps<HTMLLabelElement>;
export declare const Label: {
    (props: LabelProps): React.JSX.Element;
    displayName: string;
};
export default Label;
