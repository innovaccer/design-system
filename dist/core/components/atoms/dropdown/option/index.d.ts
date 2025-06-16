import * as React from 'react';
import { MetaListProps, IconProps, TextProps } from '@/index.type';
import { OptionType } from '../DropdownList';
import { ChangeEvent, IconType } from '@/common.type';
export type ClickEvent = React.MouseEvent<HTMLDivElement>;
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
    iconType?: IconType;
}
export interface OptionTypeProps {
    className: string;
    textClassName: string;
    dataTest?: string;
    optionData: OptionSchema;
    selected: boolean;
    appearance?: IconProps['appearance'];
    color?: TextProps['color'];
    index: number;
    onUpdateActiveOption: () => void;
    onClickHandler?: (event: ClickEvent) => void;
    onChangeHandler?: (event: ChangeEvent) => void;
    renderSubInfo: (subInfo: string | MetaListProps) => React.ReactElement;
    id?: string;
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
    id?: string;
}
declare const Option: (props: OptionProps) => React.JSX.Element;
export default Option;
