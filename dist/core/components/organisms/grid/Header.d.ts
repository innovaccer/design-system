import * as React from 'react';
import { updateDataFn, Schema, Data, onSelectAllFn } from './Grid';
export interface ExternalHeaderProps {
    children?: React.ReactNode;
    withSearch?: boolean;
    searchPlaceholder?: string;
}
export interface HeaderProps extends ExternalHeaderProps {
    data: Data;
    schema: Schema;
    totalRecords?: number;
    withCheckbox?: boolean;
    showHead?: boolean;
    updateData?: updateDataFn;
    onSelectAll?: onSelectAllFn;
}
export declare const Header: (props: HeaderProps) => JSX.Element;
export default Header;
