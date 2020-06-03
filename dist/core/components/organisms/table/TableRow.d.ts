/// <reference types="react" />
import { Table } from '@/index';
import { StateData, StateSchema } from './Table';
export interface TableRowProps {
    schema: StateSchema[];
    data: StateData;
    withCheckbox?: boolean;
    _this: Table;
    rowIndex: number;
}
export declare const TableRow: (props: TableRowProps) => JSX.Element;
export default TableRow;
