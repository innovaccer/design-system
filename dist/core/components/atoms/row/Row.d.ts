import * as React from 'react';
import { BaseProps } from '@/utils/types';
declare type RowColumns = '1' | '2' | '3' | '4' | '5' | '6';
export interface RowProps extends BaseProps {
    group?: RowColumns;
    groupXS?: RowColumns;
    groupS?: RowColumns;
    groupM?: RowColumns;
    groupL?: RowColumns;
    groupXL?: RowColumns;
    children?: React.ReactNode;
    className?: string;
}
export declare const Row: {
    (props: RowProps): JSX.Element;
    displayName: string;
};
export default Row;
