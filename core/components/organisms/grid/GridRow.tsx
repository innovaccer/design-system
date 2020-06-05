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
        onRowClick(data);
      } else {
        // @ts-ignore
        if (data._link) window.location = data._link;
      }
    }
  };

  const {
    loading
  } = _this.props;

  const {
    init
  } = _this.state;

  return (
    <>
      <div className={rowClasses} onClick={onClickHandler}>
        {withCheckbox && init && (
          <div className="Grid-cell Grid-checkboxCell">
            {loading ? (
              <Placeholder withImage={true} />
            ) : (
                <Checkbox
                  checked={data._selected}
                  onChange={(checked: boolean) => {
                    _this.onSelect(rI, checked);
                  }}
                />
              )
            }
          </div>
        )}
        {schema.map((s, cI) => (
          <Cell
            key={rI * schema.length + cI}
            _this={_this}
            rowIndex={rI}
            colIndex={cI}
            schema={s}
            data={data}
            expandedState={[expanded, setExpanded]}
          />
        ))}
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
