/// <reference types="react" />
import { ChipProps, Name } from '../chip/Chip';
export interface ChipGroupProps {
    onClose?: (name: Name) => void;
    onClick?: (name: Name) => void;
    list: ChipProps[];
}
export declare const ChipGroup: {
    (props: ChipGroupProps): JSX.Element;
    displayName: string;
};
export default ChipGroup;
