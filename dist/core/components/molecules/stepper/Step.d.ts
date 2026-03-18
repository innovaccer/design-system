import * as React from 'react';
export interface StepProps {
    label: string;
    value?: React.ReactText;
    disabled: boolean;
    active: boolean;
    completed: boolean;
    onChange?: (label: string, value?: React.ReactText) => void;
    onKeyDown?: (e: React.KeyboardEvent) => void;
    isTabStop?: boolean;
}
export declare const Step: React.ForwardRefExoticComponent<StepProps & React.RefAttributes<HTMLDivElement>>;
export default Step;
