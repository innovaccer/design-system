import * as React from 'react';
import { Table } from '@/index';
import { TableProps } from '@/index.type';
import { defaultProps, SyncTableProps, AsyncTableProps } from '@/components/organisms/table';

export type ListProps = Omit<TableProps, 'showHead' | 'draggable' | 'showMenu' | 'headCellTooltip'>;
export type SyncListProps = Omit<SyncTableProps, 'showHead' | 'draggable' | 'showMenu' | 'headCellTooltip'>;
export type AsyncListProps = Omit<AsyncTableProps, 'showHead' | 'draggable' | 'showMenu' | 'headCellTooltip'>;

/**
 * **`List` is a pattern of `Table` with no Head Cells.**
 *
 * Please refer to stories of Table for examples. Simply replace `Table` with `List` to use it.
 */
export const List = (props: ListProps) => {
  return (
    <Table
      {...props}
      showHead={false}
    />
  );
};

List.defaultProps = defaultProps;

export default List;
