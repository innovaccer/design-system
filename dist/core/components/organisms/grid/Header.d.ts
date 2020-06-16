import * as React from 'react';
import { updateSchemaFn, Schema, Data, onSelectAllFn, GridProps, updateFilterListFn } from './Grid';
export interface ExternalHeaderProps {
    children?: React.ReactNode;
    withSearch?: boolean;
    searchPlaceholder?: string;
}
export declare type updateSearchTermFn = (newSearchTerm: string) => void;
export interface HeaderProps extends ExternalHeaderProps {
    loading: boolean;
    data: Data;
    schema: Schema;
    selectAll?: GridProps['selectAll'];
    totalRecords?: number;
    withCheckbox?: boolean;
    showHead?: boolean;
    updateSchema?: updateSchemaFn;
    filterList?: GridProps['filterList'];
    updateFilterList?: updateFilterListFn;
    onSelectAll?: onSelectAllFn;
    searchTerm?: string;
    updateSearchTerm?: updateSearchTermFn;
}
export declare const Header: (props: HeaderProps) => JSX.Element;
export default Header;
