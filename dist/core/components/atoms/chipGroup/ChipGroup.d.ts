import * as React from 'react';
import { ChipProps } from "../chip/Chip";
import { BaseProps } from "../../../utils/types";
export interface ChipGroupProps extends BaseProps {
    onClose?: (item: ChipProps) => void;
    onClick?: (item: ChipProps) => void;
    list: ChipProps[];
}
export declare const ChipGroup: {
    (props: ChipGroupProps): React.JSX.Element;
    displayName: string;
};
export default ChipGroup;
