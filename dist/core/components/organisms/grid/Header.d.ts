import * as React from 'react';
import { updateDataFn, Schema, Data, onSelectAllFn } from './Grid';
export interface HeaderProps {
    data: Data;
    schema: Schema;
    totalRecords?: number;
    withCheckbox?: boolean;
    withSearch?: boolean;
    showHead?: boolean;
    children?: React.ReactNode;
    updateData?: updateDataFn;
    onSelectAll?: onSelectAllFn;
}
export declare const Header: (props: HeaderProps) => JSX.Element;
export default Header;
