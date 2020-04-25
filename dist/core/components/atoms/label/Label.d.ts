import * as React from 'react';
export interface LabelProps {
    children: React.ReactNode;
    disabled?: boolean;
}
export declare const Label: {
    (props: LabelProps): JSX.Element;
    displayName: string;
};
export default Label;
