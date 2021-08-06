import * as React from 'react';
import {
  Schema,
  Pinned,
  onMenuChangeFn,
  onFilterChangeFn,
  updateColumnSchemaFunction,
  reorderColumnFunction,
} from './Grid';
import { Checkbox, Placeholder } from '@/index';
import { Cell } from './Cell';
import classNames from 'classnames';
import GridContext from './GridContext';
import { GridProps, CheckboxProps } from '@/index.type';

export interface GridHeadProps {
  schema: GridProps['schema'];
  onSelectAll: CheckboxProps['onChange'];
  onMenuChange: onMenuChangeFn;
  onFilterChange: onFilterChangeFn;
  updateColumnSchema: updateColumnSchemaFunction;
  reorderColumn: reorderColumnFunction;
}

export const GridHead = (props: GridHeadProps) => {
  const context = React.useContext(GridContext);
  const { schema, onSelectAll, onMenuChange, onFilterChange, updateColumnSchema, reorderColumn } = props;

  const { withCheckbox, loading, selectAll } = context;

  const pinnedSchema = schema.filter((s) => !s.hidden && s.pinned);
  const leftPinnedSchema = pinnedSchema.filter((s) => !s.hidden && s.pinned === 'left');
  const rightPinnedSchema = pinnedSchema.filter((s) => !s.hidden && s.pinned === 'right');
  const unpinnedSchema = schema.filter((s) => !s.hidden && !s.pinned);

  const renderCheckbox = (show: boolean) => {
    if (!show || !withCheckbox) return null;
    return (
      <div className="Grid-cell Grid-cell--head Grid-cell--checkbox">
        {loading ? <Placeholder /> : <Checkbox {...selectAll} onChange={onSelectAll} />}
      </div>
    );
  };

  const renderSchema = (currSchema: Schema, shouldRenderCheckbox: boolean, pinned?: Pinned) => {
    if (currSchema.length) {
      const classes = classNames({
        'Grid-cellGroup': true,
        'Grid-cellGroup--pinned': pinned,
        [`Grid-cellGroup--pinned-${pinned}`]: pinned,
        'Grid-cellGroup--main': !pinned,
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
                firstCell={!index}
                colIndex={cI}
                isHead={true}
                schema={s}
                onSelectAll={onSelectAll}
                onMenuChange={onMenuChange}
                onFilterChange={onFilterChange}
                updateColumnSchema={updateColumnSchema}
                reorderColumn={reorderColumn}
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
