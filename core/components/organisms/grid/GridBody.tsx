import * as React from 'react';
import { GridRow } from './GridRow';
import { GridState, onSelectFn, Schema, updatePrevPageInfoFunction } from './Grid';
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

  const { data, ref, loading, error, page, errorTemplate, fetchMoreData } = context;

  const { prevPageInfo, updatePrevPageInfo } = props;

  const [isFetching, setIsFetching] = React.useState(false);
  const [gridData, setGridData] = React.useState(data);

  const handleScroll = React.useCallback(() => {
    const gridBodyEl = ref!.querySelector('.Grid-body');
    if (gridBodyEl) {
      const { scrollTop, scrollHeight, clientHeight } = gridBodyEl;
      if (scrollTop + clientHeight >= scrollHeight - 50 && !isFetching && !loading) {
        setIsFetching(true);
        fetchMoreData?.('down').then((newData: any) => {
          setGridData((prevData) => [...prevData, ...newData]);
          setIsFetching(false);
        });
      } else if (scrollTop <= 50 && !isFetching && !loading) {
        setIsFetching(true);
        fetchMoreData?.('up').then((newData: any) => {
          setGridData((prevData) => [...newData, ...prevData]);
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
    <div className={styles['Grid-body']}>
      {gridData.map((item, i) => (
        <GridRow key={i} rowIndex={i} data={item} schema={schema} onSelect={onSelect} />
      ))}
      {isFetching && (
        <div className={styles.progressBar}>
          <div className={styles.progress}></div>
        </div>
      )}
    </div>
  );
};

export default GridBody;
