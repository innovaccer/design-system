import * as React from 'react';
import { ExternalHeaderProps } from '../grid/Header';
import {
  Data,
  Schema,
  GridProps,
  fetchDataFunction,
} from '../grid';
import Table, { TableProps } from '../table';
import { BaseProps } from '@/utils/types';

interface SyncProps {
  data: Data;
  schema: Schema;
  loading?: boolean;
  error?: boolean;
}

interface AsyncProps {
  fetchData: fetchDataFunction;
}

interface SharedListProps extends BaseProps {
  type?: GridProps['type'];
  size?: GridProps['size'];
  withHeader?: boolean;
  headerOptions?: ExternalHeaderProps;
  withCheckbox?: GridProps['withCheckbox'];
  withPagination?: GridProps['withPagination'];
  paginationType?: GridProps['paginationType'];
  pageSize?: GridProps['pageSize'];
  loaderSchema?: GridProps['loaderSchema'];
  multipleSorting?: boolean;
  sortingList?: GridProps['sortingList'];
  filterList?: GridProps['filterList'];
  errorTemplate?: GridProps['errorTemplate'];
  onRowClick?: GridProps['onRowClick'];
  onSelect?: TableProps['onSelect'];
  onPageChange?: GridProps['onPageChange'];
}

type SyncListProps = SyncProps & SharedListProps;
type AsyncListProps = AsyncProps & SharedListProps;

export type ListProps = (AsyncListProps & SyncListProps);

export const List = (props: ListProps) => {
  return (
    <Table
      showHead={false}
      {...props}
    />
  );
};

export default List;
