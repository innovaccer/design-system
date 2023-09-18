import * as React from 'react';
import { Name } from "../chip/Chip";
import { BaseProps } from "../../../utils/types";
import { FontVariationType } from "../../../common.type";
export interface GenericChipProps extends BaseProps {
    label: string | React.ReactElement;
    labelPrefix?: string;
    icon?: string;
    clearButton?: boolean;
    disabled?: boolean;
    selected?: boolean;
    onClose?: () => void;
    onClick?: () => void;
    iconVariations?: FontVariationType;
    name: Name;
}
export declare const GenericChip: {
    (props: GenericChipProps): JSX.Element;
    displayName: string;
};
export default GenericChip;
