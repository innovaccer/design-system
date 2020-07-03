/// <reference types="react" />
import { Name } from '../chip/Chip';
import { BaseProps } from '@/utils/types';
export interface GenericChipProps extends BaseProps {
    label: string;
    icon?: string;
    clearButton?: boolean;
    disabled?: boolean;
    selected?: boolean;
    onClose?: (name: Name) => void;
    onClick?: (name: Name) => void;
    name: Name;
}
export declare const GenericChip: (props: GenericChipProps) => JSX.Element;
export default GenericChip;
