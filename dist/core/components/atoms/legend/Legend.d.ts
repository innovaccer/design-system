import * as React from 'react';
import { IconType } from '@/components/atoms/icon';
import { Appearance as LabelAppearance } from '@/components/atoms/text';
export interface LegendProps {
    icon?: string;
    label: string;
    iconAppearance?: string;
    labelAppearance?: LabelAppearance;
    iconType?: IconType;
    iconSize?: number;
    labelWeight?: 'strong' | 'medium';
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export declare const Legend: {
    (props: LegendProps): JSX.Element;
    displayName: string;
};
export default Legend;
