import * as React from 'react';
import { BaseContainerProps } from "../../../utils/types";
export declare type Shadow = 'none' | 'light' | 'medium' | 'dark';
export interface CardProps extends BaseContainerProps {
    shadow?: Shadow;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export default Card;
