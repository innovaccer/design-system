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
}

export const GridBody = (props: GridBodyProps) => {
  const context = React.useContext(GridContext);

  const {
    data,
    ref,
    loading,
    error,
    withPagination,
    page,
    pageSize,
    totalRecords,
    errorTemplate,
    size,
    // updateData,
    updateVirtualData,
  } = context;

  if (!loading && error) {
    return errorTemplate ? (typeof errorTemplate === 'function' ? errorTemplate({}) : errorTemplate) : null;
  }

  const { schema, prevPageInfo, updatePrevPageInfo, onSelect } = props;

  const [isLoadingMore, setIsLoadingMore] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [hasMoreData, setHasMoreData] = React.useState(true);
  // const [scrollTop, setScrollTop] = React.useState(0);

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

  const totalPages = Math.ceil(totalRecords / pageSize);
  const isLastPage = withPagination && page === totalPages;
  const dataLength = isLastPage
    ? totalRecords - (page - 1) * pageSize
    : loading
    ? pageSize
    : withPagination
    ? Math.min(totalRecords, pageSize)
    : totalRecords;

  console.log(
    'ttttt grid body',
    data,
    'dataLength',
    dataLength,
    'totalRecords',
    totalRecords,
    'page',
    page,
    'pageSize',
    pageSize
  );

  const renderRow = React.useCallback(
    (rowIndex: number, item: object) => {
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

  // const renderRow = React.useCallback(
  //   (rowIndex: number, item: object) => {
  //     return (
  //       <GridRow
  //         key={rowIndex}
  //         rowIndex={rowIndex}
  //         data={!item ? data[rowIndex] : item}
  //         schema={schema}
  //         onSelect={onSelect}
  //       />
  //     );
  //   },
  //   [data, schema, onSelect]
  // );

  // const getArrayList = () => {
  //   if (loading && !data.length) {
  //     return [...Array(dataLength).map((x) => x)];
  //   }
  //   return data;
  // };

  const minRowHeight: Record<GridProps['size'], number> = {
    comfortable: 40,
    standard: 40,
    compressed: 32,
    tight: 24,
  };

  // const handleEndReached = async () => {
  //   console.log('<<<end reached>>>', updateVirtualData, isLoadingMore);

  //   if (updateVirtualData && !isLoadingMore && hasMoreData) {
  //     // const gridBodyEl = ref!.querySelector('.Grid-body');
  //     // if (gridBodyEl) {
  //     //   setScrollTop(gridBodyEl.scrollTop);
  //     // }

  //     setIsLoadingMore(true);
  //     try {
  //       const dataList = await updateVirtualData({ page: currentPage + 1, pageSize });
  //       console.log('<<<dataListaa>>>', dataList);
  //       if (dataList.length === 0) {
  //         setHasMoreData(false);
  //       }
  //       setCurrentPage((prevPage) => prevPage + 1);
  //     } finally {
  //       setIsLoadingMore(false);
  //     }
  //   }
  // };

  const handleEndReached = React.useCallback(async () => {
    if (updateVirtualData && !isLoadingMore && hasMoreData) {
      setIsLoadingMore(true);
      try {
        const dataList = await updateVirtualData({ page: currentPage + 1, pageSize });
        if (dataList.length === 0) {
          setHasMoreData(false);
        }
        setCurrentPage((prevPage) => prevPage + 1);
      } finally {
        setIsLoadingMore(false);
      }
    }
  }, [updateVirtualData, isLoadingMore, hasMoreData, currentPage, pageSize]);

  // React.useEffect(() => {
  //   const gridBodyEl = ref!.querySelector('.Grid-body');
  //   if (gridBodyEl) {
  //     gridBodyEl.scrollTop = scrollTop;
  //   }
  // }, [scrollTop, data]);

  const memoizedVirtualScroll = React.useMemo(
    () => (
      <VirtualScroll
        key="virtual-scroll"
        className={styles['Grid-body']}
        buffer={5}
        length={20}
        minItemHeight={minRowHeight[size]}
        totalLength={dataLength}
        renderItem={renderRow}
        onEndReached={handleEndReached}
      />
    ),
    [dataLength, renderRow, handleEndReached, minRowHeight, size]
  );

  return (
    <div className={styles['Grid-body']} ref={ref}>
      {isLoadingMore && <ProgressBar className="position-absolute" state="indeterminate" size="small" />}

      {/* <VirtualScroll
        key="virtual-scroll"
        className={styles['Grid-body']}
        buffer={5}
        length={20}
        minItemHeight={minRowHeight[size]}
        totalLength={dataLength}
        renderItem={renderRow}
        onEndReached={handleEndReached}
        // currentPage={currentPage}
      /> */}
      {memoizedVirtualScroll}

      {isLoadingMore && <ProgressBar className="position-absolute bottom-0" state="indeterminate" size="small" />}
    </div>
  );
};

export default GridBody;
