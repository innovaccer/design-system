import * as React from 'react';
import { Props, TableState } from './interfaces';
export interface TableProps extends Props {
    limit?: number;
    loadingMoreData?: boolean;
}
declare class Table extends React.PureComponent<TableProps, TableState> {
    limit: number;
    constructor(props: TableProps);
    calcTotalPages: () => number;
    getData: () => Record<string, any>[];
    componentDidUpdate(prevProps: TableProps): void;
    onPageChange: (pageNo: number) => void;
    render(): JSX.Element;
}
export default Table;
