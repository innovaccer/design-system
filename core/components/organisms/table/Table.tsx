import * as React from 'react';
import { Card, Heading, Text, Icon, Dropdown } from '@/index';
import { DropdownProps } from '@/index.type';
import { Cell, Column, Table as BPTable, Utils, SelectionModes } from "@blueprintjs/table";
// import * as BPClasses from '@blueprintjs/table/src/common/classes';

import { ColumnHeaderCell } from './ColumnHeaderCell'
import Pagination from '@/components/molecules/pagination';

export type Data = Record<string, any>;

export interface Schema {
  name: string;
  displayName: string;
  width: number;
  get?: (a: Data) => any;
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
  withPagination?: boolean;
  page?: number;
  pageSize?: number;
  // onPageChange?: PaginationProps["onPageChange"];
}

interface StateSchema extends Schema {
  sorted?: 'asc' | 'desc'
}

interface TableState {
  schema: StateSchema[];
  data: Data[];
  page: number;
}

interface NameRenderer {
  schema: StateSchema;
}

const NameRenderer = (props: NameRenderer) => {
  const {
    schema
  } = props;

  console.log(schema.sorted);

  return (
    <div className="Table-nameRenderer">
      <Heading>{schema.displayName}</Heading>
      {schema.sorted ? schema.sorted === 'asc' ? (
        <Icon name="expand_more" />
      ) : (
        <Icon name="expand_less" />
      ) : (
        <Icon name="unfold_more" />
      )}
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

  this.updateCellSchema(index, {
    sorted: type
  })
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

function translateData(schema: Schema[], data: Data[]): Data[] {
  const transSchema = schema.filter(s => s.get);
  return data.map(d => {
    const translatedData = transSchema.reduce((out, curr) => {
      out[curr.name] = curr.get(d);
      return out;
    }, d);

    return translatedData;
  })
}

export class Table extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);

    this.state = {
      schema: props.schema,
      data: translateData(props.schema, props.data),
      page: props.page || 1,
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

  onMenuChange = (index: number, selected: any) => {
    switch (selected) {
      case 'sortAsc':
        sortColumn.call(this, index, 'asc');
        break;
      case 'sortDesc':
        sortColumn.call(this, index, 'desc');
        break;
      case 'pinLeft':
        pinColumn.call(this, index, 'left');
        break;
      case 'pinRight':
        pinColumn.call(this, index, 'right');
        break;
      case 'hide':
        hideColumn.call(this, index, true);
        break;
    }
  }

  render() {
    const {
      enableColumnReordering = true,
      enableColumnResizing = true,
      enableRowIndex = false,
      enableColumnMenu = true,
      withPagination = true,
      pageSize = 10
    } = this.props;

    const {
      data,
      page
    } = this.state;

    const schema = this.state.schema.filter(s => !s.hidden).sort(sortPinned);

    const columnWidths = schema.map(s => s.width);

    const totalPages = Math.ceil(data.length / pageSize);
    const numRows = withPagination ? data.length-((page-1)*pageSize) > pageSize ? pageSize : data.length-(page-1)*pageSize : data.length;

    return (
      <Card
        shadow="light"
      >
        <BPTable
          key={page}
          className="Table"
          numRows={numRows}
          // numRows={data.length}
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
              cellRenderer={(rowIndex: number, columnIndex: number) => {
                return (
                  <Cell
                    rowIndex={rowIndex}
                    columnIndex={columnIndex}
                    interactive={true}
                    className="Table-cell"
                  >
                    {withPagination ? data[(page - 1) * pageSize + rowIndex][s.name] : data[rowIndex][s.name]}
                  </Cell>
                );
              }}
              columnHeaderCellRenderer={(columnIndex: number) => {
                const attr: Record<string, any> = {};
                if (enableColumnMenu) {
                  // attr.menuRenderer = (_index?: number) => (<HeaderMenu index={columnIndex} _this={this} />)
                  attr.menuRenderer = (_index?: number) => {
                    const sortOptions = [
                      { label: "Sort Ascending", value: "sortAsc", icon: "arrow_downward" },
                      { label: "Sort Descending", value: "sortDesc", icon: "arrow_upward" },
                    ]
                    let options = [
                      { label: "Pin Left", value: "pinLeft", icon: "first_page" },
                      { label: "Pin Right", value: "pinRight", icon: "last_page" },
                      { label: "Hide Column", value: "hide", icon: "cancel" },
                    ]
                    if (s.comparator) options = [...sortOptions, ...options];
                    return (
                      <Dropdown
                        key={s.name}
                        options={options}
                        dropdownAlign={"left"}
                        onChange={(selected: any) => this.onMenuChange(columnIndex, selected)}
                      />
                    );
                  }
                }
                if (s.filterList) {
                  attr.filterRenderer = (
                    <Dropdown
                      key={s.name}
                      checkboxes={true}
                      options={s.filterList}
                      icon="filter_list"
                      dropdownAlign={"left"}
                    // placeholder={"Filters"}
                    />
                  );
                }
                return (
                  <ColumnHeaderCell
                    className="Table-headerCell"
                    index={columnIndex}
                    name={s.displayName}
                    nameRenderer={(_name: string, _index?: number) => <NameRenderer schema={s} />}
                    {...attr}
                  />
                );
              }}
            />
          ))}
        </BPTable>
        {withPagination && (
          <div className="Table-pagination">
            <Pagination
              type="jump"
              totalPages={totalPages}
              onPageChange={(page: number) => {
                // console.log(page);
                this.setState({
                  page: page
                })
              }}
            />
          </div>
        )}
      </Card>
    );
  }
}

export default Table;