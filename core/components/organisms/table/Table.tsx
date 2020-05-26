import * as React from 'react';
import classNames from 'classnames';
import { Button, Checkbox, Dropdown, Icon, Heading, Pagination, Placeholder, PlaceholderParagraph } from '@/index';
import { IconProps, InputProps, DropdownProps, PaginationProps, StatusHintsProps } from '@/index.type';
import TableCell, { TableCellProps } from './TableCell';

export type SortType = 'asc' | 'desc';
export type Alignment = 'left' | 'right' | 'center';
export type SortFn = (a: Data, b: Data) => -1 | 0 | 1;
export type Filter = any[];

export interface FetchDataOptions {
  page?: number;
  pageSize?: number;
  filterList?: Record<CellSchema['name'], Filter>;
  sortingList?: TableState['sortingList'];
}

export type fetchDataFn = (options: FetchDataOptions) => Promise<{
  totalRecords: number,
  data: Data[],
  schema: CellSchema[]
}>;

export type updateDataFn = (options: FetchDataOptions) => void;
export type updateSelectAllFn = (attr: TableState['selectAll']) => void;
export type updateCellSchemaFn = (name: CellSchema['name'], schemaUpdate: Partial<StateSchema>) => void;
export type updateRowDataFn = (rowIndexes: number[], dataUpdate: Partial<StateData>) => void;
export type updateReorderHighlighterFn = (dim: TableState['reorderHighlighter']) => void;
export type sortDataFn = (sortFn: SortFn, type: SortType) => void;
export type reorderSchemaFn = (from: string, to: string) => void;
export type onSelectFn = (rowIndex: number, selected: boolean) => void;
export type onSelectAllFn = (page: number, selected: boolean) => void;
export type onFilterChangeFn = (data: Data, filters: Filter) => boolean;
export type onRowClickFn = (data: Data) => void;

export type CellSchema = {
  /**
   * Key value of `data` object(to be used as default value of Cell)
   */
  name: string;
  /**
   * Header name
   */
  displayName: string;
  /**
   * Show left separator
   */
  resize?: boolean;
  /**
   * Sorting Function
   */
  sortFn?: SortFn;
  /**
   * Width of the column
   */
  width: number;
  /**
   * Show left separator
   */
  separator?: boolean;
  /**
   * Pinned to left
   */
  pinned?: boolean;
  /**
   * Selected
   */
  selected?: boolean;
  /**
   * Hidden
   */
  hidden?: boolean;
  /**
   * Filter list
   */
  filters?: DropdownProps['options'];
  /**
   * Callback onFilterChange
   */
  onFilterChange?: onFilterChangeFn;
  /**
   * Translate cell data
   */
  translate?: (data: Data) => Data,
  /**
   * Custom cell renderer
   */
  cellTemplate?: (props: TableCellProps) => React.ReactElement;
  /**
   * Alignment of cell content
   */
  align?: Alignment;
  /**
   * Appearance of `Avatar`
   */
  avatar?: boolean;
  /**
   * Appearance of `StatusHint`
   */
  status?: boolean;
  /**
   * Material icon name
   */
  icon?: IconProps['name'];
  /**
   * Image src
   */
  image?: string;
  dropdown?: DropdownProps;
  input?: InputProps;
};

export type Data = Record<string, any>;

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

export interface TableBodyProps {
  schema: StateSchema[];
  data: StateData[];
  withCheckbox?: boolean;
  _this: Table;
}

export interface TableRowProps {
  schema: StateSchema[];
  data: StateData;
  withCheckbox?: boolean;
  _this: Table;
  rowIndex: number;
}

export interface TableExtendRowProps {
  _this: Table;
  data: StateData;
}

export type TableSize = 'comfortable' | 'standard' | 'compressed' | 'tight';
export type TableType = 'resource' | 'data';

export interface TableProps {
  /**
   * Schema used to render `loading` state
   */
  loaderSchema?: CellSchema[];
  /**
   * Data object
   */
  data: Data[];
  /**
   * Callback to be called for updated data
   */
  updateData?: updateDataFn;
  /**
   * Schema used to render `data` object
   */
  schema: CellSchema[];
  /**
   * Total records in table
   */
  totalRecords: number;
  /**
   * Loading state of Table
   */
  loading?: boolean;
  /**
   * Shows table header
   */
  showHeader?: boolean;
  /**
   * Shows menu in header cell
   */
  showMenu?: boolean;
  /**
   * Allows dragging of column
   */
  draggable?: boolean;
  /**
   * Shows pagination component
   */
  withPagination?: boolean;
  /**
   * Number of rows on a page
   */
  pageSize?: number;
  /**
   * Pagination Type
   */
  paginationType?: PaginationProps['type'];
  /**
   * On Page Change callback
   */
  onPageChange?: PaginationProps['onPageChange'];
  /**
   * Shows checkbox in the left most column
   */
  withCheckbox?: boolean;
  /**
   * Callback on row select
   */
  onSelect?: onSelectFn;
  /**
   * Callback on column header select
   */
  onSelectAll?: onSelectAllFn;
  /**
   * Error Template
   */
  errorTemplate?: () => React.ReactElement;
  /**
   * Controls spacing
   */
  size?: TableSize;
  /**
   * Callback on Row click in case of Resource Table
   */
  onRowClick?: onRowClickFn;
  /**
   * Table type
   */
  type?: TableType;
  /**
   * Appearance to be mapped for status hints
   */
  statusMapper?: (value: any) => StatusHintsProps['appearance'];
}

export type StateSchema = CellSchema;

export type StateData = Data & {
  _selected?: boolean;
  _expanded?: {
    schema: CellSchema[],
    data?: Data[],
    showHeader?: boolean
  }
};

export interface TableState {
  init: boolean;
  schema: StateSchema[];
  data: StateData[];
  reorderHighlighter?: number;
  page: number;
  selectAll?: {
    checked: boolean,
    indeterminate: boolean
  };
  loading: boolean;
  sortingList: {
    name: StateSchema['name'],
    type: SortType
  }[];
}

export interface SharedCellProps {
  _this: Table;
  schema: StateSchema;
}

export type HeaderCellProps = SharedCellProps & {
  colIndex: number;
  draggable: boolean;
};

export type BodyCellProps = SharedCellProps & {
  data: StateData;
  rowIndex: number;
  colIndex: number;
  expandedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
};

export type CellProps = (HeaderCellProps | BodyCellProps) & {
  header?: boolean;
};

const resizeCol = (_this: Table, name: string, el: HTMLDivElement | null) => {
  function resize(ev: MouseEvent) {
    ev.preventDefault();
    _this.updateCellSchema(name, {
      // @ts-ignore
      width: ev.pageX - el.getClientRects()[0].x
    });
  }

  window.addEventListener('mousemove', resize);
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', resize);
  });
};

const reorderCol = (_this: Table, name: string, el: HTMLDivElement | null) => {
  const from = name;
  let to: string;

  function reorder(ev: MouseEvent) {
    ev.preventDefault();
    const index = _this.state.schema.findIndex(s => s.name === name);
    const cellType = _this.state.schema[index].pinned ? 'pinned' : 'main';
    const columns = _this.tableRef.current!.querySelectorAll(`.Table--${cellType} .Table-header .Table-cell.Table-cell--header`);
    if (el) {
      columns.forEach(c => {
        const { x, width } = c.getClientRects()[0];
        if (c.contains(ev.target as Node)) {
          const { x: currX } = el.getClientRects()[0];
          // @ts-ignore
          let left = c.offsetLeft;
          if (currX < x) left += width;
          _this.updateReorderHighlighter(left);
          // @ts-ignore
          to = c.dataset.name;
        }
      });
    }
  }

  function stopReorder() {
    window.removeEventListener('mousemove', reorder);
    window.removeEventListener('mouseup', stopReorder);
    _this.updateCellSchema(name, { selected: false });
    _this.updateReorderHighlighter(undefined);
    if (to && from !== to) _this.reorderSchema(from, to);
  }

  _this.updateCellSchema(name, { selected: true });
  window.addEventListener('mousemove', reorder);
  window.addEventListener('mouseup', stopReorder);
};

function sortColumn(this: Table, name: StateSchema['name'], type: 'asc' | 'desc') {
  let {
    sortingList
  } = this.state;

  const index = sortingList.findIndex(l => l.name === name);
  if (index === -1) {
    sortingList.push({ name, type });
  } else {
    sortingList = [
      ...sortingList.slice(0, index),
      ...sortingList.slice(index + 1),
      { name, type }
    ];
  }

  this.updateSortedList(sortingList);
}

function pinColumn(this: Table, name: StateSchema['name'], type: 'left' | 'right') {
  const schemaUpdate = {
    pinned: type === 'left' ? true : false
  };

  this.updateCellSchema(name, schemaUpdate);
}

function hideColumn(this: Table, name: StateSchema['name'], value: boolean) {
  const schemaUpdate = {
    hidden: value,
  };

  this.updateCellSchema(name, schemaUpdate);
}

const HeaderCell = (props: HeaderCellProps) => {
  const {
    _this,
    schema,
    draggable,
  } = props;

  const {
    init,
    loading,
    sortingList,
  } = _this.state;

  const {
    showMenu
  } = _this;

  const listIndex = sortingList.findIndex(l => l.name === schema.name);
  const sorted = listIndex !== -1 ? sortingList[listIndex].type : null;

  const el = React.createRef<HTMLDivElement>();

  const sortOptions = [
    { label: 'Sort Ascending', value: 'sortAsc', icon: 'arrow_downward' },
    { label: 'Sort Descending', value: 'sortDesc', icon: 'arrow_upward' },
  ];
  let options = [
    { label: 'Pin Left', value: 'pinLeft', icon: 'first_page' },
    { label: 'Pin Right', value: 'pinRight', icon: 'last_page' },
    { label: 'Hide Column', value: 'hide', icon: 'cancel' },
  ];
  if (schema.sortFn) options = [...sortOptions, ...options];

  const classes = classNames({
    'Table-headerCell': true,
    'Table-headerCell--draggable': draggable
  });

  return (
    <div
      key={schema.name}
      className={classes}
      ref={el}
    >
      <div
        className="Table-cellContent"
        onMouseDown={() => {
          if (draggable) reorderCol(_this, schema.name, el.current);
        }}
      >
        {loading && !init ? (
          <Placeholder style={{ flexGrow: 1 }}>
            <PlaceholderParagraph length="medium" />
          </Placeholder>
        ) : (
            <>
              <Heading>{schema.displayName}</Heading>
              {schema.sortFn && (
                <div className="Table-sortingIcons">
                  {sorted ? sorted === 'asc' ? (
                    <Icon name="arrow_downward" />
                  ) : (
                      <Icon name="arrow_upward" />
                    ) : (
                      <Icon name="unfold_more" />
                    )
                  }
                </div>
              )}
            </>
          )
        }
      </div>
      {schema.filters && (
        <>
          {loading && !init ? (
            <Placeholder withImage={true} />
          ) : (
              <Dropdown
                menu={true}
                buttonAppearance={'transparent'}
                showApplyButton={true}
                checkboxes={true}
                options={schema.filters}
                icon={'filter_list'}
                dropdownAlign={'left'}
                onChange={(selected: any) => _this.onFilterChange(schema.name, selected)}
              />
            )
          }
        </>
      )}
      {showMenu && (
        <>
          {loading && !init ? (
            <Placeholder withImage={true} />
          ) : (
              <Dropdown
                key={schema.name}
                menu={true}
                buttonAppearance={'transparent'}
                options={options}
                dropdownAlign={'left'}
                onChange={(selected: any) => _this.onMenuChange(schema.name, selected)}
              />
            )
          }
        </>
      )}
      {schema.resize && (
        <span className="Table-cellResize" onMouseDown={() => resizeCol(_this, schema.name, el.current)} />
      )}
    </div>
  );
};

const BodyCell = (props: BodyCellProps) => {
  const {
    _this,
    data,
    schema,
    expandedState,
    rowIndex,
    colIndex
  } = props;

  const {
    loading
  } = _this.state;

  const {
    size
  } = _this;

  const {
    statusMapper
  } = _this.props;

  const [expanded, setExpanded] = expandedState;

  return (
    <div className="Table-cellContent">
      {colIndex === 0 && data._expanded && !schema.pinned && (
        <Button
          appearance={'transparent'}
          icon={expanded ? 'expand_less' : 'expand_more'}
          onClick={() => setExpanded(!expanded)}
        />
      )}
      <TableCell
        size={size}
        rowIndex={rowIndex}
        schema={schema}
        data={data}
        loading={loading}
        statusMapper={statusMapper}
      />
    </div>
  );
};

const Cell = (props: CellProps) => {
  const {
    _this,
    header,
    colIndex,
    schema,
    // @ts-ignore
    expandedState,
    // @ts-ignore
    draggable,
    // @ts-ignore
    data,
    // @ts-ignore
    rowIndex,
  } = props;

  const {
    withCheckbox
  } = _this.props;

  const cellClass = classNames({
    'Table-cell': true,
    'Table-cell--header': header,
    'Table-cell--body': !header,
    'Table-cell--withSeparator': header ? !(withCheckbox && colIndex === 0) : schema.separator,
    'Table-cell--selected': schema.selected,
  });

  if (schema.hidden) return null;

  return (
    <div
      className={cellClass}
      data-name={schema.name}
      style={{
        width: schema.width
      }}
    >
      {header ? (
        <HeaderCell
          _this={_this}
          draggable={draggable}
          colIndex={colIndex}
          schema={schema}
        />
      ) : (
          <BodyCell
            _this={_this}
            rowIndex={rowIndex}
            colIndex={colIndex}
            data={data}
            schema={schema}
            expandedState={expandedState}
          />
        )}
    </div>
  );
};

const TableExtendedRow = (props: TableExtendRowProps) => {
  const {
    _this,
    data
  } = props;

  const {
    schema: stateSchema
  } = _this.state;

  if (data._expanded) {
    const showHeader = data._expanded.showHeader;
    const schema = data._expanded.schema || stateSchema;
    let tableData = data._expanded.data;
    if (!tableData) {
      const {
        _uid,
        _expanded,
        ...rest
      } = data;
      tableData = [rest];
    }

    return (
      <div className="Table-expandedRow">
        <Table
          key={'expanedRow'}
          showHeader={showHeader}
          data={tableData}
          schema={schema}
          totalRecords={tableData.length}
        />
      </div>
    );
  }
  return null;
};

const TableRow = (props: TableRowProps) => {
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

const TableHeader = (props: TableHeaderProps) => {
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

const TableBody = (props: TableBodyProps) => {
  const {
    _this,
    schema,
    data,
    withCheckbox
  } = props;

  const {
    pageSize
  } = _this;

  const {
    totalRecords,
    errorTemplate
  } = _this.props;

  const {
    page,
    loading,
  } = _this.state;

  if (!loading && data.length === 0) {
    return errorTemplate ? errorTemplate() : <Heading>Couldn't fetch data</Heading>;
  }

  const totalPages = Math.ceil(totalRecords / pageSize);
  const dummyRows = page === totalPages ? totalRecords - (page - 1) * pageSize : pageSize;
  const rows = loading ? Array.from({ length: dummyRows }, () => ({})) : data.length ? data : [];

  return (
    <div className="Table-body">
      {rows.map((d, rI) => {
        return (
          <TableRow
            key={rI}
            _this={_this}
            rowIndex={rI}
            data={d}
            schema={schema}
            withCheckbox={withCheckbox}
          />
        );
      })}
    </div>
  );
};

export class Table extends React.Component<TableProps, TableState> {
  type: TableType;
  size: TableSize;
  pageSize: number;
  paginationType: PaginationProps['type'];
  showMenu: boolean;

  constructor(props: TableProps) {
    super(props);

    this.state = {
      init: false,
      data: props.data,
      loading: props.loading || false,
      schema: props.loading ? props.loaderSchema || [] : props.schema,
      page: 1,
      sortingList: [],
    };

    this.type = props.type || 'data';
    this.size = props.size || 'standard';
    this.pageSize = props.pageSize || 15;
    this.paginationType = props.paginationType || 'jump';
    this.showMenu = props.showMenu !== undefined ? props.showMenu : true;

    this.updateRenderedData();
  }

  componentDidUpdate(prevProps: TableProps, prevState: TableState) {
    if ((prevProps.withPagination !== this.props.withPagination) || (prevState.page !== this.state.page)) {
      this.updateRenderedData();
    }
    if (this.props.schema !== prevProps.schema) {
      this.setState({
        schema: this.props.schema
      }, () => {
        this.syncSelectAll();
      });
    }
    if (this.props.data !== prevProps.data) {
      this.setState({
        data: this.props.data
      }, () => {
        this.syncSelectAll();
      });
    }
    if (this.props.loading !== prevProps.loading) {
      this.setState({
        loading: this.props.loading || false
      }, () => {
        this.syncSelectAll();
      });
    }
  }

  tableRef = React.createRef<HTMLDivElement>();

  updateRenderedData = (options?: Partial<FetchDataOptions>) => {
    const {
      updateData,
      withPagination
    } = this.props;

    const {
      page,
      sortingList
    } = this.state;

    const {
      pageSize
    } = this;

    const opts = {
      ...options,
      page,
      pageSize,
      sortingList
    };

    if (!withPagination) {
      delete opts.page;
      delete opts.pageSize;
    }

    if (updateData) {
      updateData(opts);
    }
  }

  updateCellSchema: updateCellSchemaFn = (name, schemaUpdate) => {
    const { schema } = this.state;
    const ind = schema.findIndex(s => s.name === name);
    schema[ind] = {
      ...schema[ind],
      ...schemaUpdate
    };

    this.setState({
      schema
    });
  }

  updateRowData: updateRowDataFn = (rowIndexes, dataUpdate) => {
    const {
      data,
    } = this.state;

    for (const rowIndex of rowIndexes) {
      data[rowIndex] = {
        ...data[rowIndex],
        ...dataUpdate
      };
    }

    this.setState({
      data
    });
  }

  updateReorderHighlighter: updateReorderHighlighterFn = dim => {
    this.setState({
      reorderHighlighter: dim
    });
  }

  updateSelectAll: updateSelectAllFn = attr => {
    this.setState({
      selectAll: attr
    });
  }

  updateSortedList = (sortingList: TableState['sortingList']) => {
    this.setState({
      sortingList
    }, () => {
      this.updateRenderedData();
    });
  }

  onMenuChange = (name: StateSchema['name'], selected: any) => {
    switch (selected) {
      case 'sortAsc':
        sortColumn.call(this, name, 'asc');
        break;
      case 'sortDesc':
        sortColumn.call(this, name, 'desc');
        break;
      case 'pinLeft':
        pinColumn.call(this, name, 'left');
        break;
      case 'pinRight':
        pinColumn.call(this, name, 'right');
        break;
      case 'hide':
        hideColumn.call(this, name, true);
        break;
    }
  }

  onFilterChange = (name: StateSchema['name'], selected: any) => {
    this.updateRenderedData({
      filterList: {
        [name]: selected
      }
    });
  }

  reorderSchema: reorderSchemaFn = (from, to) => {
    const { schema } = this.state;

    const fromInd = schema.findIndex(s => s.name === from);
    const toInd = schema.findIndex(s => s.name === to);

    let newSchema = schema;
    if (fromInd < toInd) {
      newSchema = [
        ...schema.slice(0, fromInd),
        ...schema.slice(fromInd + 1, toInd + 1),
        schema[fromInd],
        ...schema.slice(toInd + 1)
      ];
    } else {
      newSchema = [
        ...schema.slice(0, toInd),
        schema[fromInd],
        ...schema.slice(toInd, fromInd),
        ...schema.slice(fromInd + 1)
      ];
    }

    this.setState({
      schema: newSchema
    });
  }

  syncScroll = (type: 'pinned' | 'main') => {
    const pinnedTable = this.tableRef.current!.querySelector('.Table--pinned .Table-body');
    const mainTable = this.tableRef.current!.querySelector('.Table--main .Table-body');

    if (pinnedTable && mainTable) {
      if (type === 'main') pinnedTable.scrollTop = mainTable.scrollTop;
      if (type === 'pinned') mainTable.scrollTop = pinnedTable.scrollTop;
    }
  }

  syncSelectAll = () => {
    const {
      data
    } = this.state;

    this.updateSelectAll({
      indeterminate: data.length >= 0 && data.some(d => !d._selected) && !data.every(d => !d._selected),
      checked: false
    });
  }

  onSelect: onSelectFn = (rowIndex, selected) => {
    const {
      onSelect
    } = this.props;

    this.updateRowData([rowIndex], {
      _selected: selected
    });

    this.syncSelectAll();
    if (onSelect) {
      onSelect(rowIndex, selected);
    }
  }

  onSelectAll: onSelectAllFn = (page, selected) => {
    const {
      onSelectAll,
      withPagination,
    } = this.props;

    const {
      data
    } = this.state;

    const indexes = withPagination && this.pageSize ?
      Array.from({ length: this.pageSize }, (_, i) => i)
      : Array.from({ length: data.length }, (_, i) => i);

    this.updateRowData(indexes, { _selected: selected });
    this.updateSelectAll({
      indeterminate: false,
      checked: selected
    });

    if (onSelectAll) {
      onSelectAll(page, selected);
    }
  }

  render() {
    const {
      schema,
      data,
      reorderHighlighter,
      page,
    } = this.state;

    const {
      draggable,
      showHeader,
      withPagination,
      onPageChange,
      withCheckbox,
      size = 'comfortable',
      totalRecords,
    } = this.props;

    const pinnedSchema = schema.filter(s => s.pinned);
    const unpinnedSchema = schema.filter(s => !s.pinned);
    const mainSchema = [
      ...pinnedSchema,
      ...unpinnedSchema
    ];

    const totalPages = Math.ceil(totalRecords / this.pageSize);

    return (
      <div className="Table-container">
        <div className="Table-wrapper" ref={this.tableRef}>
          {pinnedSchema.length > 0 && (
            <div
              className={`Table Table--pinned Table--${size} Table--${this.type}`}
              onScroll={() => this.syncScroll('pinned')}
            >
              <TableHeader
                _this={this}
                schema={pinnedSchema}
                show={showHeader}
                draggable={draggable}
                withCheckbox={withCheckbox}
              />
              <TableBody
                _this={this}
                schema={pinnedSchema}
                data={data}
                withCheckbox={withCheckbox}
              />
            </div>
          )}
          <div
            className={`Table Table--main Table--${size} Table--${this.type}`}
            onScroll={() => this.syncScroll('main')}
          >
            <TableHeader
              _this={this}
              schema={mainSchema}
              show={showHeader}
              draggable={draggable}
              withCheckbox={withCheckbox}
            />
            <TableBody
              _this={this}
              schema={mainSchema}
              data={data}
              withCheckbox={withCheckbox}
            />
          </div>
          {reorderHighlighter && (
            <div
              className="Table-reorderHighlighter"
              style={{
                left: `${reorderHighlighter}px`
              }}
            />
          )}
        </div>
        {withPagination && (
          <div className="Table-pagination">
            <Pagination
              page={page}
              totalPages={totalPages}
              type={this.paginationType}
              onPageChange={(newPage: number) => {
                if (onPageChange) onPageChange(newPage);
                this.setState({
                  page: newPage
                });
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Table;
