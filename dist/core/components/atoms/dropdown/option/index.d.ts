import * as React from 'react';
import { OptionType } from '../DropdownList';
export interface OptionRendererProps {
    optionRenderer?: (props: OptionProps) => React.ReactElement;
}
interface OptionData {
    label: string;
    value: any;
    icon?: string;
    subInfo?: string;
    optionType?: OptionType | 'WITH_CHECKBOX';
}
export interface OptionTypeProps {
    className: string;
    textClassName: string;
    optionData: OptionData;
    selected: boolean;
    active?: number;
    index: number;
    onClick?: () => void;
    onChange?: (checked: boolean) => void;
    updateActiveOption?: (index: number) => void;
}
interface OptionProps extends OptionRendererProps {
    optionData: OptionData;
    selected: boolean;
    optionIsTop: boolean;
    optionIsBottom: boolean;
    optionsWrap?: boolean;
    checkboxes?: boolean;
    index: number;
    active?: boolean;
    onClick?: () => void;
    onChange?: (checked: boolean) => void;
    updateActiveOption?: (index: number) => void;
}
declare const Option: (props: OptionProps) => JSX.Element;
export default Option;
