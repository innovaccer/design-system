import * as React from 'react';
export interface LabelProps {
    children: React.ReactNode;
    disabled?: boolean;
    required?: boolean;
    withInput?: boolean;
    className?: string;
}
export declare const Label: {
    (props: LabelProps): JSX.Element;
    displayName: string;
};
export default Label;
