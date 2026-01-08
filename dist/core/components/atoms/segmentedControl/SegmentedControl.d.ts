import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { SegmentedControlValue, SegmentedControlSize } from './SegmentedControlContext';
import { SegmentedControlItemProps } from './SegmentedControlItem';
export type { SegmentedControlValue, SegmentedControlSize };
export interface SegmentedControlProps extends BaseProps {
    activeIndex?: number;
    onChange?: (index: number, value?: SegmentedControlValue) => void;
    size?: SegmentedControlSize;
    expanded?: boolean;
    maxWidth?: string | number;
    isEqualWidth?: boolean;
    disabled?: boolean;
    children: React.ReactElement<SegmentedControlItemProps> | React.ReactElement<SegmentedControlItemProps>[];
}
export declare const SegmentedControl: {
    (props: SegmentedControlProps): React.JSX.Element | null;
    displayName: string;
    defaultProps: {
        size: string;
        expanded: boolean;
        maxWidth: string;
        isEqualWidth: boolean;
        disabled: boolean;
    };
    Item: {
        (props: SegmentedControlItemProps): React.JSX.Element | null;
        defaultProps: {
            disabled: boolean;
        };
    };
};
export default SegmentedControl;
