import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { ChangeEvent } from '@/common.type';
export type ChoiceListAlignment = 'horizontal' | 'vertical';
export type ChoiceListSize = 'regular' | 'tiny';
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
export type ChoiceListProps = {
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
} & BaseProps;
export declare const ChoiceList: {
    (props: ChoiceListProps): React.JSX.Element;
    displayName: string;
};
export default ChoiceList;
