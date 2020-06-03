/// <reference types="react" />
import { StateData, StateSchema } from './Table';
import { Table } from '@/index';
export interface TableBodyProps {
    schema: StateSchema[];
    data: StateData[];
    withCheckbox?: boolean;
    _this: Table;
}
export declare const TableBody: (props: TableBodyProps) => JSX.Element;
export default TableBody;
