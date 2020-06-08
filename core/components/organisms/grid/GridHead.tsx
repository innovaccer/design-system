import * as React from 'react';
import { Schema } from './Grid';
import { Checkbox, Grid, Placeholder } from '@/index';
import { Cell } from './Cell';

export interface GridHeadProps {
  /**
   * Header Schema
   */
  schema: Schema;
  /**
   * Allows dragging of column
   */
  draggable?: boolean;
  withCheckbox?: boolean;
  _this: Grid;
}

export const GridHead = (props: GridHeadProps) => {
  const {
    _this,
    draggable = false,
    schema,
    withCheckbox
  } = props;

  const {
    loading
  } = _this.props;

  const {
    init,
    selectAll,
  } = _this.state;

  return (
    <div className="Grid-head">
      <div className="Grid-row Grid-row--head">
        {withCheckbox && init && (
          <div className="Grid-cell Grid-checkboxCell">
            {loading ? (
              <Placeholder withImage={true} />
            ) : (
                <Checkbox
                  {...selectAll}
                  onChange={_this.onSelectAll}
                />
              )
            }
          </div>
        )}
        {schema.map((s, index) => (
          <Cell
            key={s.name}
            _this={_this}
            head={true}
            draggable={draggable}
            schema={s}
            colIndex={index}
          />
        ))}
      </div>
    </div>
  );
};

export default GridHead;
