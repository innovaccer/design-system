import * as React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
export type RowProps = BaseProps & BaseHtmlProps<HTMLDivElement>;
export declare const Row: React.ForwardRefExoticComponent<BaseProps & BaseHtmlProps<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Row;
