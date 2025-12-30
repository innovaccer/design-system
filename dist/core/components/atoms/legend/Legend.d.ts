import * as React from 'react';
import { TextAppearance } from '@/components/atoms/text';
import { BaseProps } from '@/utils/types';
export type LegendProps = {
    children: string | number;
    iconAppearance?: string;
    labelAppearance?: TextAppearance;
    iconSize?: number;
    labelWeight?: 'strong' | 'medium';
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
} & BaseProps;
export declare const Legend: {
    (props: LegendProps): React.JSX.Element;
    displayName: string;
};
export default Legend;
