/// <reference types="react" />
import { ChipProps } from '../chip/Chip';
export interface ChipGroupProps {
    onClose?: (name: any) => void;
    onClick?: (name: any) => void;
    list: ChipProps[];
}
export declare const ChipGroup: {
    (props: ChipGroupProps): JSX.Element;
    displayName: string;
};
export default ChipGroup;
