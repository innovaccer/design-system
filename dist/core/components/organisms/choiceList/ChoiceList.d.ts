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
}
export declare const ChoiceList: {
    (props: ChoiceListProps): JSX.Element;
    displayName: string;
    defaultProps: {
        alignment: string;
        size: string;
        allowMultiple: boolean;
        disabled: boolean;
    };
};
export default ChoiceList;
