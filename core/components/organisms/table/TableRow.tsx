import * as React from 'react';
import classNames from 'classnames';
import { Checkbox, Table, Placeholder } from '@/index';
import { StateData, StateSchema } from './Table';
import { TableExtendedRow } from './TableExtendedRow';
import { Cell } from './Cell';

export interface TableRowProps {
  schema: StateSchema[];
  data: StateData;
  withCheckbox?: boolean;
  _this: Table;
  rowIndex: number;
}

export const TableRow = (props: TableRowProps) => {
  const {
    _this,
    schema,
    data,
    withCheckbox,
    rowIndex: rI
  } = props;

  const [expanded, setExpanded] = React.useState<boolean>(false);

  const rowClasses = classNames(
    'Table-row',
    'Table-row--body',
    {
      'Table-row--selected': data._selected
    }
  );

  const onClickHandler = () => {
    const {
      type
    } = _this;

    if (type === 'resource') {
      const {
        onRowClick,
      } = _this.props;

      if (onRowClick) {
        onRowClick(data);
      } else {
        if (data._link) window.location = data._link;
      }
    }
  };

  const {
    loading
  } = _this.state;

  return (
    <>
      <div className={rowClasses} onClick={onClickHandler}>
        {withCheckbox && (
          <div className="Table-cell Table-checkboxCell">
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
        <TableExtendedRow
          _this={_this}
          data={data}
        />
      )}
    </>
  );
};

export default TableRow;
