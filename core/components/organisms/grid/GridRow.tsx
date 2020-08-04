import * as React from 'react';
import classNames from 'classnames';
import { Checkbox, Grid, Placeholder } from '@/index';
import { RowData, Schema, Pinned } from './Grid';
import { GridNestedRow } from './GridNestedRow';
import { Cell } from './Cell';

export interface GridRowProps {
  schema: Schema;
  data: RowData;
  withCheckbox?: boolean;
  _this: Grid;
  rowIndex: number;
}

export const GridRow = (props: GridRowProps) => {
  const {
    _this,
    schema,
    data,
    withCheckbox,
    rowIndex: rI
  } = props;

  const rowRef = React.useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const rowClasses = classNames(
    'Grid-row',
    'Grid-row--body',
    {
      'Grid-row--selected': data._selected
    }
  );

  const onClickHandler = () => {
    const {
      type
    } = _this.props;

    if (type === 'resource' && !loading) {
      const {
        onRowClick,
      } = _this.props;

      if (onRowClick) {
        onRowClick(data, rI);
      }
    }
  };

  const {
    loading,
    nestedRows
  } = _this.props;

  const pinnedSchema = schema.filter(s => !s.hidden && s.pinned);
  const leftPinnedSchema = pinnedSchema.filter(s => !s.hidden && s.pinned === 'left');
  const rightPinnedSchema = pinnedSchema.filter(s => !s.hidden && s.pinned === 'right');
  const unpinnedSchema = schema.filter(s => !s.hidden && !s.pinned);

  const renderCheckbox = (show: boolean) => {
    if (!show || !(withCheckbox)) return null;

    return (
      <div className="Grid-cell Grid-cell--body Grid-cell--checkbox" onClick={e => e.stopPropagation()}>
        {loading ? (
          <Placeholder />
        ) : (
            <Checkbox
              checked={!!data._selected}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                _this.onSelect(rI, event.target.checked);
              }}
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
                key={`${rI}-${cI}`}
                _this={_this}
                rowIndex={rI}
                colIndex={cI}
                firstCell={!index}
                schema={s}
                data={data}
                expandedState={[expanded, setExpanded]}
              />
            );
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="Grid-rowWrapper">
      <div className={rowClasses} onClick={onClickHandler} ref={rowRef}>
        {renderSchema(leftPinnedSchema, !!leftPinnedSchema.length, 'left')}
        {renderSchema(unpinnedSchema, !leftPinnedSchema.length && !!unpinnedSchema.length)}
        {renderSchema(rightPinnedSchema, false, 'right')}
      </div>
      {nestedRows && expanded && (
        <div
          style={{
            width: rowRef.current ? rowRef.current.clientWidth : 0
          }}
        >
          <GridNestedRow
            _this={_this}
            data={data}
            rowIndex={rI}
          />
        </div>
      )}
    </div>
  );
};

export default GridRow;
