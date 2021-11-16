import * as React from 'react';
import { DropdownProps, CheckboxProps, GridCellProps } from '@/index.type';
import { GridHead } from './GridHead';
import { GridBody } from './GridBody';
import { sortColumn, pinColumn, hideColumn, moveToIndex, getSchema } from './utility';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { NestedRowProps } from './GridNestedRow';
import classNames from 'classnames';
import { GridProvider } from './GridContext';
import defaultProps from './defaultProps';

export type SortType = 'asc' | 'desc' | 'unsort';
export type Pinned = 'left' | 'right' | 'unpin';
export type Alignment = 'left' | 'right' | 'center';
export type Comparator = (a: RowData, b: RowData) => -1 | 0 | 1;
export type Filter = any[];
export type GridRef = HTMLDivElement | null;
export type PageInfo = { page: number; scrollTop: number };

export interface FetchDataOptions {
  page?: number;
  pageSize?: number;
  filterList?: GridProps['filterList'];
  sortingList?: GridProps['sortingList'];
  searchTerm?: string;
}

export type fetchDataFunction = (options: FetchDataOptions) => Promise<{
  searchTerm?: string;
  count: number;
  data: Data;
  schema: Schema;
}>;

export type updateSortingListFunction = (newSortingList: GridProps['sortingList']) => void;
export type updateFilterListFunction = (newFilterList: GridProps['filterList']) => void;
export type updateSchemaFunction = (newSchema: Schema) => void;
export type updateSelectAllFunction = (attr: GridProps['selectAll']) => void;
export type updateColumnSchemaFunction = (name: ColumnSchema['name'], schemaUpdate: Partial<ColumnSchema>) => void;
export type updateRowDataFunction = (rowIndexes: number[], dataUpdate: Partial<RowData>) => void;
export type sortDataFunction = (comparator: Comparator, type: SortType) => void;
export type reorderColumnFunction = (from: string, to: string) => void;
export type onSelectFn = (rowIndex: number, selected: boolean) => void;
export type onFilterChangeFn = (name: ColumnSchema['name'], selected: any) => void;
export type onSelectAllFunction = (selected: boolean, selectAll?: boolean) => void;
export type onFilterChangeFunction = (data: RowData, filters: Filter) => boolean;
export type onRowClickFunction = (data: RowData, rowIndex?: number) => void;
export type onMenuChangeFn = (name: ColumnSchema['name'], selected: any) => void;
export type updatePrevPageInfoFunction = (value: PageInfo) => void;
export type CellType =
  | 'DEFAULT'
  | 'WITH_META_LIST'
  | 'AVATAR'
  | 'AVATAR_WITH_TEXT'
  | 'AVATAR_WITH_META_LIST'
  | 'STATUS_HINT'
  | 'ICON';

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
   * width of the column(px/%)
   */
  width?: React.ReactText;
  /**
   * min-width of the column(px/%)
   * @default 96
   */
  minWidth?: React.ReactText;
  /**
   * max-width of the column(px/%)
   * @default 800
   */
  maxWidth?: React.ReactText;
  /**
   * Denotes if column is resizable
   */
  resizable?: boolean;
  /**
   * Enable sorting of the column
   * @default true
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
  translate?: (data: RowData) => RowData;
  /**
   * Cell type
   * @default DEFAULT
   */
  cellType?: CellType;
  /**
   * Custom cell renderer
   */
  cellRenderer?: React.FC<GridCellProps>;
  /**
   * Alignment of column
   * @default 'left'
   */
  align?: Alignment;
  /**
   * Show tooltip on hover
   */
  tooltip?: boolean;
};

export type RowData = Record<string, any> & {
  _selected?: boolean;
};

export type GridSize = 'comfortable' | 'standard' | 'compressed' | 'tight';
export type GridType = 'resource' | 'data';
export type Data = RowData[];
export type Schema = ColumnSchema[];

export interface GridProps extends BaseProps {
  /**
   * Controls spacing of `Grid`
   */
  size: GridSize;
  /**
   * Grid type
   */
  type: GridType;
  /**
   * Callback on Row click in case of `Resource Grid`
   */
  onRowClick?: onRowClickFunction;
  /**
   * Schema used to render `loading` state
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
   */
  loading: boolean;
  /**
   * Error state of Grid
   */
  error: boolean;
  /**
   * Callback to be called to get the updated data
   */
  updateData?: () => void;
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
   */
  pageSize: number;
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
  onSelectAll?: onSelectAllFunction;
  /**
   * Error Template
   * **Functional Component will be deprecated soon**
   */
  errorTemplate?: React.FunctionComponent | React.ReactNode;
  /**
   * Sorting List
   */
  sortingList: {
    name: ColumnSchema['name'];
    type: SortType;
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
    checked: boolean;
    indeterminate: boolean;
  };
  /**
   * Shows tooltip on Head Cell hover
   */
  headCellTooltip?: boolean;
  /**
   * Shows left separator to all columns
   *
   * **Can be override by Column Schema**
   */
  separator?: boolean;
  /**
   * Show filters in Head Cell
   */
  showFilters: boolean;
}

export interface GridState {
  init: boolean;
  prevPageInfo: PageInfo;
}

export class Grid extends React.Component<GridProps, GridState> {
  static defaultProps: GridProps;
  gridRef: GridRef = null;
  isHeadSyncing = false;
  isBodySyncing = false;

  constructor(props: GridProps) {
    super(props);

    const pageInfo = { page: 1, scrollTop: 0 };

    this.state = {
      init: false,
      prevPageInfo: pageInfo,
    };
  }

  componentDidMount() {
    this.setState({
      init: true,
    });
    window.addEventListener('resize', this.forceRerender.bind(this));
  }

  forceRerender() {
    this.forceUpdate();
  }

  componentWillUnmount() {
    this.removeScrollListeners();
    window.removeEventListener('resize', this.forceRerender.bind(this));
  }

  componentDidUpdate(prevProps: GridProps, prevState: GridState) {
    if (prevState.init !== this.state.init) {
      this.addScrollListeners();
    }

    if (prevProps.page !== this.props.page || prevProps.error !== this.props.error) {
      this.removeScrollListeners();
      this.addScrollListeners();
    }
  }

  addScrollListeners() {
    const gridHeadEl = this.gridRef!.querySelector('.Grid-head');
    const gridBodyEl = this.gridRef!.querySelector('.Grid-body');

    if (gridHeadEl && gridBodyEl) {
      gridHeadEl.addEventListener('scroll', this.syncScroll('head'));
      gridBodyEl.addEventListener('scroll', this.syncScroll('body'));
    }
  }

  removeScrollListeners() {
    const gridHeadEl = this.gridRef!.querySelector('.Grid-head');
    const gridBodyEl = this.gridRef!.querySelector('.Grid-body');

    if (gridHeadEl && gridBodyEl) {
      gridHeadEl.removeEventListener('scroll', this.syncScroll('head'));
      gridBodyEl.removeEventListener('scroll', this.syncScroll('body'));
    }
  }

  syncScroll = (type: string) => () => {
    const gridHeadEl = this.gridRef!.querySelector('.Grid-head');
    const gridBodyEl = this.gridRef!.querySelector('.Grid-body');

    if (type === 'head') {
      if (!this.isHeadSyncing) {
        this.isBodySyncing = true;
        gridBodyEl!.scrollLeft = gridHeadEl!.scrollLeft;
      }
      this.isHeadSyncing = false;
    }

    if (type === 'body') {
      if (!this.isBodySyncing) {
        this.isHeadSyncing = true;
        gridHeadEl!.scrollLeft = gridBodyEl!.scrollLeft;
      }
      this.isBodySyncing = false;
    }
  };

  updateRenderedSchema = (newSchema: Schema) => {
    const { updateSchema } = this.props;

    if (updateSchema) {
      updateSchema(newSchema);
    }
  };

  updateColumnSchema: updateColumnSchemaFunction = (name, schemaUpdate) => {
    const { schema } = this.props;
    const newSchema = [...schema];

    const ind = newSchema.findIndex((s) => s.name === name);
    newSchema[ind] = {
      ...newSchema[ind],
      ...schemaUpdate,
    };

    this.updateRenderedSchema(newSchema);
  };

  reorderColumn: reorderColumnFunction = (from, to) => {
    const { schema } = this.props;

    const fromInd = schema.findIndex((s) => s.name === from);
    const toInd = schema.findIndex((s) => s.name === to);
    const newSchema = moveToIndex(schema, fromInd, toInd);
    this.updateRenderedSchema(newSchema);
  };

  updateSortingList = (sortingList: GridProps['sortingList']) => {
    const { updateSortingList } = this.props;

    if (updateSortingList) {
      updateSortingList(sortingList);
    }
  };

  updateFilterList = (filterList: GridProps['filterList']) => {
    const { updateFilterList } = this.props;

    if (updateFilterList) {
      updateFilterList(filterList);
    }
  };

  onMenuChange: onMenuChangeFn = (name, selected) => {
    const { sortingList } = this.props;
    switch (selected) {
      case 'sortAsc':
        sortColumn({ sortingList, updateSortingList: this.updateSortingList }, name, 'asc');
        break;
      case 'sortDesc':
        sortColumn({ sortingList, updateSortingList: this.updateSortingList }, name, 'desc');
        break;
      case 'unsort':
        sortColumn({ sortingList, updateSortingList: this.updateSortingList }, name, 'unsort');
        break;
      case 'pinLeft':
        pinColumn({ updateColumnSchema: this.updateColumnSchema }, name, 'left');
        break;
      case 'pinRight':
        pinColumn({ updateColumnSchema: this.updateColumnSchema }, name, 'right');
        break;
      case 'unpin':
        pinColumn({ updateColumnSchema: this.updateColumnSchema }, name, 'unpin');
        break;
      case 'hide':
        hideColumn({ updateColumnSchema: this.updateColumnSchema }, name, true);
        break;
    }
  };

  onFilterChange: onFilterChangeFn = (name, selected) => {
    const { filterList } = this.props;

    const newFilterList = {
      ...filterList,
      [name]: selected,
    };

    this.updateFilterList(newFilterList);
  };

  onSelect: onSelectFn = (rowIndex, selected) => {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(rowIndex, selected);
    }
  };

  onSelectAll: CheckboxProps['onChange'] = (event) => {
    const { onSelectAll } = this.props;

    if (onSelectAll) {
      onSelectAll(event.target.checked);
    }
  };

  updatePrevPageInfo: updatePrevPageInfoFunction = (value) => {
    this.setState({
      prevPageInfo: value,
    });
  };

  render() {
    const baseProps = extractBaseProps(this.props);

    const { init, prevPageInfo } = this.state;

    const { type, size, showHead, className, page, loading, loaderSchema } = this.props;

    const schema = getSchema(this.props.schema, loading, loaderSchema);

    const classes = classNames(
      {
        Grid: 'true',
        [`Grid--${type}`]: type,
        [`Grid--${size}`]: size,
      },
      className
    );

    return (
      <div
        className={classes}
        {...baseProps}
        ref={(el) => {
          this.gridRef = el;
        }}
      >
        {init && (
          <GridProvider
            value={{
              ...this.props,
              ref: this.gridRef,
            }}
          >
            {showHead && (
              <GridHead
                schema={schema}
                onSelectAll={this.onSelectAll?.bind(this)}
                onMenuChange={this.onMenuChange.bind(this)}
                onFilterChange={this.onFilterChange.bind(this)}
                updateColumnSchema={this.updateColumnSchema.bind(this)}
                reorderColumn={this.reorderColumn.bind(this)}
              />
            )}
            <GridBody
              key={`${page}`}
              schema={schema}
              prevPageInfo={prevPageInfo}
              updatePrevPageInfo={this.updatePrevPageInfo.bind(this)}
              onSelect={this.onSelect.bind(this)}
            />
          </GridProvider>
        )}
      </div>
    );
  }
}

Grid.defaultProps = defaultProps;

export default Grid;
