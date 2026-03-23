import * as React from 'react';
import classNames from 'classnames';
import { Checkbox, Placeholder } from '@/index';
import { RowData, Schema, Pinned } from './Grid';
import { GridNestedRow } from './GridNestedRow';
import { Cell } from './Cell';
import GridContext from './GridContext';
import { GridBodyProps } from './GridBody';
import styles from '@css/components/grid.module.css';

export interface GridRowProps {
  schema: Schema;
  data: RowData;
  rowIndex: number;
  onSelect: GridBodyProps['onSelect'];
  className?: string;
}

export const GridRow = (props: GridRowProps) => {
  const context = React.useContext(GridContext);

  const { type, onRowClick, loading, withCheckbox, nestedRows, checkboxAlignment, showNestedRowTrigger } = context;

  const { schema, data, rowIndex: rI, onSelect, className } = props;

  const { _expandNestedRow } = data;

  const getExpandedState = () => {
    if (!showNestedRowTrigger) {
      return true;
    }
    return _expandNestedRow || false;
  };

  const rowRef = React.useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = React.useState<boolean>(() => getExpandedState());

  React.useEffect(() => {
    if (!showNestedRowTrigger) {
      setExpanded(true);
    } else {
      setExpanded(_expandNestedRow || false);
    }
  }, [_expandNestedRow]);

  const rowClasses = classNames(styles['Grid-row'], styles['Grid-row--body'], {
    [styles['Grid-row--selected']]: data._selected,
    [styles['Grid-row--disabled']]: data.disabled,
    [styles['Grid-row--activated']]: data._activated,
  });

  const isRowClickable = type === 'resource' && !loading && !!onRowClick;

  const onClickHandler = React.useCallback(() => {
    if (isRowClickable) {
      onRowClick!(data, rI);
    }
  }, [data, rI, isRowClickable]);

  const onRowKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (isRowClickable && event.currentTarget === event.target && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        onRowClick!(data, rI);
      }
    },
    [data, rI, isRowClickable]
  );

  const pinnedSchema = schema.filter((s) => !s.hidden && s.pinned);
  const leftPinnedSchema = pinnedSchema.filter((s) => !s.hidden && s.pinned === 'left');
  const rightPinnedSchema = pinnedSchema.filter((s) => !s.hidden && s.pinned === 'right');
  const unpinnedSchema = schema.filter((s) => !s.hidden && !s.pinned);

  const nestedProps = {
    data,
    rowIndex: rI,
    expanded,
  };

  const nestedRowData = GridNestedRow(nestedProps);

  const renderCheckbox = (show: boolean) => {
    if (!show || !withCheckbox) return null;

    const CheckboxClass = classNames(styles['Grid-cell'], styles['Grid-cell--body'], styles['Grid-cell--checkbox'], {
      ['align-items-start']: checkboxAlignment === 'top',
      ['align-items-end']: checkboxAlignment === 'bottom',
    });

    return (
      <div
        className={CheckboxClass}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        data-test="DesignSystem-Grid-cellCheckbox"
        role="gridcell"
        tabIndex={-1}
      >
        {loading ? (
          <Placeholder className="mr-4" />
        ) : (
          <Checkbox
            checked={!!data._selected}
            aria-label={`Select row ${rI + 1}`}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onSelect(rI, event.target.checked);
            }}
          />
        )}
      </div>
    );
  };

  const renderSchema = (currSchema: Schema, shouldRenderCheckbox: boolean, pinned?: Pinned) => {
    if (currSchema.length) {
      const classes = classNames({
        [styles['Grid-cellGroup']]: true,
        [styles['Grid-cellWrapper--pinned']]: pinned,
        [styles[`Grid-cellWrapper--pinned-${pinned}`]]: pinned,
        [styles['Grid-cellGroup--main']]: !pinned,
      });

      const pinnedClasses = classNames({
        'w-100': !pinned,
        'bg-light': pinned,
        [styles['Grid-cellGroup--pinned']]: pinned,
        [styles[`Grid-cellGroup--pinned-${pinned}`]]: pinned,
      });

      return (
        <div className={pinnedClasses}>
          <div className={classes} data-test="DesignSystem-Grid-cellGroup">
            {renderCheckbox(shouldRenderCheckbox)}
            {currSchema.map((s, index) => {
              let cI = pinned === 'left' ? index : leftPinnedSchema.length + index;
              if (pinned === 'right') cI += unpinnedSchema.length;

              return (
                <Cell
                  key={`${rI}-${cI}`}
                  rowIndex={rI}
                  colIndex={cI}
                  firstCell={!index}
                  schema={s}
                  data={data}
                  expandedState={[expanded, setExpanded]}
                  nestedRowData={nestedRowData}
                />
              );
            })}
          </div>
        </div>
      );
    }

    return null;
  };

  const wrapperClasses = classNames(className, {
    [styles['Grid-rowWrapper']]: true,
  });

  return (
    <div className={wrapperClasses} data-test="DesignSystem-Grid-rowWrapper">
      <div
        data-test="DesignSystem-Grid-row"
        className={rowClasses}
        onClick={onClickHandler}
        onKeyDown={onRowKeyDown}
        ref={rowRef}
        role="row"
        tabIndex={isRowClickable ? 0 : undefined}
      >
        {renderSchema(leftPinnedSchema, !!leftPinnedSchema.length, 'left')}
        {renderSchema(unpinnedSchema, !leftPinnedSchema.length && !!unpinnedSchema.length)}
        {renderSchema(rightPinnedSchema, false, 'right')}
      </div>
      {nestedRows && expanded && (
        <div className={styles['Grid-nestedRow']} role="rowgroup">
          {nestedRowData}
        </div>
      )}
    </div>
  );
};

GridRow.defaultProps = {
  data: {},
};

export default GridRow;
