import * as React from 'react';
import classNames from 'classnames';
import { Pagination } from '@/index';
import { IconProps, InputProps, DropdownProps, PaginationProps, StatusHintsProps } from '@/index.type';
import { TableCellProps } from './TableCell';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { sortColumn, pinColumn, hideColumn } from './utility';

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

  syncScroll = (renderType: 'pinned' | 'main') => {
    const pinnedTable = this.tableRef.current!.querySelector('.Table--pinned .Table-body');
    const mainTable = this.tableRef.current!.querySelector('.Table--main .Table-body');

    if (pinnedTable && mainTable) {
      if (renderType === 'main') pinnedTable.scrollTop = mainTable.scrollTop;
      if (renderType === 'pinned') mainTable.scrollTop = pinnedTable.scrollTop;
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

  renderTable(renderType: 'pinned' | 'main') {
    const {
      type,
      size
    } = this;

    const {
      showHeader,
      draggable,
      withCheckbox,
    } = this.props;

    const {
      schema,
      data
    } = this.state;

    const classes = classNames({
      Table: 'true',
      [`Table--${renderType}`]: renderType,
      [`Table--${type}`]: type,
      [`Table--${size}`]: size,
    });

    const pinnedSchema = schema.filter(s => s.pinned);
    const unpinnedSchema = schema.filter(s => !s.pinned);
    const mainSchema = [
      ...pinnedSchema,
      ...unpinnedSchema
    ];

    if (renderType === 'pinned' && pinnedSchema.length === 0) return null;

    return (
      < div
        className={classes}
        onScroll={() => this.syncScroll(renderType)}
      >
        <TableHeader
          _this={this}
          schema={renderType === 'pinned' ? pinnedSchema : mainSchema}
          show={showHeader}
          draggable={draggable}
          withCheckbox={withCheckbox}
        />
        <TableBody
          _this={this}
          schema={renderType === 'pinned' ? pinnedSchema : mainSchema}
          data={data}
          withCheckbox={withCheckbox}
        />
      </div>
    );
  }

  render() {
    const {
      reorderHighlighter,
      page,
    } = this.state;

    const {
      withPagination,
      onPageChange,
      totalRecords,
    } = this.props;

    const totalPages = Math.ceil(totalRecords / this.pageSize);

    return (
      <div className="Table-container">
        <div className="Table-wrapper" ref={this.tableRef}>
          {this.renderTable('pinned')}
          {this.renderTable('main')}
          {reorderHighlighter && (
            <div
              className="Table-reorderHighlighter"
              style={{
                left: `${reorderHighlighter}px`
              }}
            />
          )}
        </div>
        {
          withPagination && (
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
          )
        }
      </div >
    );
  }
}

export default Table;
