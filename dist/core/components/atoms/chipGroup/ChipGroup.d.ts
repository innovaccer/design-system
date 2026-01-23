import * as React from 'react';
import { ChipProps } from '../chip/Chip';
import { BaseProps } from '@/utils/types';
export type ChipGroupProps = {
    onClose?: (item: ChipProps) => void;
    onClick?: (item: ChipProps) => void;
    list: ChipProps[];
} & BaseProps;
export declare const ChipGroup: {
    (props: ChipGroupProps): React.JSX.Element;
    displayName: string;
};
export default ChipGroup;
