import * as React from 'react';
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
export declare type Shadow = 'none' | 'default' | 'light' | 'medium' | 'dark' | 'shadow10' | 'shadow20' | 'shadow30';
export interface CardProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
    shadow?: Shadow;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export default Card;
