import * as React from 'react';
import { Schema, Pinned } from './Grid';
import { Checkbox, Grid, Placeholder } from '@/index';
import { Cell } from './Cell';
import { getSchema } from './utility';
import classNames from 'classnames';

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
    withCheckbox
  } = props;

  const {
    loading,
    selectAll,
  } = _this.props;

  const schema = getSchema(_this);

  const pinnedSchema = schema.filter(s => !s.hidden && s.pinned);
  const leftPinnedSchema = pinnedSchema.filter(s => !s.hidden && s.pinned === 'left');
  const rightPinnedSchema = pinnedSchema.filter(s => !s.hidden && s.pinned === 'right');
  const unpinnedSchema = schema.filter(s => !s.hidden && !s.pinned);

  const renderCheckbox = (show: boolean) => {
    if (!show || !(withCheckbox)) return null;
    return (
      <div className="Grid-cell Grid-cell--head Grid-cell--checkbox">
        {loading ? (
          <Placeholder />
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

  const renderSchema = (currSchema: Schema, shouldRenderCheckbox: boolean, pinned?: Pinned) => {
    if (currSchema.length) {
      const classes = classNames({
        'Grid-cellGroup': true,
        'Grid-cellGroup--pinned': pinned,
        [`Grid-cellGroup--pinned-${pinned}`]: pinned,
        'Grid-cellGroup--main': !pinned
      });

      return (
        <div className={classes}>
          {renderCheckbox(shouldRenderCheckbox)}
          {currSchema.map((s, index) => {
            let cI = pinned === 'left' ? index : leftPinnedSchema.length + index;
            if (pinned === 'right') cI += unpinnedSchema.length;

            return (
              <Cell
                key={`${cI}`}
                _this={_this}
                head={true}
                draggable={draggable}
                schema={s}
                colIndex={cI}
                firstCell={!index}
              />
            );
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="Grid-head">
      <div className="Grid-row Grid-row--head">
        {renderSchema(leftPinnedSchema, !!leftPinnedSchema.length, 'left')}
        {renderSchema(unpinnedSchema, !leftPinnedSchema.length && !!unpinnedSchema.length)}
        {renderSchema(rightPinnedSchema, false, 'right')}
      </div>
    </div>
  );
};

export default GridHead;
