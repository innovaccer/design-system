import * as React from 'react';
export declare type Appearance = 'info' | 'alert' | 'warning' | 'success' | 'default';
export interface StatusHintsProps {
    children: string;
    appearance?: Appearance;
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export declare const StatusHints: {
    (props: StatusHintsProps): JSX.Element;
    displayName: string;
};
export default StatusHints;
