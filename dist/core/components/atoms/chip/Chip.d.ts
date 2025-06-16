import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { IconType } from "../../../common.type";
export declare type ChipType = 'action' | 'selection' | 'input';
export declare type Name = number | string | object;
export interface ChipProps extends BaseProps {
    label: string | React.ReactElement;
    labelPrefix?: string;
    icon?: string;
    iconType?: IconType;
    clearButton?: boolean;
    disabled?: boolean;
    selected?: boolean;
    type: ChipType;
    onClose?: (name: Name) => void;
    onClick?: (name: Name) => void;
    name: Name;
    maxWidth?: string | number;
}
export declare const Chip: {
    (props: ChipProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        type: string;
        maxWidth: string;
    };
};
export default Chip;
