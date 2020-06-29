import * as React from 'react';
import { OptionType } from '../DropdownList';
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
    onClick?: () => void;
    onChange?: (checked: boolean) => void;
    updateActiveOption?: (index: number) => void;
}
interface OptionProps extends OptionRendererProps {
    optionData: OptionSchema;
    selected: boolean;
    optionIsTop: boolean;
    optionIsBottom: boolean;
    optionsWrap?: boolean;
    checkboxes?: boolean;
    index: number;
    active?: boolean;
    menu?: boolean;
    onClick?: () => void;
    onChange?: (checked: boolean) => void;
    updateActiveOption?: (index: number) => void;
}
declare const Option: (props: OptionProps) => JSX.Element;
export default Option;
