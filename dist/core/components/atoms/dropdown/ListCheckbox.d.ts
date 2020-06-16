import * as React from 'react';
import { OptionRendererProps } from './option';
export declare type Size = 'regular' | 'tiny';
export interface CheckboxProps {
    checked?: boolean;
    group?: string;
    selectedGroup?: boolean;
    label: string;
    value: any;
}
export interface ListCheckboxProps extends OptionRendererProps {
    label?: string;
    showParentCheckbox?: boolean;
    checked?: boolean;
    bufferedOption?: CheckboxProps;
    showGroups?: boolean;
    list: CheckboxProps[];
    updatedSelectedArray?: boolean[];
    style?: React.CSSProperties;
    selected?: any[];
    selectedLabels?: string[];
    optionsLength: number;
    remainingOptions: number;
    onChange?: (childArray: number[], labels: string[], parent: boolean) => void;
    onUpdateSelected?: (selected: number[]) => void;
    renderFooter: () => JSX.Element;
    renderGroups: (group: string, selectedGroup?: boolean) => JSX.Element;
}
export declare const ListCheckbox: React.ForwardRefExoticComponent<ListCheckboxProps & React.RefAttributes<HTMLDivElement>>;
export default ListCheckbox;
