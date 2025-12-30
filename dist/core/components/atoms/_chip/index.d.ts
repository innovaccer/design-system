import * as React from 'react';
import { Name } from '../chip/Chip';
import { BaseProps } from '@/utils/types';
import { IconType, TChipSize } from '@/common.type';
export type GenericChipProps = {
    label: string | React.ReactElement;
    labelPrefix?: string;
    icon?: string;
    clearButton?: boolean;
    disabled?: boolean;
    selected?: boolean;
    onClose?: () => void;
    onClick?: () => void;
    iconType?: IconType;
    name: Name;
    maxWidth?: string | number;
    size?: TChipSize;
} & BaseProps;
export declare const GenericChip: {
    (props: GenericChipProps): React.JSX.Element;
    displayName: string;
};
export default GenericChip;
