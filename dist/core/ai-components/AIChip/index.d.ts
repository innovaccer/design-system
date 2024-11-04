import * as React from 'react';
export interface AIChipProps extends React.ComponentProps<'button'> {
    label: string;
    icon: string;
    disabled?: boolean;
    'data-test'?: string;
    className?: string;
}
export declare const AIChip: (props: AIChipProps) => JSX.Element;
export default AIChip;
