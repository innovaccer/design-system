import * as React from 'react';
// @ts-ignore
import VirtualScroll from 'react-dynamic-virtual-scroll';
import { GridRow } from './GridRow';
import { Data, Schema } from './Grid';
import { Grid } from '@/index';
import { GridProps } from '@/index.type';

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

  React.useEffect(() => {
    const gridBodyEl = _this.gridRef!.querySelector('.Grid-body');
    if (gridBodyEl) {
      window.requestAnimationFrame(() => {
        if (_this.prevPageInfo.page === page) {
          gridBodyEl.scrollTop = _this.prevPageInfo.scrollTop;
        }
        _this.prevPageInfo = _this.currPageInfo;
      });
    }

    return () => {
      _this.currPageInfo = { page, scrollTop: gridBodyEl!.scrollTop };
    };
  }, []);

  const minRowHeight: Record<GridProps['size'], number> = {
    comfortable: 40,
    standard: 40,
    compressed: 32,
    tight: 24
  };

  const {
    size,
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

  const isLastPage = withPagination && page === totalPages;
  const dataLength = isLastPage
    ? totalRecords - (page - 1) * pageSize
    : loading
      ? pageSize
      : withPagination
        ? Math.min(totalRecords, pageSize)
        : totalRecords;

  const renderItem = (rowIndex: number) => {
    return (
      <GridRow
        _this={_this}
        rowIndex={rowIndex}
        data={data[rowIndex]}
        schema={schema}
        withCheckbox={withCheckbox}
      />
    );
  };

  return (
    <VirtualScroll
      className="Grid-body"
      minItemHeight={minRowHeight[size]}
      totalLength={dataLength}
      length={20}
      buffer={7}
      renderItem={renderItem}
    />
  );
};

export default GridBody;
