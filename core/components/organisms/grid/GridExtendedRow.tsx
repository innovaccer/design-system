import * as React from 'react';
import { Grid } from '@/index';
import { RowData } from './Grid';

export interface GridExtendedRowProps {
  _this: Grid;
  data: RowData;
}

export const GridExtendedRow = (props: GridExtendedRowProps) => {
  const {
    _this,
    data
  } = props;

  const {
    schema: propSchema
  } = _this.props;

  if (data._expanded) {
    const showHead = data._expanded.showHead;
    const schema = data._expanded.schema || propSchema;
    let gridData = data._expanded.data;
    if (!gridData) {
      const {
        _uid,
        _expanded,
        ...rest
      } = data;
      gridData = [rest];
    }

    return (
      <div className="Grid-expandedRow">
        <Grid
          key={'expanedRow'}
          showHead={showHead}
          data={gridData}
          schema={schema}
          totalRecords={gridData.length}
        />
      </div>
    );
  }
  return null;
};

export default GridExtendedRow;
