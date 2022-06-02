import * as React from 'react';
import { updateSchemaFunction, Schema, Data, onSelectAllFunction, GridProps, updateFilterListFunction } from "../grid/Grid";
export interface ExternalHeaderProps {
    children?: React.ReactNode;
    withSearch?: boolean;
    searchPlaceholder?: string;
    dynamicColumn?: boolean;
    allowSelectAll?: boolean;
}
export declare type updateSearchTermFunction = (newSearchTerm: string) => void;
export interface HeaderProps extends ExternalHeaderProps {
    loading?: boolean;
    error?: boolean;
    data: Data;
    schema: Schema;
    selectAll?: GridProps['selectAll'];
    totalRecords: number;
    withPagination?: boolean;
    page: number;
    pageSize: number;
    withCheckbox?: boolean;
    showHead?: boolean;
    updateSchema?: updateSchemaFunction;
    filterList?: GridProps['filterList'];
    showFilters: boolean;
    updateFilterList?: updateFilterListFunction;
    onSelectAll?: onSelectAllFunction;
    searchTerm?: string;
    updateSearchTerm?: updateSearchTermFunction;
}
export declare const Header: {
    (props: HeaderProps): JSX.Element;
    defaultProps: {
        schema: never[];
        data: never[];
        searchPlaceholder: string;
        dynamicColumn: boolean;
        showFilters: boolean;
    };
};
export default Header;
