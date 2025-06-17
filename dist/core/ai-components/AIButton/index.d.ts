import * as React from 'react';
import { TButtonAppearance, TButtonType, TBaseHtmlProps } from '../common.type';
export interface AIButtonProps extends TBaseHtmlProps<HTMLButtonElement> {
    appearance?: TButtonAppearance;
    withSparkle?: boolean;
    type?: TButtonType;
    disabled?: boolean;
    children?: string;
    tabIndex?: number;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    'data-test'?: string;
    className?: string;
}
export declare const AIButton: {
    (props: AIButtonProps): React.JSX.Element;
    defaultProps: {
        type: string;
        withSparkle: boolean;
    };
};
export default AIButton;
