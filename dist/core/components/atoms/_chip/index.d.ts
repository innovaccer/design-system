/// <reference types="react" />
export interface GenericChipProps {
    label: string;
    icon?: string;
    clearbutton?: boolean;
    disabled?: boolean;
    selected?: boolean;
    className?: string;
    onClose?: (name?: any) => void;
    onClick?: (name?: any) => void;
    name?: any;
}
export declare const GenericChip: (props: GenericChipProps) => JSX.Element;
export default GenericChip;
