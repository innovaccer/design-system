import * as React from 'react';
// import VirtualScroll from 'react-dynamic-virtual-scroll';
import { GridRow } from './GridRow';
import { GridState, onSelectFn, Schema, updatePrevPageInfoFunction } from './Grid';
// import { GridProps } from '@/index.type';
import GridContext from './GridContext';
import styles from '@css/components/grid.module.css';

export interface GridBodyProps {
  schema: Schema;
  onSelect: onSelectFn;
  prevPageInfo: GridState['prevPageInfo'];
  updatePrevPageInfo: updatePrevPageInfoFunction;
}

export const GridBody = (props: GridBodyProps) => {
  const context = React.useContext(GridContext);

  const { data, ref, loading, error, withPagination, page, pageSize, totalRecords, errorTemplate, fetchMoreData } =
    context;

  const [isFetching, setIsFetching] = React.useState(false);
  const [gridData, setGridData] = React.useState(data);

  const handleScroll = React.useCallback(() => {
    const gridBodyEl = ref!.querySelector('.Grid-body');
    if (gridBodyEl) {
      const { scrollTop, scrollHeight, clientHeight } = gridBodyEl;
      if (scrollTop + clientHeight >= scrollHeight - 50 && !isFetching && !loading) {
        setIsFetching(true);
        fetchMoreData().then((newData) => {
          setGridData((prevData) => [...prevData, ...newData]);
          setIsFetching(false);
        });
      }
    }
  }, [isFetching, loading, fetchMoreData]);

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

      gridBodyEl.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (gridBodyEl) {
        gridBodyEl.removeEventListener('scroll', handleScroll);
        updatePrevPageInfo({ page, scrollTop: gridBodyEl.scrollTop });
      }
    };
  }, [handleScroll, page, prevPageInfo, ref, updatePrevPageInfo]);

  if (!loading && error) {
    return errorTemplate ? (typeof errorTemplate === 'function' ? errorTemplate({}) : errorTemplate) : null;
  }

  const { schema, onSelect } = props;

  return (
    <div className="Grid-body">
      {gridData.map((row, index) => (
        <GridRow key={index} row={row} schema={schema} onSelect={onSelect} />
      ))}
      {isFetching && (
        <div className={styles.progressBar}>
          <div className={styles.progress}></div>
        </div>
      )}
    </div>
  );
};
