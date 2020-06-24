import * as React from 'react';
import { ExternalHeaderProps } from '../grid/Header';
import {
  Data,
  Schema,
  GridProps,
  fetchDataFn,
} from '../grid';
import Table, { TableProps } from '../table';

interface SyncProps {
  data: Data;
  schema: Schema;
  loading?: boolean;
  error?: boolean;
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
  onSelect?: TableProps['onSelect'];
  onPageChange?: GridProps['onPageChange'];
}

type SyncListProps = SyncProps & SharedListProps;
type AsyncListProps = AsyncProps & SharedListProps;

export type ListProps = (AsyncListProps & SyncListProps);

export const List = (props: ListProps) => {
  return(
    <Table
      showHead={false}
      {...props}
    />
  );
};

export default List;
