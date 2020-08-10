import * as React from 'react';
import { Pagination } from '@/index';
import { CheckboxProps, DropdownProps, PaginationProps } from '@/index.type';
import { GridCellProps } from './GridCell';
import { sortColumn, pinColumn, hideColumn, getTotalPages, moveToIndex, getSchema } from './utility';
import { debounce } from 'throttle-debounce';
import { MainGrid } from './MainGrid';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { NestedRowProps } from './GridNestedRow';

export type SortType = 'asc' | 'desc' | 'unsort';
export type Pinned = 'left' | 'right' | 'unpin';
export type Alignment = 'left' | 'right' | 'center';
export type Comparator = (a: RowData, b: RowData) => -1 | 0 | 1;
export type Filter = any[];

export interface FetchDataOptions {
  page?: number;
  pageSize?: number;
  filterList?: GridProps['filterList'];
  sortingList?: GridProps['sortingList'];
  searchTerm?: string;
}

export type fetchDataFunction = (options: FetchDataOptions) => Promise<{
  count: number,
  data: Data,
  schema: Schema
}>;

export type updateSortingListFunction = (newSortingList: GridProps['sortingList']) => void;
export type updateFilterListFunction = (newFilterList: GridProps['filterList']) => void;
export type updateDataFunction = (options: FetchDataOptions) => void;
export type updateSchemaFunction = (newSchema: Schema) => void;
export type updateSelectAllFunction = (attr: GridProps['selectAll']) => void;
export type updateColumnSchemaFunction = (name: ColumnSchema['name'], schemaUpdate: Partial<ColumnSchema>) => void;
export type updateRowDataFunction = (rowIndexes: number[], dataUpdate: Partial<RowData>) => void;
export type sortDataFunction = (comparator: Comparator, type: SortType) => void;
export type reorderColFunction = (from: string, to: string) => void;
export type onSelectFunction = (rowIndex: number, selected: boolean) => void;
export type onSelectAllFunction = (selected: boolean, selectAll?: boolean) => void;
export type onFilterChangeFunction = (data: RowData, filters: Filter) => boolean;
export type onRowClickFunction = (data: RowData, rowIndex?: number) => void;
export type CellType =
  'DEFAULT' |
  'WITH_META_LIST' |
  'AVATAR' |
  'AVATAR_WITH_TEXT' |
  'AVATAR_WITH_META_LIST' |
  'STATUS_HINT' |
  'ICON';

export type ColumnSchema = {
  /**
   * Key value of `Data` object
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
   * Denotes if column is resizable
   */
  resizable?: boolean;
  /**
   * Enable sorting of the column
   */
  sorting?: boolean;
  /**
   * Sorting Function
   */
  comparator?: Comparator;
  /**
   * Show left separator
   */
  separator?: boolean;
  /**
   * Pinned
   */
  pinned?: Pinned;
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
  onFilterChange?: onFilterChangeFunction;
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
  cellRenderer?: React.FC<GridCellProps>;
  /**
   * Alignment of column
   */
  align?: Alignment;
  /**
   * Show tooltip on hover
   */
  tooltip?: boolean;
};

export type RowData = Record<string, any> & {
  _selected?: boolean
};

export type GridSize = 'comfortable' | 'standard' | 'compressed' | 'tight';
export type GridType = 'resource' | 'data';
export type Data = RowData[];
export type Schema = ColumnSchema[];

export interface GridProps extends BaseProps {
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
  onRowClick?: onRowClickFunction;
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
   * Error state of Grid
   */
  error: boolean;
  /**
   * Callback to be called to get the updated data
   */
  updateData?: updateDataFunction;
  /**
   * Callback to be called to get the updated data
   */
  updateSchema?: updateSchemaFunction;
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
   * Allows nested rows
   */
  nestedRows?: boolean;
  /**
   * Renderer to be used for nested rows
   */
  nestedRowRenderer?: React.FC<NestedRowProps>;
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
  onSelect?: onSelectFunction;
  /**
   * Callback on column head select
   */
  onSelectAll?: onSelectAllFunction;
  /**
   * Error Template
   */
  errorTemplate?: React.FunctionComponent;
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
  updateSortingList?: updateSortingListFunction;
  /**
   * Filter List
   */
  filterList: Record<ColumnSchema['name'], Filter>;
  /**
   * update Filter List Callback
   */
  updateFilterList?: updateFilterListFunction;
  /**
   * Select All
   */
  selectAll?: {
    checked: boolean,
    indeterminate: boolean
  };
}

export class Grid extends React.Component<GridProps> {
  constructor(props: GridProps) {
    super(props);

    this.state = {};

    // this.updateRenderedData();
  }

  static defaultProps = {
    showHead: true,
    loaderSchema: [],
    schema: [],
    data: [],
    type: 'data',
    size: 'comfortable',
    page: 1,
    pageSize: 0,
    paginationType: 'jump',
    loading: false,
    error: false,
    sortingList: [],
    filterList: {},
  };

  componentDidUpdate(prevProps: GridProps) {
    if ((prevProps.withPagination !== this.props.withPagination) || (prevProps.page !== this.props.page)) {
      // this.updateRenderedData();
    }

    if (prevProps.loading !== this.props.loading) {
      this.gridRef.current!.querySelector('.Grid')!.scrollTop = 0;
    }
  }

  gridRef = React.createRef<HTMLDivElement>();

  updateRenderedData = debounce(300, (options?: Partial<FetchDataOptions>) => {
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

  updateColumnSchema: updateColumnSchemaFunction = (name, schemaUpdate) => {
    const { schema } = this.props;
    const newSchema = [...schema];

    const ind = newSchema.findIndex(s => s.name === name);
    newSchema[ind] = {
      ...newSchema[ind],
      ...schemaUpdate
    };

    this.updateRenderedSchema(newSchema);
  }

  reorderCol: reorderColFunction = (from, to) => {
    const {
      schema
    } = this.props;

    const fromInd = schema.findIndex(s => s.name === from);
    const toInd = schema.findIndex(s => s.name === to);
    const newSchema = moveToIndex(schema, fromInd, toInd);
    this.updateRenderedSchema(newSchema);
  }

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
      case 'unsort':
        sortColumn.call(this, name, 'unsort');
        break;
      case 'pinLeft':
        pinColumn.call(this, name, 'left');
        break;
      case 'pinRight':
        pinColumn.call(this, name, 'right');
        break;
      case 'unpin':
        pinColumn.call(this, name, 'unpin');
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

  onSelect: onSelectFunction = (rowIndex, selected) => {
    const {
      onSelect
    } = this.props;

    if (onSelect) {
      onSelect(rowIndex, selected);
    }
  }

  onSelectAll: CheckboxProps['onChange'] = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      onSelectAll,
    } = this.props;

    if (onSelectAll) {
      onSelectAll(event.target.checked);
    }
  }

  render() {
    const {
      withPagination,
      page,
      onPageChange,
      totalRecords,
      pageSize,
      paginationType,
    } = this.props;

    const baseProps = extractBaseProps(this.props);
    const schema = getSchema(this);

    return (
      <div className="Grid-container">
        <div className="Grid-wrapper" ref={this.gridRef}>
          <MainGrid
            {...baseProps}
            _this={this}
            schema={schema}
          />
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
