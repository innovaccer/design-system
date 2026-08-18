import * as React from 'react';
import { BaseProps, BaseHtmlProps } from "../../../utils/types";
import { useMultiSelect, useSingleSelect } from "./hooks";
declare type ClickEventType = React.MouseEvent<HTMLDivElement> | React.KeyboardEvent;
export interface SelectionCardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
    children: React.ReactNode;
    id: string;
    cardValue?: object;
    disabled?: boolean;
    onClick?: (event: ClickEventType, id?: string, cardValue?: object) => void;
    overlayZIndex?: number;
    selected?: boolean;
}
export declare const SelectionCard: {
    (props: SelectionCardProps): React.JSX.Element;
    defaultProps: {
        disabled: boolean;
        overlayZIndex: number;
    };
    useMultiSelect: typeof useMultiSelect;
    useSingleSelect: typeof useSingleSelect;
};
export default SelectionCard;
