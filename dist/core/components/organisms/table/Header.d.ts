import * as React from 'react';
import { updateSchemaFunction, Schema, Data, onSelectAllFunction, GridProps, updateFilterListFunction, RowData } from '../grid/Grid';
export interface ExternalHeaderProps {
    children?: React.ReactNode;
    withSearch?: boolean;
    searchPlaceholder?: string;
    dynamicColumn?: boolean;
    allowSelectAll?: boolean;
    customSelectionLabel?: string;
    globalActionRenderer?: (data: Data) => React.ReactNode;
    selectionActionRenderer?: (selectedRows: RowData[], selectAll?: boolean) => React.ReactNode;
}
export type updateSearchTermFunction = (newSearchTerm: string) => void;
export interface HeaderProps extends ExternalHeaderProps {
    loading?: boolean;
    error?: boolean;
    data: Data;
    displayData: Data;
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
    selectedRowsRef?: React.MutableRefObject<any>;
    selectedAllRef?: React.MutableRefObject<any>;
    onClearSelection?: () => void;
    onSelectAllRows?: () => void;
    uniqueColumnName?: string;
    totalRowsCount?: number;
    enableInfiniteScroll?: boolean;
}
export declare const Header: {
    (props: HeaderProps): React.JSX.Element;
    defaultProps: {
        schema: never[];
        data: never[];
        searchPlaceholder: string;
        dynamicColumn: boolean;
        showFilters: boolean;
    };
};
export default Header;
