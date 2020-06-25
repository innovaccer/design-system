import * as React from 'react';
import { updateSchemaFn, Schema, Data, onSelectAllFn, GridProps, updateFilterListFn } from './Grid';
export interface ExternalHeaderProps {
    children?: React.ReactNode;
    withSearch?: boolean;
    searchPlaceholder?: string;
    dynamicColumn?: boolean;
}
export declare type updateSearchTermFn = (newSearchTerm: string) => void;
export interface HeaderProps extends ExternalHeaderProps {
    loading: boolean;
    error: boolean;
    data: Data;
    schema: Schema;
    selectAll?: GridProps['selectAll'];
    totalRecords?: number;
    withPagination?: boolean;
    withCheckbox?: boolean;
    showHead?: boolean;
    updateSchema?: updateSchemaFn;
    filterList?: GridProps['filterList'];
    updateFilterList?: updateFilterListFn;
    onSelectAll?: onSelectAllFn;
    searchTerm?: string;
    updateSearchTerm?: updateSearchTermFn;
}
export declare const Header: {
    (props: HeaderProps): JSX.Element;
    defaultProps: {
        schema: never[];
        data: never[];
    };
};
export default Header;
