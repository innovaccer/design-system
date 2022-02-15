import * as React from 'react';
export interface StepProps {
    label: string;
    value?: React.ReactText;
    disabled: boolean;
    active: boolean;
    completed: boolean;
    onChange?: (label: string, value?: React.ReactText) => void;
}
export declare const Step: {
    (props: StepProps): JSX.Element;
    displayName: string;
};
export default Step;
