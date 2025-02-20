import * as React from 'react';
import { GridRow } from './GridRow';
import { GridState, onSelectFn, Schema, updatePrevPageInfoFunction } from './Grid';
import GridContext from './GridContext';
import styles from '@css/components/grid.module.css';
import { GridProps } from '@/index.type';
import VirtualScroll from './VirtualScroll';
import { ProgressBar } from '@/index';

export interface GridBodyProps {
  schema: Schema;
  onSelect: onSelectFn;
  prevPageInfo: GridState['prevPageInfo'];
  updatePrevPageInfo: updatePrevPageInfoFunction;
  virtualScrollOptions: GridProps['virtualScrollOptions'];
  updateVirtualData: GridProps['updateVirtualData'];
}

export const GridVirtualizedBody = (props: GridBodyProps) => {
  const context = React.useContext(GridContext);

  const { data, ref, loading, error, withPagination, page, pageSize, totalRecords, errorTemplate, size } = context;

  if (!loading && error) {
    return errorTemplate ? (typeof errorTemplate === 'function' ? errorTemplate({}) : errorTemplate) : null;
  }

  const { schema, prevPageInfo, updatePrevPageInfo, onSelect, virtualScrollOptions, updateVirtualData } = props;

  const { preFetchRows, buffer, visibleRows, loadMoreThreshold, onScroll } = virtualScrollOptions;

  const [isLoadingMore, setIsLoadingMore] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [hasMoreData, setHasMoreData] = React.useState(true);

  // const currentPage = React.useRef(1);

  React.useEffect(() => {
    const gridBodyEl = ref!.querySelector('.Grid-body');
    const gridHeadEl = ref!.querySelector('.Grid-head');
    if (gridBodyEl && gridHeadEl) {
      window.requestAnimationFrame(() => {
        if (prevPageInfo.page === page) {
          gridBodyEl.scrollTop = prevPageInfo.scrollTop;
        }
        gridBodyEl.scrollLeft = gridHeadEl.scrollLeft;
      });
    }

    console.log('mounted dd', currentPage, 'hasMoreData', hasMoreData);

    // fetchNextRows();

    return () => {
      if (gridBodyEl) {
        updatePrevPageInfo({ page, scrollTop: gridBodyEl.scrollTop });
      }
    };
  }, []);

  React.useEffect(() => {
    if (data.length === preFetchRows) {
      console.log('>>>bbbb aaaa Fetching next rows', data.length);
      fetchNextRows();
    }
  }, [data]);

  const totalPages = Math.ceil(totalRecords / pageSize);
  const isLastPage = withPagination && page === totalPages;
  const dataLength = isLastPage
    ? totalRecords - (page - 1) * pageSize
    : loading
    ? pageSize
    : withPagination
    ? Math.min(totalRecords, pageSize)
    : totalRecords;

  const renderRow = React.useCallback(
    (rowIndex: number, item?: object) => {
      return (
        <GridRow
          key={rowIndex}
          rowIndex={rowIndex}
          data={!item ? data[rowIndex] : item}
          schema={schema}
          onSelect={onSelect}
        />
      );
    },
    [data, schema, onSelect]
  );

  const minRowHeight: Record<GridProps['size'], number> = {
    comfortable: 40,
    standard: 40,
    compressed: 32,
    tight: 24,
  };

  const fetchNextRows = React.useCallback(async () => {
    console.log('>>>aaa Fetching next rows');
    if (updateVirtualData && !isLoadingMore && hasMoreData) {
      setIsLoadingMore(true);
      try {
        // const dataList = await updateVirtualData({ page: currentPage.current + 1, preFetchRows });
        const dataList = await updateVirtualData({ page: currentPage + 1, preFetchRows });
        if (dataList.length === 0) {
          setHasMoreData(false);
        }
        setCurrentPage((prevPage) => prevPage + 1);
        // currentPage.current = currentPage.current + 1;
      } finally {
        setIsLoadingMore(false);
      }
    }
  }, [updateVirtualData, isLoadingMore, hasMoreData, currentPage, preFetchRows]);

  const memoizedVirtualScroll = React.useMemo(
    () => (
      <VirtualScroll
        className={styles['Grid-body']}
        buffer={buffer}
        length={visibleRows}
        minItemHeight={minRowHeight[size]}
        totalLength={dataLength}
        renderItem={renderRow}
        onScroll={onScroll}
        loadMoreThreshold={loadMoreThreshold}
        fetchNewData={fetchNextRows}
      />
    ),
    [dataLength, renderRow, fetchNextRows, minRowHeight, size]
  );

  return (
    <div className={styles['Grid-body']}>
      {isLoadingMore && <ProgressBar state="indeterminate" className={styles['Grid-progress-bar']} size="small" />}
      {memoizedVirtualScroll}
      {isLoadingMore && <ProgressBar className="position-absolute bottom-0" state="indeterminate" size="small" />}
    </div>
  );
};

export default GridVirtualizedBody;
