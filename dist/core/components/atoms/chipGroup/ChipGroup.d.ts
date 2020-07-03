/// <reference types="react" />
import { ChipProps, Name } from '../chip/Chip';
import { BaseProps } from '@/utils/types';
export interface ChipGroupProps extends BaseProps {
    onClose?: (name: Name) => void;
    onClick?: (name: Name) => void;
    list: ChipProps[];
}
export declare const ChipGroup: {
    (props: ChipGroupProps): JSX.Element;
    displayName: string;
};
export default ChipGroup;
