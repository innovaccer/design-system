/// <reference types="react" />
export declare type Type = 'action' | 'selection' | 'input';
export interface ChipProps {
    label: string;
    icon?: string;
    clearbutton?: boolean;
    disabled?: boolean;
    selected?: boolean;
    type?: Type;
    onClose?: (name?: any) => void;
    onClick?: (name?: any) => void;
    name?: any;
}
export declare const Chip: {
    (props: ChipProps): JSX.Element;
    displayName: string;
};
export default Chip;
