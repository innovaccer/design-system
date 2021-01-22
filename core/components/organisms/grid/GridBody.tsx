import * as React from 'react';
import { GridRow } from './GridRow';
import { Data, Schema } from './Grid';
import { Grid } from '@/index';

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
    error,
    withPagination,
    page,
    pageSize,
    totalRecords,
    errorTemplate
  } = _this.props;

  if (!loading && error) {
    return errorTemplate
      ? typeof errorTemplate === 'function' ? errorTemplate({}) : errorTemplate
      : null;
  }

  const totalPages = Math.ceil(totalRecords / pageSize);
  const dummyRows = withPagination && page === totalPages ? totalRecords - (page - 1) * pageSize : pageSize;
  const rows = loading ? Array.from({ length: dummyRows }, () => ({})) : data.slice(offset, offset + buffer);
  const topPadding = Math.max(0, offset * avgRowHeight);
  const bottomPadding = Math.max(0, ((withPagination ? dummyRows : data.length) - inView - offset - 1) * avgRowHeight);

  return (
    <div className="Grid-body">
      {!loading && (
        <div
          className="GridBody-padding"
          style={{
            height: topPadding
          }}
        />
      )}
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
      {!loading && (
        <div
          className="GridBody-padding"
          style={{
            height: bottomPadding
          }}
        />
      )}
    </div>
  );
};

export default GridBody;
