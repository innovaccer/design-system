/// <reference types="react" />
import { Table } from '@/index';
import { StateData } from './Table';
export interface TableExtendedRowProps {
    _this: Table;
    data: StateData;
}
export declare const TableExtendedRow: (props: TableExtendedRowProps) => JSX.Element | null;
export default TableExtendedRow;
