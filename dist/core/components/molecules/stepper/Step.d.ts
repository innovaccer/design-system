import * as React from 'react';
export interface StepProps {
    label: string;
    value?: string | number;
    disabled: boolean;
    active: boolean;
    completed: boolean;
    onChange?: (label: string, value?: string | number) => void;
}
export declare const Step: {
    (props: StepProps): React.JSX.Element;
    displayName: string;
};
export default Step;
