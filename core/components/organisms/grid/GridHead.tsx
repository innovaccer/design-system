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

  const pinnedSchema = schema.filter(s => s.pinned);
  const unpinnedSchema = schema.filter(s => !s.pinned);

  const renderCheckbox = (show: boolean) => {
    if (!show || !(withCheckbox && init)) return null;
    return (
      <div className="Grid-cell Grid-cell--head Grid-checkboxCell">
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
    );
  };

  return (
    <div className="Grid-head">
      <div className="Grid-row Grid-row--head">
        {!!pinnedSchema.length && (
          <div className="Grid-cellGroup Grid-cellGroup--pinned">
            {renderCheckbox(!!pinnedSchema.length)}
            {pinnedSchema.map((s, index) => (
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
        )}
        <div className="Grid-cellGroup Grid-cellGroup--main">
          {renderCheckbox(!pinnedSchema.length)}
          {unpinnedSchema.map((s, index) => (
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
    </div>
  );
};

export default GridHead;
