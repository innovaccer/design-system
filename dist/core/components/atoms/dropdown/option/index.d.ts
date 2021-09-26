import * as React from 'react';
import { MetaListProps, IconProps, TextProps } from "../../../../index.type";
import { OptionType } from "../DropdownList";
export declare type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export declare type ClickEvent = React.MouseEvent<HTMLDivElement>;
export interface OptionRendererProps {
    optionRenderer?: (props: OptionProps) => React.ReactElement;
    optionType?: OptionType;
}
export interface OptionSchema extends Record<string, any> {
    label: string;
    value: React.ReactText;
    icon?: string;
    subInfo?: string | MetaListProps;
    optionType?: OptionType;
    selected?: boolean;
    disabled?: boolean;
    group?: string;
}
export interface OptionTypeProps {
    className: string;
    textClassName: string;
    dataTest?: string;
    optionData: OptionSchema;
    selected: boolean;
    appearance: IconProps['appearance'] & TextProps['appearance'];
    index: number;
    onUpdateActiveOption: () => void;
    onClickHandler?: (event: ClickEvent) => void;
    onChangeHandler?: (event: ChangeEvent) => void;
    renderSubInfo: (subInfo: string | MetaListProps) => React.ReactElement;
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
