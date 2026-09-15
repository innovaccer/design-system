import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
export type Shadow = 'none' | 'default' | 'light' | 'medium' | 'dark' | 'shadow10' | 'shadow20' | 'shadow30';
export type CardProps = {
    shadow?: Shadow;
    children?: React.ReactNode;
} & BaseProps & BaseHtmlProps<HTMLDivElement>;
export declare const Card: React.ForwardRefExoticComponent<{
    shadow?: Shadow;
    children?: React.ReactNode;
} & BaseProps & BaseHtmlProps<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Card;
