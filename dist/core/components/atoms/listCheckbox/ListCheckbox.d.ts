import * as React from 'react';
export declare type Size = 'regular' | 'tiny';
export interface CheckboxProps {
    size?: Size;
    checked?: boolean;
    label: string;
    value: any;
    onChange?: (checked: boolean) => void;
}
export interface ListCheckboxProps {
    label?: string;
    showParentCheckbox?: boolean;
    checked?: boolean;
    list: CheckboxProps[];
    updatedSelectedArray?: boolean[];
    style?: React.CSSProperties;
    selected?: any[];
    selectedLabels?: string[];
    optionsLength: number;
    onChange?: (childArray: number[], labels: string[], parent: boolean) => void;
    onUpdateSelected?: (selected: number[]) => void;
}
export declare const ListCheckbox: React.ForwardRefExoticComponent<ListCheckboxProps & React.RefAttributes<HTMLDivElement>>;
export default ListCheckbox;
