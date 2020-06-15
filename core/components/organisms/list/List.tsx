import * as React from 'react';
import { ExternalHeaderProps } from '../grid/Header';
import {
  Data,
  Schema,
  GridProps,
  fetchDataFn,
  RowData,
} from '../grid';
import Table from '../table';

interface SyncProps {
  data: Data;
  schema: Schema;
}

interface AsyncProps {
  fetchData: fetchDataFn;
}

interface SharedListProps {
  type?: GridProps['type'];
  size?: GridProps['size'];
  withHeader?: boolean;
  headerProps?: ExternalHeaderProps;
  withCheckbox?: GridProps['withCheckbox'];
  withPagination?: GridProps['withPagination'];
  paginationType?: GridProps['paginationType'];
  pageSize?: GridProps['pageSize'];
  loaderSchema?: GridProps['loaderSchema'];
  onRowClick?: GridProps['onRowClick'];
  onSelect?: (rowIndex: number[], selected: boolean, allSelected: RowData[]) => void;
  onPageChange?: GridProps['onPageChange'];
}

type SyncListProps = SyncProps & SharedListProps;
type AsyncListProps = AsyncProps & SharedListProps;

export type ListProps = (AsyncListProps | SyncListProps);

export const List = (props: ListProps) => {
  return(
    <Table
      showHead={false}
      {...props}
    />
  );
};

export default List;
