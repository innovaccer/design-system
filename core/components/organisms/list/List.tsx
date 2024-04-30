import * as React from 'react';
import { Table } from '@/index';
import { TableProps } from '@/index.type';
import { defaultProps, SyncTableProps, AsyncTableProps } from '@/components/organisms/table';

type ExcludeTypes = 'showHead' | 'draggable' | 'showMenu' | 'headCellTooltip' | 'filterPosition';

export type ListProps = Omit<TableProps, ExcludeTypes>;
export type SyncListProps = Omit<SyncTableProps, ExcludeTypes>;
export type AsyncListProps = Omit<AsyncTableProps, ExcludeTypes>;

/**
 * List component has been deprecated, please use [Listbox](https://mds.innovaccer.com/?path=/docs/components-listbox-all--all) component instead.
 *
 * **`List` is a pattern of `Table` with no Head Cells.**
 *
 * Please refer to stories of Table for examples. Simply replace `Table` with `List` to use it.
 */
export const List = (props: ListProps) => {
  return <Table {...props} showHead={false} filterPosition={'HEADER'} />;
};

List.defaultProps = defaultProps;

export default List;
