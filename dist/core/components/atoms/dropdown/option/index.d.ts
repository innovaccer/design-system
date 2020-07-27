import * as React from 'react';
import { OptionType } from "../DropdownList";
export declare type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export interface OptionRendererProps {
    optionRenderer?: (props: OptionProps) => React.ReactElement;
    optionType?: OptionType;
}
export interface OptionSchema {
    label: string;
    value: any;
    icon?: string;
    subInfo?: string;
    optionType?: OptionType;
    selected?: boolean;
    group?: string;
}
export interface OptionTypeProps {
    className: string;
    textClassName: string;
    optionData: OptionSchema;
    selected: boolean;
    index: number;
    menu?: boolean;
    onClick?: () => void;
    onChange?: (event: ChangeEvent) => void;
    updateActiveOption?: (index: number) => void;
}
interface OptionProps extends OptionRendererProps {
    optionData: OptionSchema;
    selected: boolean;
    truncateOption?: boolean;
    checkboxes?: boolean;
    index: number;
    active?: boolean;
    menu?: boolean;
    onClick?: () => void;
    onChange?: (event: ChangeEvent) => void;
    updateActiveOption?: (index: number) => void;
}
declare const Option: (props: OptionProps) => JSX.Element;
export default Option;
