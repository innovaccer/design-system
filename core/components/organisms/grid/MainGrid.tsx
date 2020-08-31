import * as React from 'react';
import Grid, { GridSize, Schema } from './Grid';
import classNames from 'classnames';
import { GridHead } from './GridHead';
import { GridBody } from './GridBody';
import { BaseProps, extractBaseProps } from '@/utils/types';

interface MainGridProps extends BaseProps {
  _this: Grid;
  schema: Schema;
}

export const MainGrid = (props: MainGridProps) => {
  const {
    _this,
    schema,
    className
  } = props;

  const baseProps = extractBaseProps(props);

  const {
    loading,
    type,
    size,
    showHead,
    draggable,
    withCheckbox,
    data
  } = _this.props;

  const classes = classNames({
    Grid: 'true',
    [`Grid--${type}`]: type,
    [`Grid--${size}`]: size,
  }, className);

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

  const {
    offset,
    avgRowHeight,
    inView
  } = state;

  const onScrollHandler = () => {
    if (!loading) {
      if (_this.gridRef && _this.gridRef) {
        const el = _this.gridRef!.querySelector('.Grid');
        if (el) {
          const { scrollTop } = el;
          const items = el.querySelectorAll('.Grid-body .Grid-row');

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
      }
    }
  };

  return (
    <div
      {...baseProps}
      className={classes}
      onScroll={onScrollHandler}
    >
      {showHead && (
        <GridHead
          key={'GridHead'}
          _this={_this}
          schema={schema}
          draggable={draggable}
          withCheckbox={withCheckbox}
        />
      )}
      <GridBody
        key={'GridBody'}
        _this={_this}
        schema={schema}
        data={data}
        withCheckbox={withCheckbox}
        offset={offset}
        inView={inView}
        avgRowHeight={avgRowHeight}
      />
    </div>
  );
};

export default MainGrid;
