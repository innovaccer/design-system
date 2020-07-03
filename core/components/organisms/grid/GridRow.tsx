import * as React from 'react';
import classNames from 'classnames';
import { Checkbox, Grid, Placeholder } from '@/index';
import { RowData, Schema } from './Grid';
import { GridExtendedRow } from './GridExtendedRow';
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

    if (type === 'resource') {
      const {
        onRowClick,
      } = _this.props;

      if (onRowClick) {
        onRowClick(data, rI);
      }
    }
  };

  const {
    loading
  } = _this.props;

  const pinnedSchema = schema.filter(s => s.pinned);
  const unpinnedSchema = schema.filter(s => !s.pinned);

  const renderCheckbox = (show: boolean) => {
    if (!show || !(withCheckbox)) return null;

    return (
      <div className="Grid-cell Grid-cell--body Grid-checkboxCell">
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

  return (
    <>
      <div className={rowClasses} onClick={onClickHandler}>
        {!!pinnedSchema.length && (
          <div className="Grid-cellGroup Grid-cellGroup--pinned">
            {renderCheckbox(!!pinnedSchema.length)}
            {pinnedSchema.map((s, cI) => (
              <Cell
                key={`${rI}-${cI}`}
                _this={_this}
                rowIndex={rI}
                colIndex={cI}
                schema={s}
                data={data}
                expandedState={[expanded, setExpanded]}
              />
            ))}
          </div>
        )}
        <div className="Grid-cellGroup Grid-cellGroup--main">
          {renderCheckbox(!pinnedSchema.length && !!unpinnedSchema.length)}
          {unpinnedSchema.map((s, cI) => (
            <Cell
              key={rI * schema.length + (pinnedSchema.length + cI)}
              _this={_this}
              rowIndex={rI}
              colIndex={cI}
              schema={s}
              data={data}
              expandedState={[expanded, setExpanded]}
            />
          ))}
        </div>
      </div>
      {expanded && (
        <GridExtendedRow
          _this={_this}
          data={data}
        />
      )}
    </>
  );
};

export default GridRow;
