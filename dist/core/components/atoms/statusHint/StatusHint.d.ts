import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { MessageAppearance } from '@/common.type';
type StatusHintSize = 'small' | 'regular';
export type StatusHintProps = {
    children: string | number | React.ReactNode;
    size?: StatusHintSize;
    appearance?: MessageAppearance;
    truncateLabel?: boolean;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
} & BaseProps;
export declare const StatusHint: {
    (props: StatusHintProps): React.JSX.Element;
    displayName: string;
};
export default StatusHint;
