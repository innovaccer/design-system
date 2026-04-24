import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { ChangeEvent } from "../../../common.type";
export declare type ChoiceListAlignment = 'horizontal' | 'vertical';
export declare type ChoiceListSize = 'regular' | 'tiny';
export interface Choice {
    value: string;
    label?: string;
    disabled?: boolean;
    helpText?: string;
    name: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    tabIndex?: number;
    required?: boolean;
}
export interface ChoiceListProps extends BaseProps {
    title?: string;
    choices: Choice[];
    alignment?: ChoiceListAlignment;
    size?: ChoiceListSize;
    allowMultiple?: boolean;
    disabled?: boolean;
    selected?: string[];
    onChange?: (event: ChangeEvent, selected: string[]) => void;
    wrapLabel?: boolean;
    'aria-label'?: string;
    'aria-labelledby'?: string;
}
export declare const ChoiceList: {
    (props: ChoiceListProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        alignment: string;
        size: string;
        allowMultiple: boolean;
        disabled: boolean;
    };
};
export default ChoiceList;
