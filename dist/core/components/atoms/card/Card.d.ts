import * as React from 'react';
import { BaseProps } from '@/utils/types';
export declare type Shadow = 'light' | 'medium' | 'dark';
export interface CardProps extends BaseProps {
    shadow?: Shadow;
    style?: React.CSSProperties;
    children: React.ReactNode;
}
export declare const Card: {
    (props: CardProps): JSX.Element;
    displayName: string;
};
export default Card;
