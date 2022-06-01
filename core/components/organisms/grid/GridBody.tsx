import * as React from 'react';
import { GridRow } from './GridRow';
import { GridState, onSelectFn, Schema, updatePrevPageInfoFunction } from './Grid';
import GridContext from './GridContext';

export interface GridBodyProps {
  schema: Schema;
  onSelect: onSelectFn;
  prevPageInfo: GridState['prevPageInfo'];
  updatePrevPageInfo: updatePrevPageInfoFunction;
}

export const GridBody = (props: GridBodyProps) => {
  const context = React.useContext(GridContext);

  const { data, ref, loading, error, page, errorTemplate } = context;

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

  return (
    <>
      <div className="Grid-body">
        {data.map((item, i) => {
          return renderRow(i, item);
        })}
      </div>
    </>
  );
};

export default GridBody;
