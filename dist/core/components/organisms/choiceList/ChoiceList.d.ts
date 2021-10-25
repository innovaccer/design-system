import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type Alignment = 'horizontal' | 'vertical';
export declare type Size = 'regular' | 'tiny';
declare type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export interface Choice {
    value: string;
    label?: string;
    disabled?: boolean;
    helpText?: string;
    name: string;
}
export interface ChoiceListProps extends BaseProps {
    title?: string;
    choices: Choice[];
    alignment?: Alignment;
    size?: Size;
    allowMultiple?: boolean;
    disabled?: boolean;
    selected?: string[];
    onChange?(event: ChangeEvent, selected: string[]): void;
}
export declare const ChoiceList: {
    (props: ChoiceListProps): JSX.Element;
    displayName: string;
    defaultProps: {
        alignment: string;
        size: string;
        allowMultiple: boolean;
        disabled: boolean;
    };
};
export default ChoiceList;
