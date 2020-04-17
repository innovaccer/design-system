import * as React from 'react';
export declare type Shadows = 'light' | 'medium' | 'dark';
export interface CardProps {
    shadow?: Shadows;
    style?: React.CSSProperties;
    children: React.ReactNode;
}
export declare const Card: React.FunctionComponent<CardProps>;
export default Card;
