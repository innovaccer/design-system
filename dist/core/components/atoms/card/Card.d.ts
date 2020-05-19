import * as React from 'react';
export declare type Shadow = 'light' | 'medium' | 'dark';
export interface CardProps {
    shadow?: Shadow;
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactNode;
}
export declare const Card: {
    (props: CardProps): JSX.Element;
    displayName: string;
};
export default Card;
