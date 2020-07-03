/// <reference types="react" />
export declare type Type = 'action' | 'selection' | 'input';
export declare type Name = number | string;
export interface ChipProps {
    label: string;
    icon?: string;
    clearButton?: boolean;
    disabled?: boolean;
    selected?: boolean;
    type?: Type;
    onClose?: (name: Name) => void;
    onClick?: (name: Name) => void;
    name: Name;
}
export declare const Chip: {
    (props: ChipProps): JSX.Element;
    displayName: string;
};
export default Chip;
