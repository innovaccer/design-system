import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { IconType } from '@/common.type';
export type ChipType = 'action' | 'selection' | 'input';
export type Name = number | string | object;
export type ChipSize = 'regular' | 'small';
export type ChipProps = {
    label: string | React.ReactElement;
    labelPrefix?: string;
    icon?: string;
    iconType?: IconType;
    size?: ChipSize;
    clearButton?: boolean;
    disabled?: boolean;
    selected?: boolean;
    type?: ChipType;
    onClose?: (name: Name) => void;
    onClick?: (name: Name) => void;
    name: Name;
    maxWidth?: string | number;
} & BaseProps;
export declare const Chip: {
    (props: ChipProps): React.JSX.Element;
    displayName: string;
};
export default Chip;
