import * as React from 'react';
import { Schema, Pinned, onMenuChangeFn, onFilterChangeFn, updateColumnSchemaFunction, reorderColumnFunction } from './Grid';
import { Checkbox, Placeholder } from '@/index';
import { Cell } from './Cell';
import classNames from 'classnames';
import GridContext from './GridContext';
import { GridProps, CheckboxProps } from '@/index.type';
import { getPinnedSchema } from './columnUtility';

export interface GridHeadProps {
  schema: GridProps['schema'];
  onSelectAll: CheckboxProps['onChange'];
  onMenuChange: onMenuChangeFn;
  onFilterChange: onFilterChangeFn;
  updateColumnSchema: updateColumnSchemaFunction;
  reorderColumn: reorderColumnFunction;
}

export const GridHead = React.memo((props: GridHeadProps) => {
  const context = React.useContext(GridContext);
  const {
    schema,
    onSelectAll,
    onMenuChange,
    onFilterChange,
    updateColumnSchema,
    reorderColumn,
  } = props;

  const {
    withCheckbox,
    loading,
    selectAll,
  } = context;

  const {
    leftPinned,
    rightPinned,
    unpinned
  } = React.useMemo(() => getPinnedSchema(schema), [schema]);

  const renderCheckbox = React.useCallback((show: boolean) => {
    if (!show || !(withCheckbox)) return null;
    return (
      <div className="Grid-cell Grid-cell--head Grid-cell--checkbox">
        {loading ? (
          <Placeholder />
        ) : (
          <Checkbox
            {...selectAll}
            onChange={onSelectAll}
          />
        )
        }
      </div>
    );
  }, [loading, selectAll]);

  const renderSchema = React.useCallback((currSchema: Schema, shouldRenderCheckbox: boolean, pinned?: Pinned) => {
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
            let cI = pinned === 'left' ? index : leftPinned.length + index;
            if (pinned === 'right') cI += unpinned.length;

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
  }, [schema]);

  return (
    <div className="Grid-head">
      <div className="Grid-row Grid-row--head">
        {renderSchema(leftPinned, !!leftPinned.length, 'left')}
        {renderSchema(unpinned, !leftPinned.length && !!unpinned.length)}
        {renderSchema(rightPinned, false, 'right')}
      </div>
    </div>
  );
});

export default GridHead;
