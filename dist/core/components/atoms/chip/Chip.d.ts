/// <reference types="react" />
import { BaseProps } from "../../../utils/types";
export declare type Type = 'action' | 'selection' | 'input';
export declare type Name = number | string;
export interface ChipProps extends BaseProps {
    label: string;
    icon?: string;
    clearButton?: boolean;
    disabled?: boolean;
    selected?: boolean;
    type: Type;
    onClose?: (name: Name) => void;
    onClick?: (name: Name) => void;
    name: Name;
}
export declare const Chip: {
    (props: ChipProps): JSX.Element;
    displayName: string;
    defaultProps: {
        type: string;
    };
};
export default Chip;
