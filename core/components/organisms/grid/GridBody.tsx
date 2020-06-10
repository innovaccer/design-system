import * as React from 'react';
import { GridRow } from './GridRow';
import { Data, Schema } from './Grid';
import { Heading, Grid } from '@/index';

export interface GridBodyProps {
  schema: Schema;
  data: Data;
  withCheckbox?: boolean;
  _this: Grid;
  offset: number;
  inView: number;
  avgRowHeight: number;
}

export const GridBody = (props: GridBodyProps) => {
  const {
    _this,
    schema,
    data,
    withCheckbox,
    offset,
    inView,
    avgRowHeight
  } = props;

  const buffer = 50;

  const {
    loading,
    withPagination,
    pageSize,
    totalRecords,
    errorTemplate
  } = _this.props;

  const {
    page,
  } = _this.state;

  if (!loading && data.length === 0) {
    return errorTemplate ? errorTemplate() : <Heading>Couldn't fetch data</Heading>;
  }

  const totalPages = Math.ceil(totalRecords / pageSize);
  const dummyRows = page === totalPages ? totalRecords - (page - 1) * pageSize : pageSize;
  const rows = loading ? Array.from({ length: dummyRows }, () => ({})) : data.slice(offset, offset + buffer);

  return (
    <div className="Grid-body">
      <div
        className="GridBody-padding"
        style={{
          height: `${offset * avgRowHeight}px`
        }}
      />
      {rows.map((d, rI) => {
        return (
          <GridRow
            key={offset + rI}
            _this={_this}
            rowIndex={offset + rI}
            data={d}
            schema={schema}
            withCheckbox={withCheckbox}
          />
        );
      })}
      <div
        className="GridBody-padding"
        style={{
          height: `${((withPagination ? dummyRows : data.length) - inView - offset - 1) * avgRowHeight}px`
        }}
      />
    </div>
  );
};

export default GridBody;
