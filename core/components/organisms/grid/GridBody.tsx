import * as React from 'react';
import { GridRow } from './GridRow';
import { GridState, onSelectFn, Schema, updatePrevPageInfoFunction } from './Grid';
import GridContext from './GridContext';
import styles from '@css/components/grid.module.css';
import { GridProps } from '@/index.type';
import VirtualScroll from './VirtualScroll';

export interface GridBodyProps {
  schema: Schema;
  onSelect: onSelectFn;
  prevPageInfo: GridState['prevPageInfo'];
  updatePrevPageInfo: updatePrevPageInfoFunction;
}

export const GridBody = (props: GridBodyProps) => {
  const context = React.useContext(GridContext);

  const { data, ref, loading, error, withPagination, page, pageSize, totalRecords, errorTemplate, size, updateData } =
    context;

  console.log('ttttt grid body', context);

  if (!loading && error) {
    return errorTemplate ? (typeof errorTemplate === 'function' ? errorTemplate({}) : errorTemplate) : null;
  }

  const { schema, prevPageInfo, updatePrevPageInfo, onSelect } = props;

  const [isLoadingMore, setIsLoadingMore] = React.useState(false);

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

  const renderRow = (rowIndex: number, item: object) => {
    return (
      <GridRow
        key={rowIndex}
        rowIndex={rowIndex}
        data={!item ? data[rowIndex] : item}
        schema={schema}
        onSelect={onSelect}
      />
    );
  };

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

  const handleEndReached = async () => {
    // if (updateData && !isLoadingMore) {
    if (!isLoadingMore) {
      console.log('ttttt update loading more');
      setIsLoadingMore(true);
      // await updateData();
      // setIsLoadingMore(false);
    }
  };

  return (
    <div className={styles['Grid-body']} ref={ref}>
      <VirtualScroll
        className={styles['Grid-body']}
        buffer={7}
        length={20}
        minItemHeight={minRowHeight[size]}
        totalLength={dataLength}
        renderItem={renderRow}
        onEndReached={handleEndReached} // Pass the callback
        isLoadingMore={isLoadingMore} // Pass the loading state
      />
    </div>
  );
};

export default GridBody;
