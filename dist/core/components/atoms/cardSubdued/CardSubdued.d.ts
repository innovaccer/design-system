import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
type Border = 'top' | 'left' | 'right' | 'bottom';
export type CardSubduedProps = {
    border?: Border;
    children?: React.ReactNode;
} & BaseProps & BaseHtmlProps<HTMLDivElement>;
export declare const CardSubdued: React.ForwardRefExoticComponent<{
    border?: Border;
    children?: React.ReactNode;
} & BaseProps & BaseHtmlProps<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default CardSubdued;
