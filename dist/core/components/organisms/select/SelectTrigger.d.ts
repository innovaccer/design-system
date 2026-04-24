import * as React from 'react';
import { IconType } from "../../../common.type";
import { BaseProps } from "../../../utils/types";
export declare type SelectTriggerSize = 'small' | 'regular';
export interface SelectTriggerProps extends BaseProps {
    'aria-label'?: string;
    'aria-describedby'?: string;
    'aria-errormessage'?: string;
    'aria-invalid'?: boolean | 'true' | 'false' | 'grammar' | 'spelling';
    'aria-controls'?: string;
    triggerSize?: SelectTriggerSize;
    icon?: string;
    iconType?: IconType;
    placeholder?: string;
    inlineLabel?: string;
    disabled?: boolean;
    withClearButton?: boolean;
    onClear?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    setLabel?: (count: number) => string | undefined;
    minWidth?: number | string;
    maxWidth?: number | string;
}
declare const SelectTrigger: {
    (props: SelectTriggerProps): React.JSX.Element;
    defaultProps: {
        triggerSize: string;
        placeholder: string;
        withClearButton: boolean;
    };
};
export default SelectTrigger;
