import * as React from 'react';
import { Card, Heading } from '@/index';
import { Cell, Column, Table as BPTable, Utils, SelectionModes } from "@blueprintjs/table";
// import * as BPClasses from '@blueprintjs/table/src/common/classes';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import '@blueprintjs/table/lib/css/table.css';

import { ColumnHeaderCell } from './ColumnHeaderCell'

type Data = Record<string, any>;

interface Schema {
  name: string;
  displayName: string;
  width: number;
}

export interface TableProps {
  data: Data[];
  schema: Schema[];
  enableColumnResizing?: boolean;
  enableColumnReordering?: boolean;
  enableRowIndex?: boolean;
}

interface TableState {
  schema: Schema[]
}

interface INameRenderer {
  name: string;
  index?: number;
}

const NameRenderer = (props: INameRenderer) => {
  const {
    name
  } = props;

  return (
    <div className={`Table-headerCell`}>
      <Heading>{name}</Heading>
    </div>
  )
}

export class Table extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);

    this.state = {
      schema: props.schema
    }
  }

  updateCellSchema = (index: number, schemaUpdate: Partial<Schema>) => {
    const { schema } = this.state;

    this.setState({
      schema: [
        ...schema.slice(0, index),
        {
          ...schema[index],
          ...schemaUpdate
        },
        ...schema.slice(index + 1)
      ]
    })
  }

  onColumnWidthChanged = (index: number, size: number) => {
    this.updateCellSchema(index, { width: size });
  }

  onColumnsReordered = (oldIndex: number, newIndex: number, length: number) => {
    const { schema } = this.state;

    this.setState({
      schema: Utils.reorderArray(schema, oldIndex, newIndex, length)
    });
  }

  render() {
    const {
      data,
      enableColumnReordering = true,
      enableColumnResizing = true,
      enableRowIndex = false
    } = this.props;

    const {
      schema
    } = this.state;

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
          // numFrozenColumns={1}
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
              columnHeaderCellRenderer={(columnIndex: number) => (
                <ColumnHeaderCell
                  className="Table-headerCell"
                  index={columnIndex}
                  name={s.displayName}
                  nameRenderer={(name: string, index?: number) => <NameRenderer index={index} name={name} />}
                  menuRenderer={(index?: number) => <div key={index} />}
                  menuIcon={"timeline-events"}
                />
              )}
            />
          ))}
        </BPTable>
      </Card>
    );
  }
}

export default Table;