import * as React from 'react';
import { Name } from '../chip/Chip';
import { BaseProps } from '@/utils/types';
import { IconType } from '@/common.type';
export interface GenericChipProps extends BaseProps {
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
    maxWidth: string | number;
}
export declare const GenericChip: {
    (props: GenericChipProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        maxWidth: string;
    };
};
export default GenericChip;
