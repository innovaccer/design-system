import * as React from 'react';
// @ts-ignore
import VirtualScroll from 'react-dynamic-virtual-scroll';
import { GridRow } from './GridRow';
import { GridState, onSelectFn, Schema, updatePrevPageInfoFunction } from './Grid';
import { GridProps } from '@/index.type';
import GridContext from './GridContext';

export interface GridBodyProps {
  schema: Schema;
  onSelect: onSelectFn;
  prevPageInfo: GridState['prevPageInfo'];
  updatePrevPageInfo: updatePrevPageInfoFunction;
}

export const GridBody = (props: GridBodyProps) => {
  const context = React.useContext(GridContext);

  const { data, ref, size, loading, error, withPagination, page, pageSize, totalRecords, errorTemplate } = context;

  if (!loading && error) {
    return errorTemplate ? (typeof errorTemplate === 'function' ? errorTemplate({}) : errorTemplate) : null;
  }

  const { schema, prevPageInfo, updatePrevPageInfo, onSelect } = props;

  React.useEffect(() => {
    const gridBodyEl = ref!.querySelector('.Grid-body');
    if (gridBodyEl) {
      window.requestAnimationFrame(() => {
        if (prevPageInfo.page === page) {
          gridBodyEl.scrollTop = prevPageInfo.scrollTop;
        }
      });
    }

    return () => {
      if (gridBodyEl) {
        updatePrevPageInfo({ page, scrollTop: gridBodyEl.scrollTop });
      }
    };
  }, []);

  const minRowHeight: Record<GridProps['size'], number> = {
    comfortable: 40,
    standard: 40,
    compressed: 32,
    tight: 24,
  };

  const totalPages = Math.ceil(totalRecords / pageSize);
  const isLastPage = withPagination && page === totalPages;
  const dataLength = isLastPage
    ? totalRecords - (page - 1) * pageSize
    : loading
    ? pageSize
    : withPagination
    ? Math.min(totalRecords, pageSize)
    : totalRecords;

  const renderItem = (rowIndex: number, item: object) => {
    return <GridRow rowIndex={rowIndex} data={!item ? data[rowIndex] : item} schema={schema} onSelect={onSelect} />;
  };

  return (
    <>
      {!!withPagination ? (
        <div className="Grid-body" data-test="DesignSystem-Grid-body-with-NoPagination">
          {data.map((item, i) => {
            return renderItem(i, item);
          })}
        </div>
      ) : (
        <VirtualScroll
          className="Grid-body"
          minItemHeight={minRowHeight[size]}
          totalLength={dataLength}
          length={20}
          buffer={7}
          renderItem={renderItem}
          data-test="DesignSystem-Grid-body-with-virtual-scroll"
        />
      )}
    </>
  );
};

export default GridBody;
