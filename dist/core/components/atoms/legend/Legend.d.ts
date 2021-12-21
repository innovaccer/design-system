import * as React from 'react';
import { TextAppearance } from "../text";
import { BaseProps } from "../../../utils/types";
export interface LegendProps extends BaseProps {
    children: React.ReactText;
    iconAppearance: string;
    labelAppearance?: TextAppearance;
    iconSize: number;
    labelWeight?: 'strong' | 'medium';
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export declare const Legend: {
    (props: LegendProps): JSX.Element;
    displayName: string;
    defaultProps: {
        iconAppearance: string;
        iconSize: number;
    };
};
export default Legend;
