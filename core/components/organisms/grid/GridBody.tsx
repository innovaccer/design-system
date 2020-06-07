import * as React from 'react';
import { GridRow } from './GridRow';
import { Data, Schema, GridSize } from './Grid';
import { Heading, Grid } from '@/index';

export interface GridBodyProps {
  schema: Schema;
  data: Data;
  withCheckbox?: boolean;
  _this: Grid;
}

export const GridBody = (props: GridBodyProps) => {
  const {
    _this,
    schema,
    data,
    withCheckbox
  } = props;

  const {
    size
  } = _this.props;

  const minRowHeight: Record<GridSize, number> = {
    comfortable: 54,
    standard: 40,
    compressed: 32,
    tight: 24
  };

  const [state, setState] = React.useState({
    offset: 0,
    avgRowHeight: minRowHeight[size],
    inView: 20
  });

  const gridBodyRef = React.useRef<HTMLDivElement>(null);

  const {
    offset,
    avgRowHeight,
    inView
  } = state;

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

  const onScrollHandler = () => {
    if (gridBodyRef.current) {
      const el = gridBodyRef.current;
      const { scrollTop } = el;
      const items = el.querySelectorAll('.Grid-row');

      const newScroll = Math.floor(scrollTop - (offset * avgRowHeight));
      let newInView = 0;
      let currScroll = 0;
      let i = 0;
      while (i < items.length && currScroll + items[i].clientHeight <= el.clientHeight) {
        const rowHeight = items[i].clientHeight;
        currScroll += rowHeight;
        newInView++;
        i++;
      }

      if (newScroll > 0) {
        currScroll = newScroll;
        let newOffset = offset;
        let newAvgHeight = avgRowHeight;
        i = 0;
        while (i < items.length && currScroll >= items[i].clientHeight) {
          const rowHeight = items[i].clientHeight;
          currScroll -= rowHeight;
          newAvgHeight = ((newOffset * newAvgHeight) + (rowHeight)) / (newOffset + 1);
          newOffset++;
          i++;
        }

        newOffset = newOffset < data.length - inView ? newOffset : data.length - inView - 1;
        if (newOffset > offset) {
          setState({
            ...state,
            inView: newInView,
            offset: newOffset,
            avgRowHeight: newAvgHeight,
          });
        }
      } else {
        if (avgRowHeight) {
          const diff = Math.floor(newScroll / avgRowHeight) || -1;
          const newOffset = offset + diff;
          if (newOffset < offset) {
            setState({
              ...state,
              inView: newInView,
              offset: newOffset < 0 ? 0 : newOffset,
            });
          }
        }
      }
    }
  };

  return (
    <div className="Grid-body" ref={gridBodyRef} onScroll={onScrollHandler}>
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
          height: `${((withPagination ? pageSize : data.length) - inView - offset - 1) * avgRowHeight}px`
        }}
      />
    </div>
  );
};

export default GridBody;
