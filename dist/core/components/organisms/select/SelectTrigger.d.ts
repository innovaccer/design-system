import * as React from 'react';
import { IconType } from '@/common.type';
import { BaseProps } from '@/utils/types';
export type SelectTriggerSize = 'small' | 'regular';
export interface SelectTriggerProps extends BaseProps {
    triggerSize?: SelectTriggerSize;
    icon?: string;
    iconType?: IconType;
    placeholder?: string;
    inlineLabel?: string;
    disabled?: boolean;
    withClearButton?: boolean;
    onClear?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    setLabel?: (count: number) => string | undefined;
}
declare const SelectTrigger: {
    (props: SelectTriggerProps): React.JSX.Element;
    displayName: string;
};
export default SelectTrigger;
