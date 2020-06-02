import * as React from 'react';
import { Table } from '@/index';
import { StateData } from './Table';

export interface TableExtendedRowProps {
  _this: Table;
  data: StateData;
}

export const TableExtendedRow = (props: TableExtendedRowProps) => {
  const {
    _this,
    data
  } = props;

  const {
    schema: stateSchema
  } = _this.state;

  if (data._expanded) {
    const showHeader = data._expanded.showHeader;
    const schema = data._expanded.schema || stateSchema;
    let tableData = data._expanded.data;
    if (!tableData) {
      const {
        _uid,
        _expanded,
        ...rest
      } = data;
      tableData = [rest];
    }

    return (
      <div className="Table-expandedRow">
        <Table
          key={'expanedRow'}
          showHeader={showHeader}
          data={tableData}
          schema={schema}
          totalRecords={tableData.length}
        />
      </div>
    );
  }
  return null;
};

export default TableExtendedRow;
