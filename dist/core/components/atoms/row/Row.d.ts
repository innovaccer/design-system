import * as React from 'react';
declare type RowColumns = '1' | '2' | '3' | '4' | '5' | '6';
export interface RowProps {
    group?: RowColumns;
    groupXS?: RowColumns;
    groupS?: RowColumns;
    groupM?: RowColumns;
    groupL?: RowColumns;
    groupXL?: RowColumns;
}
export declare const Row: React.FunctionComponent<RowProps>;
export default Row;
