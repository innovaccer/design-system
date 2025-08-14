import * as React from 'react';
import TableComponent, {
  TableProps,
  ErrorTemplateProps,
  FilterPosition,
  SyncTableProps,
  AsyncTableProps,
  defaultProps,
} from './Table';

export type { TableProps, ErrorTemplateProps, FilterPosition, SyncTableProps, AsyncTableProps };
export { defaultProps };

const Table = React.forwardRef<TableComponent, TableProps>((props, ref) => <TableComponent {...props} ref={ref} />);
Table.displayName = 'Table';

export default Table;
export { Table };
