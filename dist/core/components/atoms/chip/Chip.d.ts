import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { IconType } from "../../../common.type";
export declare type ChipType = 'action' | 'selection' | 'input';
export declare type Name = number | string | object;
export declare type ChipSize = 'regular' | 'small';
export interface ChipProps extends BaseProps {
    label: string | React.ReactElement;
    labelPrefix?: string;
    icon?: string;
    iconType?: IconType;
    size?: ChipSize;
    clearButton?: boolean;
    disabled?: boolean;
    selected?: boolean;
    type: ChipType;
    onClose?: (name: Name) => void;
    onClick?: (name: Name) => void;
    name: Name;
    maxWidth?: string | number;
    role?: React.AriaRole;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    clearButtonAriaLabel?: string;
    tabIndex?: number;
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
