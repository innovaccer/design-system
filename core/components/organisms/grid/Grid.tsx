import * as React from 'react';
import classNames from 'classnames';
import { Pagination } from '@/index';
import { CheckboxProps, DropdownProps, PaginationProps } from '@/index.type';
import { GridCellProps } from './GridCell';
import { GridHead } from './GridHead';
import { GridBody } from './GridBody';
import { sortColumn, pinColumn, hideColumn, getTotalPages, getSelectAll, moveToIndex } from './utility';

export type SortType = 'asc' | 'desc';
export type Alignment = 'left' | 'right' | 'center';
export type SortFn = (a: RowData, b: RowData) => -1 | 0 | 1;
export type Filter = any[];

export interface FetchDataOptions {
  page?: number;
  pageSize?: number;
  filterList?: GridState['filterList'];
  sortingList?: GridState['sortingList'];
  searchTerm?: string;
}

export type fetchDataFn = (options: FetchDataOptions) => Promise<{
  totalRecords: number,
  data: Data,
  schema: Schema
}>;

export type updateDataFn = (options: FetchDataOptions) => void;
export type updateSelectAllFn = (attr: GridState['selectAll']) => void;
export type updateColumnSchemaFn = (name: ColumnSchema['name'], schemaUpdate: Partial<ColumnSchema>) => void;
export type updateRowDataFn = (rowIndexes: number[], dataUpdate: Partial<RowData>) => void;
export type updateReorderHighlighterFn = (dim: GridState['reorderHighlighter']) => void;
export type sortDataFn = (sortFn: SortFn, type: SortType) => void;
export type reorderColFn = (from: string, to: string) => void;
export type onSelectFn = (rowIndex: number, selected: boolean) => void;
export type onSelectAllFn = (selected: boolean) => void;
export type onFilterChangeFn = (data: RowData, filters: Filter) => boolean;
export type onRowClickFn = (data: RowData) => void;
export type CellType = 'DEFAULT' |
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
  cellTemplate?: (props: GridCellProps) => React.ReactElement;
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
  loaderSchema?: Schema;
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
}

export interface GridState {
  init: boolean;
  prevSchema: Schema;
  schema: Schema;
  reorderHighlighter?: number;
  page: number;
  selectAll?: {
    checked: boolean,
    indeterminate: boolean
  };
  sortingList: {
    name: ColumnSchema['name'],
    type: SortType
  }[];
  filterList: Record<ColumnSchema['name'], Filter>;
}

export class Grid extends React.Component<GridProps, GridState> {
  constructor(props: GridProps) {
    super(props);

    this.state = {
      init: false,
      prevSchema: [],
      schema: props.loading ? props.loaderSchema || [] : props.schema,
      page: 1,
      sortingList: [],
      filterList: {}
    };

    this.updateRenderedData();
  }

  static defaultProps = {
    showHead: true,
    // loaderSchema: [],
    type: 'data',
    size: 'comfortable',
    pageSize: 15,
    paginationType: 'jump',
    loading: false
  };

  static getDerivedStateFromProps(props: GridProps, state: GridState) {
    if (props.schema !== state.prevSchema) {
      return {
        prevSchema: props.schema,
        schema: props.data.length ? props.schema : props.loaderSchema || []
      };
    }
    return null;
  }

  componentDidUpdate(prevProps: GridProps, prevState: GridState) {
    if ((prevProps.withPagination !== this.props.withPagination) || (prevState.page !== this.state.page)) {
      this.updateRenderedData();
    }
    if (this.props.schema !== prevProps.schema) {
      this.syncSelectAll();
    }
    if (this.props.data !== prevProps.data) {
      this.syncSelectAll();
    }
    // if (this.props.loading !== prevProps.loading) {}
  }

  gridRef = React.createRef<HTMLDivElement>();

  updateRenderedData = (options?: Partial<FetchDataOptions>) => {
    const {
      pageSize,
      updateData,
      withPagination
    } = this.props;

    const {
      page,
      sortingList,
      filterList
    } = this.state;

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
  }

  updateRenderedSchema = (newSchema: Schema) => {
    this.setState({
      schema: newSchema
    });
  }

  updateColumnSchema: updateColumnSchemaFn = (name, schemaUpdate) => {
    const { schema } = this.state;
    const ind = schema.findIndex(s => s.name === name);
    schema[ind] = {
      ...schema[ind],
      ...schemaUpdate
    };

    this.updateRenderedSchema(schema);
  }

  reorderCol: reorderColFn = (from, to) => {
    const {
      schema
    } = this.state;

    const fromInd = schema.findIndex(s => s.name === from);
    const toInd = schema.findIndex(s => s.name === to);
    const newSchema = moveToIndex(schema, fromInd, toInd);
    this.updateRenderedSchema(newSchema);
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

  updateSortingList = (sortingList: GridState['sortingList']) => {
    this.setState({
      sortingList,
      page: 1,
    }, () => {
      this.updateRenderedData();
    });
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
    } = this.state;

    this.setState({
      page: 1,
      filterList: {
        ...filterList,
        [name]: selected
      }
    }, () => {
      this.updateRenderedData();
    });
  }

  syncScroll = (renderType: 'pinned' | 'main') => {
    const pinnedGrid = this.gridRef.current!.querySelector('.Grid--pinned .Grid-body');
    const mainGrid = this.gridRef.current!.querySelector('.Grid--main .Grid-body');

    if (pinnedGrid && mainGrid) {
      if (renderType === 'main') pinnedGrid.scrollTop = mainGrid.scrollTop;
      if (renderType === 'pinned') mainGrid.scrollTop = pinnedGrid.scrollTop;
    }
  }

  syncSelectAll = () => {
    const {
      withCheckbox,
      showHead
    } = this.props;

    if (withCheckbox && showHead) {
      const {
        data
      } = this.props;

      const {
        indeterminate,
        checked
      } = getSelectAll(data);

      this.updateSelectAll({
        indeterminate,
        checked
      });
    }
  }

  onSelect: onSelectFn = (rowIndex, selected) => {
    const {
      onSelect
    } = this.props;

    if (onSelect) {
      onSelect(rowIndex, selected);
      this.syncSelectAll();
    }
  }

  onSelectAll: CheckboxProps['onChange'] = selected => {
    const {
      onSelectAll,
    } = this.props;

    if (onSelectAll) {
      onSelectAll(selected);
      this.updateSelectAll({
        indeterminate: false,
        checked: selected
      });
    }
  }

  renderGrid(renderType: 'pinned' | 'main') {
    const {
      type,
      size,
      showHead,
      draggable,
      withCheckbox,
      data
    } = this.props;

    const {
      schema,
    } = this.state;

    const classes = classNames({
      Grid: 'true',
      [`Grid--${renderType}`]: renderType,
      [`Grid--${type}`]: type,
      [`Grid--${size}`]: size,
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
        {showHead && (
          <GridHead
            _this={this}
            schema={renderType === 'pinned' ? pinnedSchema : mainSchema}
            draggable={draggable}
            withCheckbox={withCheckbox}
          />
        )}
        <GridBody
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
      init,
      schema,
      reorderHighlighter,
      page,
    } = this.state;

    const {
      loading,
      loaderSchema,
      withPagination,
      onPageChange,
      totalRecords,
      pageSize,
      paginationType
    } = this.props;

    if (!loading && !init && schema !== loaderSchema) this.setState({ init: true });

    return (
      <div className="Grid-container">
        <div className="Grid-wrapper" ref={this.gridRef}>
          {this.renderGrid('pinned')}
          {this.renderGrid('main')}
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
                this.setState({
                  page: newPage
                });
              }}
            />
          </div>
        )}
      </div >
    );
  }
}

export default Grid;
