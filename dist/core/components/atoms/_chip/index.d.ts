import * as React from 'react';
import { Name } from "../chip/Chip";
import { BaseProps } from "../../../utils/types";
export interface GenericChipProps extends BaseProps {
    label: string | React.ReactElement;
    icon?: string;
    clearButton?: boolean;
    disabled?: boolean;
    selected?: boolean;
    onClose?: () => void;
    onClick?: () => void;
    name: Name;
}
export declare const GenericChip: {
    (props: GenericChipProps): JSX.Element;
    displayName: string;
};
export default GenericChip;
