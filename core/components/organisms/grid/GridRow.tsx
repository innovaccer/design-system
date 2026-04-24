import * as React from 'react';
import classNames from 'classnames';
import { Checkbox, Placeholder } from '@/index';
import isSpaceKey from '@/accessibility/utils/isSpaceKey';
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

  const { type, onRowClick, loading, withCheckbox, nestedRows, checkboxAlignment, showNestedRowTrigger, gridId } =
    context;

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

  const onClickHandler = React.useCallback(() => {
    if (type === 'resource' && !loading) {
      if (onRowClick) {
        onRowClick(data, rI);
      }
    }
  }, [data, rI, type, loading, onRowClick]);

  const onKeyDownHandler = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.target !== e.currentTarget) return;
      if (type === 'resource' && !loading && !data.disabled) {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (onRowClick) onRowClick(data, rI);
        } else if (isSpaceKey(e)) {
          e.preventDefault();
          if (withCheckbox) {
            onSelect(rI, !data._selected);
          } else if (onRowClick) {
            onRowClick(data, rI);
          }
        }
      }
    },
    [data, rI, type, loading, onRowClick, withCheckbox, onSelect]
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

  const rowLabel = React.useMemo(() => {
    const firstTextCol = schema.find((s) => !s.hidden && typeof data[s.name] === 'string' && data[s.name]);
    return firstTextCol ? String(data[firstTextCol.name]) : `Row ${rI + 1}`;
  }, [schema, data, rI]);

  const renderCheckbox = (show: boolean) => {
    if (!show || !withCheckbox) return null;

    const CheckboxClass = classNames(styles['Grid-cell'], styles['Grid-cell--body'], styles['Grid-cell--checkbox'], {
      ['align-items-start']: checkboxAlignment === 'top',
      ['align-items-end']: checkboxAlignment === 'bottom',
    });

    return (
      <div
        className={CheckboxClass}
        role="gridcell"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        data-test="DesignSystem-Grid-cellCheckbox"
      >
        {loading ? (
          <Placeholder className="mr-4" />
        ) : (
          <Checkbox
            id={`${gridId}-select-row-${rI}`}
            checked={!!data._selected}
            aria-label={`Select ${rowLabel}`}
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
        role="row"
        tabIndex={type === 'resource' && !loading && !data.disabled && !!onRowClick ? 0 : -1}
        onClick={onClickHandler}
        onKeyDown={onKeyDownHandler}
        ref={rowRef}
      >
        {renderSchema(leftPinnedSchema, !!leftPinnedSchema.length, 'left')}
        {renderSchema(unpinnedSchema, !leftPinnedSchema.length && !!unpinnedSchema.length)}
        {renderSchema(rightPinnedSchema, false, 'right')}
      </div>
      {nestedRows && expanded && <div className={styles['Grid-nestedRow']}>{nestedRowData}</div>}
    </div>
  );
};

GridRow.defaultProps = {
  data: {},
};

export default GridRow;
