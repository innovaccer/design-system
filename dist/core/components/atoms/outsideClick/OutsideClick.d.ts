import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
export type OutsideClickProps = {
    onOutsideClick: (event: Event) => void;
    children: React.ReactElement<any>;
} & BaseHtmlProps<HTMLDivElement> & BaseProps;
export declare const OutsideClick: React.ForwardRefExoticComponent<{
    onOutsideClick: (event: Event) => void;
    children: React.ReactElement<any>;
} & BaseHtmlProps<HTMLDivElement> & BaseProps & React.RefAttributes<HTMLDivElement>>;
export default OutsideClick;
