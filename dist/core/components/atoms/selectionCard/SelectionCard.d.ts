import * as React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { useMultiSelect, useSingleSelect } from './hooks';
type ClickEventType = React.MouseEvent<HTMLDivElement> | React.KeyboardEvent;
export type SelectionCardProps = {
    children: React.ReactNode;
    id: string;
    cardValue?: object;
    disabled?: boolean;
    onClick?: (event: ClickEventType, id?: string, cardValue?: object) => void;
    overlayZIndex?: number;
    selected?: boolean;
} & BaseProps & BaseHtmlProps<HTMLDivElement>;
export declare const SelectionCard: {
    (props: SelectionCardProps): React.JSX.Element;
    useMultiSelect: typeof useMultiSelect;
    useSingleSelect: typeof useSingleSelect;
};
export default SelectionCard;
