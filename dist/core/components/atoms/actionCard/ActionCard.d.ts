import * as React from 'react';
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
export interface ActionCardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
    children: React.ReactNode;
    disabled?: boolean;
    zIndex?: number;
    onClick?: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent) => void;
}
export declare const ActionCard: {
    (props: ActionCardProps): React.JSX.Element;
    displayName: string;
};
export default ActionCard;
