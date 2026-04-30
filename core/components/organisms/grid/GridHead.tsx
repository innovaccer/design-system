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
import styles from '@css/components/grid.module.css';

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

  const { withCheckbox, loading, selectAll, gridId } = context;

  const pinnedSchema = schema.filter((s) => !s.hidden && s.pinned);
  const leftPinnedSchema = pinnedSchema.filter((s) => !s.hidden && s.pinned === 'left');
  const rightPinnedSchema = pinnedSchema.filter((s) => !s.hidden && s.pinned === 'right');
  const unpinnedSchema = schema.filter((s) => !s.hidden && !s.pinned);

  const CheckboxClass = classNames({
    [styles['Grid-cell']]: true,
    [styles['Grid-cell--head']]: true,
    [styles['Grid-cell--checkbox']]: true,
  });

  const RowClass = classNames({
    [styles['Grid-row']]: true,
    [styles['Grid-row--head']]: true,
  });

  const hasColumns =
    leftPinnedSchema.length > 0 || unpinnedSchema.length > 0 || rightPinnedSchema.length > 0 || withCheckbox;

  const renderCheckbox = (show: boolean) => {
    if (!show || !withCheckbox) return null;
    return (
      <div className={CheckboxClass} role="columnheader">
        {loading ? (
          <Placeholder className="mr-4" />
        ) : (
          <Checkbox {...selectAll} id={`${gridId}-select-all`} onChange={onSelectAll} aria-label="Select all rows" />
        )}
      </div>
    );
  };

  const renderSchema = (currSchema: Schema, shouldRenderCheckbox: boolean, pinned?: Pinned) => {
    if (currSchema.length) {
      const classes = classNames({
        [styles['Grid-cellGroup']]: true,
        'w-100': !pinned,
        [styles['Grid-cellGroup--pinned']]: pinned,
        [styles[`Grid-cellGroup--pinned-${pinned}`]]: pinned,
        [styles['Grid-cellGroup--main']]: !pinned,
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
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- Grid-head is horizontally scrollable.
    <div className={styles['Grid-head']} role="rowgroup" tabIndex={0} data-test="DesignSystem-GridHead-wrapper">
      <div className={RowClass} role={hasColumns ? 'row' : undefined}>
        {renderSchema(leftPinnedSchema, !!leftPinnedSchema.length, 'left')}
        {renderSchema(unpinnedSchema, !leftPinnedSchema.length && !!unpinnedSchema.length)}
        {renderSchema(rightPinnedSchema, false, 'right')}
      </div>
    </div>
  );
};

export default GridHead;
