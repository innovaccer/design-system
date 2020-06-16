import * as React from 'react';
export interface OptionRendererProps {
    optionRenderer?: (props: OptionProps) => React.ReactElement;
}
interface OptionData {
    label: string;
    value: any;
    icon?: string;
    subInfo?: string;
}
export interface OptionTypeProps {
    className: string;
    textClassName: string;
    optionData: OptionData;
    selected: boolean;
    onClick?: () => void;
    onChange?: (checked: boolean) => void;
}
interface OptionProps extends OptionRendererProps {
    optionData: OptionData;
    selected: boolean;
    optionIsTop: boolean;
    optionIsBottom: boolean;
    optionsWrap?: boolean;
    index: number;
    optionType: string;
    onClick?: () => void;
    onChange?: (checked: boolean) => void;
}
declare const Option: (props: OptionProps) => JSX.Element;
export default Option;
