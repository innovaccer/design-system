import * as React from 'react';
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
declare type Border = 'top' | 'left' | 'right' | 'bottom';
export interface CardSubduedProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
    border?: Border;
}
export declare const CardSubdued: React.ForwardRefExoticComponent<CardSubduedProps & React.RefAttributes<HTMLDivElement>>;
export default CardSubdued;
