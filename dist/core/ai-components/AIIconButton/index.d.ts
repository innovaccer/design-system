import * as React from 'react';
import { TIconPosition, TButtonType, TSize2Hierarchy, TBaseHtmlProps } from "../common.type";
export interface AIIconButtonProps extends Omit<TBaseHtmlProps<HTMLButtonElement>, 'size'> {
    icon?: string;
    size?: TSize2Hierarchy;
    position?: TIconPosition;
    type?: TButtonType;
    tooltip?: string;
    disabled?: boolean;
    tabIndex?: number;
    strokeColor?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    'data-test'?: string;
    className?: string;
}
export declare const AIIconButton: {
    (props: AIIconButtonProps): React.JSX.Element;
    defaultProps: {
        size: string;
        position: string;
        strokeColor: string;
    };
};
export default AIIconButton;
