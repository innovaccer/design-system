import * as React from 'react';
import { IconProps } from '@/index.type';
import { IconType } from '@/common.type';
import { BaseProps } from '@/utils/types';
import { SegmentedControlValue } from './SegmentedControlContext';
export interface SegmentedControlItemProps extends BaseProps {
    children?: React.ReactNode;
    label?: SegmentedControlValue;
    icon?: IconProps['name'] | React.ReactNode;
    iconType?: IconType;
    tooltip?: string;
    disabled?: boolean;
    value?: SegmentedControlValue;
}
export declare const SegmentedControlItem: {
    (props: SegmentedControlItemProps): React.JSX.Element | null;
    defaultProps: {
        disabled: boolean;
    };
};
export default SegmentedControlItem;
