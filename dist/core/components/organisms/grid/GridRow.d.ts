import * as React from 'react';
import { RowData, Schema } from './Grid';
import { GridBodyProps } from './GridBody';
export interface GridRowProps {
    schema: Schema;
    data: RowData;
    rowIndex: number;
    onSelect: GridBodyProps['onSelect'];
    className?: string;
}
export declare const GridRow: {
    (props: GridRowProps): React.JSX.Element;
    defaultProps: {
        data: {};
    };
};
export default GridRow;
