import * as React from 'react';
export type SegmentedControlValue = string | number;
export type SegmentedControlSize = 'small' | 'regular' | 'large';
export interface SegmentedControlContextValue {
    size: SegmentedControlSize;
    selectedIndex: number;
    onSelect: (index: number, value?: SegmentedControlValue) => void;
    index: number;
    registerButtonRef?: (index: number, node: HTMLButtonElement | null) => void;
    expanded?: boolean;
    isEqualWidth?: boolean;
    disabled?: boolean;
    isTwoSegments?: boolean;
    isConstrained?: boolean;
}
export declare const SegmentedControlContext: React.Context<SegmentedControlContextValue | null>;
