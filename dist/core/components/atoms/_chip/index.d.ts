/// <reference types="react" />
import { Name } from '../chip/Chip';
export interface GenericChipProps {
    label: string;
    icon?: string;
    clearbutton?: boolean;
    disabled?: boolean;
    selected?: boolean;
    className?: string;
    onClose?: (name: Name) => void;
    onClick?: (name: Name) => void;
    name: Name;
}
export declare const GenericChip: (props: GenericChipProps) => JSX.Element;
export default GenericChip;
