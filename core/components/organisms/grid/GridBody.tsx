import * as React from 'react';
import { GridRow } from './GridRow';
import { GridState, onSelectFn, Schema, updatePrevPageInfoFunction } from './Grid';
import GridContext from './GridContext';
import styles from '@css/components/grid.module.css';
import { GridProps } from '@/index.type';
import VirtualList from './VirtualList';
import { ProgressBar, Button, Text } from '@/index';

export interface GridBodyProps {
  schema: Schema;
  onSelect: onSelectFn;
  prevPageInfo: GridState['prevPageInfo'];
  updatePrevPageInfo: updatePrevPageInfoFunction;
  virtualRowOptions: GridProps['virtualRowOptions'];
  infiniteScrollOptions: GridProps['infiniteScrollOptions'];
  enableInfiniteScroll?: GridProps['enableInfiniteScroll'];
  onScroll?: GridProps['onScroll'];
  fetchDataOnScroll?: GridProps['fetchDataOnScroll'];
  enableRowVirtualization?: GridProps['enableRowVirtualization'];
}

export const GridBody = (props: GridBodyProps) => {
  const context = React.useContext(GridContext);

  const { data, ref, loading, withPagination, page, pageSize, totalRecords, size, sortingList } = context;
  const listRef = React.useRef<HTMLDivElement | null>(null);

  const {
    schema,
    prevPageInfo,
    updatePrevPageInfo,
    onSelect,
    virtualRowOptions,
    infiniteScrollOptions,
    enableInfiniteScroll,
    onScroll,
    fetchDataOnScroll,
    enableRowVirtualization,
  } = props;

  const { buffer, visibleRows } = virtualRowOptions;

  const [isLoadingMore, setIsLoadingMore] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(2);
  const [hasMoreData, setHasMoreData] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [retryDataFetch, setRetryDataFetch] = React.useState(false);
  const endReached = React.useRef(false);
  const { fetchRowsCount, fetchThreshold, fetchErrorRenderer, retryFetchRenderer } = infiniteScrollOptions;

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

    return () => {
      if (gridBodyEl) {
        updatePrevPageInfo({ page, scrollTop: gridBodyEl.scrollTop });
      }
    };
  }, []);

  // Reset infinite scroll state when sorting changes
  React.useEffect(() => {
    setCurrentPage(2);
    setHasMoreData(true);
    setError(false);
    setIsLoadingMore(false);
    endReached.current = false;
  }, [sortingList]);

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

  const getArrayList = () => {
    if (loading && !data.length) {
      return [...Array(dataLength).map((x) => x)];
    }
    return data;
  };

  const fetchNextRows = React.useCallback(async () => {
    const { fetchRowsCount } = infiniteScrollOptions || {};

    if (fetchDataOnScroll && !isLoadingMore && hasMoreData && !error) {
      setIsLoadingMore(true);
      try {
        const dataList = await fetchDataOnScroll?.({ page: currentPage + 1, rowsCount: fetchRowsCount });
        if (dataList?.length === 0) {
          setHasMoreData(false);
        }
        setCurrentPage((prevPage) => prevPage + 1);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoadingMore(false);
      }
    }
  }, [isLoadingMore, hasMoreData, currentPage, fetchRowsCount, error]);

  const thresholdMapper: Record<typeof fetchThreshold, number> = {
    early: 0.5,
    balanced: 0.75,
    lazy: 0.9,
    'at-end': 0,
  };

  const onScrollHandler = (event: Event, listRef: HTMLElement) => {
    if (enableInfiniteScroll && infiniteScrollOptions && !withPagination) {
      const { fetchThreshold } = infiniteScrollOptions;

      const { scrollTop, scrollHeight, clientHeight } = listRef;

      const hasEndReached = fetchThreshold === 'at-end' && scrollTop + clientHeight >= scrollHeight;
      const hasThresholdReached =
        fetchThreshold !== 'at-end' && scrollTop + clientHeight >= scrollHeight * thresholdMapper[fetchThreshold];

      // Check if user has scrolled to the threshold
      if (hasEndReached || hasThresholdReached) {
        if (!endReached.current) {
          endReached.current = true;
          fetchNextRows();
        }
      } else if (!hasEndReached && !hasThresholdReached) {
        endReached.current = false;
      }
    }

    if (onScroll) {
      onScroll(event);
    }
  };

  const virtualScrollHandler = (event: Event, element: HTMLElement) => {
    const gridHeadEl = ref!.querySelector(`.${styles['Grid-head']}`) as HTMLElement;
    if (gridHeadEl) {
      gridHeadEl.scrollLeft = element.scrollLeft;
    }
    onScrollHandler(event, element);
  };

  const virtualListClassName = styles['Grid-body'] + ' VS-container';

  const memoizedVirtualScroll = React.useMemo(
    () => (
      <VirtualList
        buffer={buffer}
        className={virtualListClassName}
        length={visibleRows}
        minItemHeight={minRowHeight[size]}
        totalLength={dataLength}
        renderItem={renderRow}
        onScroll={virtualScrollHandler}
      />
    ),
    [dataLength, renderRow, minRowHeight, size]
  );

  const handleOnScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (!enableRowVirtualization) {
      onScrollHandler(event.nativeEvent as Event, listRef.current as HTMLElement);
    }
  };

  const retryRowsFetch = async () => {
    setError(false);
    setRetryDataFetch(true);
    setIsLoadingMore(true);

    try {
      const dataList = await fetchDataOnScroll?.({ page: currentPage + 1, rowsCount: fetchRowsCount });
      if (dataList?.length === 0) {
        setHasMoreData(false);
      }
      setCurrentPage((prevPage) => prevPage + 1);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoadingMore(false);
      setRetryDataFetch(false);
    }
  };

  const errorTemplate = () => {
    if (fetchErrorRenderer) {
      return fetchErrorRenderer(retryRowsFetch);
    }

    return (
      <div className="d-flex justify-content-center align-items-center my-5">
        <Text appearance="subtle">Failed to load data. Please try again.</Text>
        <Button size="tiny" icon="refresh" onClick={retryRowsFetch} className="ml-6">
          Try again
        </Button>
      </div>
    );
  };

  const retryFetchTemplate = () => {
    if (retryFetchRenderer) {
      return retryFetchRenderer();
    }

    return (
      <div className="d-flex justify-content-center align-items-center my-5">
        <Text appearance="subtle">Loading data, please wait...</Text>
        <Button size="tiny" icon="refresh" disabled={isLoadingMore} className="ml-6">
          Try again
        </Button>
      </div>
    );
  };

  return (
    <div className={styles['Grid-body']} onScroll={(event) => handleOnScroll(event)} ref={listRef}>
      {enableRowVirtualization
        ? memoizedVirtualScroll
        : getArrayList().map((item, i) => {
            return renderRow(i, item);
          })}
      {error && errorTemplate()}
      {retryDataFetch && retryFetchTemplate()}
      {isLoadingMore && <ProgressBar state="indeterminate" className="position-absolute bottom-0" size="small" />}
    </div>
  );
};

export default GridBody;
