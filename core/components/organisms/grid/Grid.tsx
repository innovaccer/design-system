import * as React from 'react';
import { Pagination } from '@/index';
import { CheckboxProps, DropdownProps, PaginationProps } from '@/index.type';
import { GridCellProps } from './GridCell';
import { sortColumn, pinColumn, hideColumn, getTotalPages, moveToIndex } from './utility';
import { debounce } from 'throttle-debounce';
import { MainGrid } from './MainGrid';

export type SortType = 'asc' | 'desc';
export type Alignment = 'left' | 'right' | 'center';
export type SortFn = (a: RowData, b: RowData) => -1 | 0 | 1;
export type Filter = any[];

export interface FetchDataOptions {
  page?: number;
  pageSize?: number;
  filterList?: GridProps['filterList'];
  sortingList?: GridProps['sortingList'];
  searchTerm?: string;
}

export type fetchDataFn = (options: FetchDataOptions) => Promise<{
  totalRecords: number,
  data: Data,
  schema: Schema
}>;

export type updateSortingListFn = (newSortingList: GridProps['sortingList']) => void;
export type updateFilterListFn = (newFilterList: GridProps['filterList']) => void;
export type updateDataFn = (options: FetchDataOptions) => void;
export type updateSchemaFn = (newSchema: Schema) => void;
export type updateSelectAllFn = (attr: GridProps['selectAll']) => void;
export type updateColumnSchemaFn = (name: ColumnSchema['name'], schemaUpdate: Partial<ColumnSchema>) => void;
export type updateRowDataFn = (rowIndexes: number[], dataUpdate: Partial<RowData>) => void;
export type updateReorderHighlighterFn = (dim: GridState['reorderHighlighter']) => void;
export type sortDataFn = (sortFn: SortFn, type: SortType) => void;
export type reorderColFn = (from: string, to: string) => void;
export type onSelectFn = (rowIndex: number, selected: boolean) => void;
export type onSelectAllFn = (selected: boolean) => void;
export type onFilterChangeFn = (data: RowData, filters: Filter) => boolean;
export type onRowClickFn = (data: RowData, rowIndex?: number) => void;
export type CellType =
  'DEFAULT' |
  'WITH_META_LIST' |
  'AVATAR' |
  'AVATAR_WITH_TEXT' |
  'AVATAR_WITH_META_LIST' |
  'IMAGE' |
  'IMAGE_WITH_TEXT' |
  'IMAGE_WITH_META_LIST' |
  'STATUS_HINT' |
  'ICON';

export type ColumnSchema = {
  /**
   * Key value of `data` object(to be used as default value of Cell)
   */
  name: string;
  /**
   * Header name
   */
  displayName: string;
  /**
   * Width of the column(in px)
   */
  width: number;
  /**
   * Show left separator
   */
  resizable?: boolean;
  /**
   * Sorting Function
   */
  sortFn?: SortFn;
  /**
   * Show left separator
   */
  separator?: boolean;
  /**
   * Pinned to left
   */
  pinned?: boolean;
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
  translate?: (data: RowData) => RowData,
  /**
   * Cell type
   */
  cellType?: CellType;
  /**
   * Custom cell renderer
   */
  cellRenderer?: (props: GridCellProps) => React.ReactElement;
  /**
   * Alignment of column
   */
  align?: Alignment;
};

export type RowData = Record<string, any> & {
  _link?: string,
  _selected?: boolean
};

export type GridSize = 'comfortable' | 'standard' | 'compressed' | 'tight';
export type GridType = 'resource' | 'data';
export type Data = RowData[];
export type Schema = ColumnSchema[];

export interface GridProps {
  /**
   * Controls spacing of `Grid`
   * @default "comfortable"
   */
  size: GridSize;
  /**
   * Grid type
   * @default "data"
   */
  type: GridType;
  /**
   * Callback on Row click in case of `Resource Grid`
   */
  onRowClick?: onRowClickFn;
  /**
   * Schema used to render `loading` state
   * @default []
   */
  loaderSchema: Schema;
  /**
   * Schema used to render `data` object
   */
  schema: Schema;
  /**
   * Data object
   */
  data: Data;
  /**
   * Total records in grid
   */
  totalRecords: number;
  /**
   * Loading state of Grid
   * @default false
   */
  loading: boolean;
  /**
   * Callback to be called to get the updated data
   */
  updateData?: updateDataFn;
  /**
   * Callback to be called to get the updated data
   */
  updateSchema?: updateSchemaFn;
  /**
   * Shows grid head
   */
  showHead?: boolean;
  /**
   * Shows menu in head cell
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
   * Current page
   */
  page: number;
  /**
   * Number of rows on a page
   * @default 15
   */
  pageSize: number;
  /**
   * Pagination Type
   * @default "jump"
   */
  paginationType: PaginationProps['type'];
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
   * Callback on column head select
   */
  onSelectAll?: onSelectAllFn;
  /**
   * Error Template
   */
  errorTemplate?: () => React.ReactElement;
  /**
   * Sorting List
   */
  sortingList: {
    name: ColumnSchema['name'],
    type: SortType
  }[];
  /**
   * update Sorting List Callback
   */
  updateSortingList?: updateSortingListFn;
  /**
   * Filter List
   */
  filterList: Record<ColumnSchema['name'], Filter>;
  /**
   * update Filter List Callback
   */
  updateFilterList?: updateFilterListFn;
  /**
   * Select All
   */
  selectAll?: {
    checked: boolean,
    indeterminate: boolean
  };
}

export interface GridState {
  init: boolean;
  // prevSchema: Schema;
  // schema: Schema;
  reorderHighlighter?: number;
  // page: number;
  // selectAll?: {
  //   checked: boolean,
  //   indeterminate: boolean
  // };
  // sortingList: {
  //   name: ColumnSchema['name'],
  //   type: SortType
  // }[];
  // filterList: Record<ColumnSchema['name'], Filter>;
}

export class Grid extends React.Component<GridProps, GridState> {
  constructor(props: GridProps) {
    super(props);

    this.state = {
      init: false,
    };

    // this.updateRenderedData();
  }

  static defaultProps = {
    showHead: true,
    loaderSchema: [],
    type: 'data',
    size: 'comfortable',
    page: 1,
    pageSize: 15,
    paginationType: 'jump',
    loading: false,
    sortingList: [],
    filterList: {},
  };

  componentDidUpdate(prevProps: GridProps, _prevState: GridState) {
    if ((prevProps.withPagination !== this.props.withPagination) || (prevProps.page !== this.props.page)) {
      this.updateRenderedData();
    }
  }

  gridRef = React.createRef<HTMLDivElement>();

  updateRenderedData = debounce(100, (options?: Partial<FetchDataOptions>) => {
    const {
      page,
      pageSize,
      updateData,
      withPagination,
      sortingList,
      filterList
    } = this.props;

    const opts = {
      ...options,
      page,
      pageSize,
      sortingList,
      filterList
    };

    if (!withPagination) {
      delete opts.page;
      delete opts.pageSize;
    }

    if (updateData) {
      updateData(opts);
    }
  });

  updateRenderedSchema = (newSchema: Schema) => {
    const {
      updateSchema
    } = this.props;

    if (updateSchema) {
      updateSchema(newSchema);
    }
  }

  updateColumnSchema: updateColumnSchemaFn = (name, schemaUpdate) => {
    const { schema } = this.props;
    const newSchema = [...schema];

    const ind = newSchema.findIndex(s => s.name === name);
    newSchema[ind] = {
      ...newSchema[ind],
      ...schemaUpdate
    };

    this.updateRenderedSchema(newSchema);
  }

  reorderCol: reorderColFn = (from, to) => {
    const {
      schema
    } = this.props;

    const fromInd = schema.findIndex(s => s.name === from);
    const toInd = schema.findIndex(s => s.name === to);
    const newSchema = moveToIndex(schema, fromInd, toInd);
    this.updateRenderedSchema(newSchema);
  }

  updateReorderHighlighter: updateReorderHighlighterFn = debounce(50, dim => {
    this.setState({
      reorderHighlighter: dim
    });
  });

  updateSortingList = (sortingList: GridProps['sortingList']) => {
    const {
      updateSortingList
    } = this.props;

    if (updateSortingList) {
      updateSortingList(sortingList);
    }
  }

  updateFilterList = (filterList: GridProps['filterList']) => {
    const {
      updateFilterList
    } = this.props;

    if (updateFilterList) {
      updateFilterList(filterList);
    }
  }

  onMenuChange = (name: ColumnSchema['name'], selected: any) => {
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

  onFilterChange = (name: ColumnSchema['name'], selected: any) => {
    const {
      filterList
    } = this.props;

    const newFilterList = {
      ...filterList,
      [name]: selected
    };

    this.updateFilterList(newFilterList);
  }

  onSelect: onSelectFn = (rowIndex, selected) => {
    const {
      onSelect
    } = this.props;

    if (onSelect) {
      onSelect(rowIndex, selected);
      // this.syncSelectAll();
    }
  }

  onSelectAll: CheckboxProps['onChange'] = selected => {
    const {
      onSelectAll,
    } = this.props;

    if (onSelectAll) {
      onSelectAll(selected);
      // this.updateSelectAll({
      //   indeterminate: false,
      //   checked: selected
      // });
    }
  }

  render() {
    const {
      init,
      reorderHighlighter,
    } = this.state;

    const {
      loading,
      loaderSchema,
      withPagination,
      page,
      onPageChange,
      totalRecords,
      pageSize,
      paginationType
    } = this.props;

    let { schema } = this.props;
    if ((!schema || schema.length === 0) && !init && loading) {
      schema = loaderSchema;
    }

    if (!loading && !init && schema !== loaderSchema) {
      this.setState({ init: true });
    }

    return (
      <div className="Grid-container">
        <div className="Grid-wrapper" ref={this.gridRef}>
          <MainGrid
            _this={this}
            schema={schema}
          />
          {/* {this.renderGrid()} */}
          {reorderHighlighter && (
            <div
              className="Grid-reorderHighlighter"
              style={{
                left: `${reorderHighlighter}px`
              }}
            />
          )}
        </div>
        {withPagination && (
          <div className="Grid-pagination">
            <Pagination
              page={page}
              totalPages={getTotalPages(totalRecords, pageSize)}
              type={paginationType}
              onPageChange={(newPage: number) => {
                if (onPageChange) onPageChange(newPage);
              }}
            />
          </div>
        )}
      </div >
    );
  }
}

export default Grid;
