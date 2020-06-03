/// <reference types="react" />
import { StateSchema } from './Table';
import { Table } from '@/index';
export interface TableHeaderProps {
    schema: StateSchema[];
    show?: boolean;
    draggable?: boolean;
    withCheckbox?: boolean;
    _this: Table;
}
export declare const TableHeader: (props: TableHeaderProps) => JSX.Element | null;
export default TableHeader;
