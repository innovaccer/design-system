import * as React from 'react';
export declare type Shadow = 'light' | 'medium' | 'dark';
export interface CardProps {
    shadow?: Shadow;
    style?: React.CSSProperties;
    children: React.ReactNode;
}
export declare const Card: React.FunctionComponent<CardProps>;
export default Card;
