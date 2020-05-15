import * as React from 'react';
import { Card, Heading, Text, Icon } from '@/index';
import { DropdownProps } from '@/index.type';
import { Cell, Column, Table as BPTable, Utils, SelectionModes } from "@blueprintjs/table";
// import * as BPClasses from '@blueprintjs/table/src/common/classes';

import { ColumnHeaderCell } from './ColumnHeaderCell'

export type Data = Record<string, any>;

export interface Schema {
  name: string;
  displayName: string;
  width: number;
  comparator?: (a: any, b: any) => number;
  pinned?: boolean;
  hidden?: boolean;
  filterList?: DropdownProps['options'];
}

export interface TableProps {
  data: Data[];
  schema: Schema[];
  enableColumnResizing?: boolean;
  enableColumnReordering?: boolean;
  enableColumnMenu?: boolean;
  enableRowIndex?: boolean;
}

interface TableState {
  schema: Schema[];
  data: Data[];
}

interface NameRenderer {
  name: string;
  index?: number;
}

const NameRenderer = (props: NameRenderer) => {
  const {
    name
  } = props;

  return (
    <div className={`Table-headerCell`}>
      <Heading>{name}</Heading>
    </div>
  )
}

interface HeaderMenu {
  index: number;
  _this: Table;
}

function sortColumn(index: number, type: 'asc' | 'desc') {
  const {
    schema,
    data
  } = this.state;

  let newData = data;
  const { comparator } = schema[index];
  if (comparator) {
    newData = data.sort(comparator);
    if (type === 'desc') newData.reverse();
  }

  this.setState({
    data: newData
  });
}

function pinColumn(index: number, type: 'left' | 'right') {
  const schemaUpdate = {
    pinned: type === 'left' ? true : false
  }

  this.updateCellSchema(index, schemaUpdate);
}

function hideColumn(index: number, value: boolean) {
  const schemaUpdate = {
    hidden: value,
  }

  this.updateCellSchema(index, schemaUpdate);
}

const HeaderMenu = (props: HeaderMenu) => {
  const {
    index,
    _this
  } = props;

  const {
    schema
  } = _this.state;

  return (
    <div className="Table-menu">
      <ul className="Table-menuList">
        {schema[index].comparator && (
          <>
            <li className="Table-menuItem" onClick={() => sortColumn.call(_this, index, 'asc')}>
              <Icon name="arrow_downward" />
              <Text>Sort Ascending</Text>
            </li>
            <li className="Table-menuItem" onClick={() => sortColumn.call(_this, index, 'desc')}>
              <Icon name="arrow_upward" />
              <Text>Sort Descending</Text>
            </li>
          </>
        )}
        <li className="Table-menuItem" onClick={() => pinColumn.call(_this, index, 'left')}>
          <Icon name="first_page" />
          <Text>Pin Left</Text>
        </li>
        <li className="Table-menuItem" onClick={() => pinColumn.call(_this, index, 'right')}>
          <Icon name="last_page" />
          <Text>Pin Right</Text>
        </li>
        <li className="Table-menuItem" onClick={() => hideColumn.call(_this, index, true)}>
          <Icon name="cancel" />
          <Text>Hide Column</Text>
        </li>
      </ul>
    </div>
  );
}

const sortPinned = (a: Schema, b: Schema) => {
  return a.pinned && b.pinned ? 0 : a.pinned ? -1 : 1;
}

export class Table extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);

    this.state = {
      schema: props.schema,
      data: props.data
    }
  }

  updateCellSchema = (index: number, schemaUpdate: Partial<Schema>) => {
    const schema = this.state.schema.filter(s => !s.hidden).sort(sortPinned);

    const newSchema = [
      ...schema.slice(0, index),
      {
        ...schema[index],
        ...schemaUpdate
      },
      ...schema.slice(index + 1)
    ];

    this.setState({
      schema: newSchema
    })
  }

  onColumnWidthChanged = (index: number, size: number) => {
    this.updateCellSchema(index, { width: size });
  }

  onColumnsReordered = (oldIndex: number, newIndex: number, length: number) => {
    const schema = this.state.schema.filter(s => !s.hidden).sort(sortPinned);

    this.setState({
      schema: Utils.reorderArray(schema, oldIndex, newIndex, length)
    });
  }

  render() {
    const {
      enableColumnReordering = true,
      enableColumnResizing = true,
      enableRowIndex = false,
      enableColumnMenu = true
    } = this.props;

    const {
      data
    } = this.state;

    const schema = this.state.schema.filter(s => !s.hidden).sort(sortPinned);

    const columnWidths = schema.map(s => s.width);

    return (
      <Card
        shadow="light"
      >
        <BPTable
          className="Table"
          numRows={data.length}
          columnWidths={columnWidths}
          enableColumnResizing={enableColumnResizing}
          onColumnWidthChanged={this.onColumnWidthChanged}
          enableColumnReordering={enableColumnReordering}
          onColumnsReordered={this.onColumnsReordered}
          enableRowHeader={enableRowIndex}
          numFrozenColumns={schema.filter(s => s.pinned).length}
          selectionModes={SelectionModes.ROWS_ONLY}
        >
          {schema.map(s => (
            <Column
              name={s.displayName}
              cellRenderer={(rowIndex: number, columnIndex: number) => (
                <Cell
                  rowIndex={rowIndex}
                  columnIndex={columnIndex}
                  interactive={true}
                  className="Table-cell"
                >
                  {data[rowIndex][s.name]}
                </Cell>
              )}
              columnHeaderCellRenderer={(columnIndex: number) => {
                const attr: Record<string, any> = {};
                if (enableColumnMenu) attr.menuRenderer = (_index?: number) => (<HeaderMenu index={columnIndex} _this={this} />)
                return (
                  <ColumnHeaderCell
                    className="Table-headerCell"
                    index={columnIndex}
                    name={s.displayName}
                    nameRenderer={(name: string, index?: number) => <NameRenderer index={index} name={name} />}
                    {...attr}
                  // menuRenderer={}
                  />
                );
              }}
            />
          ))}
        </BPTable>
      </Card>
    );
  }
}

export default Table;