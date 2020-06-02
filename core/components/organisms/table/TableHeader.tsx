import * as React from 'react';
import { StateSchema } from './Table';
import { Checkbox, Table, Placeholder } from '@/index';
import { Cell } from './Cell';

export interface TableHeaderProps {
  /**
   * Header Schema
   */
  schema: StateSchema[];
  /**
   * Show Table Header
   */
  show?: boolean;
  /**
   * Allows dragging of column
   */
  draggable?: boolean;
  withCheckbox?: boolean;
  _this: Table;
}

export const TableHeader = (props: TableHeaderProps) => {
  const {
    _this,
    show = true,
    draggable = false,
    schema,
    withCheckbox
  } = props;

  const {
    page,
    selectAll,
    loading
  } = _this.state;

  if (show) {
    return (
      <div className="Table-header">
        <div className="Table-row Table-row--header">
          {withCheckbox && (
            <div className="Table-cell Table-checkboxCell">
              {loading ? (
                <Placeholder withImage={true} />
              ) : (
                  <Checkbox
                    {...selectAll}
                    onChange={(checked: boolean) => _this.onSelectAll(page, checked)}
                  />
                )
              }
            </div>
          )}
          {schema.map((s, index) => (
            <Cell
              key={s.name}
              _this={_this}
              header={true}
              draggable={draggable}
              schema={s}
              colIndex={index}
            />
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default TableHeader;
