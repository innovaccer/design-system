import * as React from 'react';
import { Header, ExternalHeaderProps, updateSearchTermFunction, HeaderProps } from '../grid/Header';
import { Grid } from '@/index';
import {
  Data,
  Schema,
  onSelectFunction,
  onSelectAllFunction,
  GridProps,
  FetchDataOptions,
  fetchDataFunction,
  RowData,
  updateSchemaFunction,
  updateSortingListFunction,
  updateFilterListFunction
} from '../grid';
import { updateBatchData, filterData, sortData, paginateData, getSelectAll, searchData } from '../grid/utility';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { debounce } from 'throttle-debounce';

interface SyncProps {
  /**
   * <pre className="DocPage-codeBlock">
   *    Data: RowData[]
   *
   *    RowData: Record<string, any> & {
   *      _selected?: boolean
   *    }
   *
   *    `_selected`  Denotes row selection
   * </pre>
   */
  data?: Data;
  /**
   * <pre className="DocPage-codeBlock">
   *    Schema: ColumnSchema[]
   *
   *    ColumnSchema: {
   *        name: string;
   *        displayName: string;
   *        width: number;
   *        resizable?: boolean;
   *        sortFunction?: (a: RowData, b: RowData) => -1 | 0 | 1;
   *        separator?: boolean;
   *        pinned?: 'left' | 'right';
   *        hidden?: boolean;
   *        filters?: DropdownProps['options'];
   *        onFilterChange?: (data: RowData, filters: Filter) => boolean;
   *        translate?: (data: RowData) => RowData,
   *        cellType?: CellType;
   *        cellRenderer?: (props: GridCellProps) => React.ReactElement;
   *        align?: Alignment;
   *    }
   *
   *    CellType: 'DEFAULT' | 'WITH\_META\_LIST' | 'AVATAR' | 'AVATAR\_WITH\_TEXT'
   * | 'AVATAR\_WITH\_META\_LIST' | 'IMAGE' | 'IMAGE\_WITH\_TEXT' | 'IMAGE\_WITH\_META\_LIST'
   * | 'STATUS\_HINT' | 'ICON'`
   *
   *    GridCellProps: {
   *        size: GridSize;
   *        rowIndex: number;
   *        colIndex: number;
   *        data: RowData;
   *        schema: ColumnSchema;
   *        loading: boolean;
   *    }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | name | key of the value in `RowData` | |
   * | displayName | Column Head Label | |
   * | width | Width of the column(in px) | |
   * | resizable | Denotes if column is resizable | |
   * | sortFunction | Sorting Function to be passed(in case of async) | |
   * | separator | Shows Left separator | |
   * | tooltip | Shows tooltip on hover | |
   * | pinned | Pin column | |
   * | hidden | Denotes if column is hidden | |
   * | filters | Filter options for the column | |
   * | onFilterChange | Callback to be called on Filter Change | |
   * | translate | Translate Cell Data | |
   * | cellType | Cell Type | 'DEFAULT' |
   * | cellRenderer | Custom Cell Renderer | |
   * | align | Align cell content | |
   */
  schema?: Schema;
  /**
   * Set for loading state of Table(in case of sync)
   */
  loading?: boolean;
  /**
   * Set for error state of Table(in case of sync)
   */
  error?: boolean;
  /**
   * Callback to be called on searchTerm change(in case of sync)
   */
  onSearch?: (data: RowData, searchTerm: string) => boolean;
}

interface AsyncProps {
  /**
   * Callback to be called in case of async `Table`
   *
   * <pre className="DocPage-codeBlock">
   * fetchDataFunction: (options: FetchDataOptions) => Promise<{
   *      count: number,
   *      data: Data,
   *      schema: Schema
   * }>;
   *
   * FetchDataOptions: {
   *      page?: number;
   *      pageSize?: number;
   *      filterList?: TableProps['sortingList'];
   *      sortingList?: TableProps['filterList'];
   *      searchTerm?: string;
   *  }
   * </pre>
   */
  fetchData?: fetchDataFunction;
}

interface SharedTableProps extends BaseProps {
  /**
   * Controls Table Head display
   */
  showHead?: GridProps['showHead'];
  /**
   * Type of Table
   *
   * **Requires `onRowClick` for 'resource' Table**
   * @default "data"
   */
  type?: GridProps['type'];
  /**
   * Table cell size
   * @default "comfortable"
   */
  size?: GridProps['size'];
  /**
   * Allow Column reordering
   * @default true
   */
  draggable?: boolean;
  /**
   * Set to use `Header`
   */
  withHeader?: boolean;
  /**
   * Options to be passed if using `withHeader: true`
   *
   * <pre className="DocPage-codeBlock">
   * ExternalHeaderProps: {
   *    children?: React.ReactNode;
   *    withSearch?: boolean;
   *    searchPlaceholder?: string;
   *    dynamicColumn?: boolean;
   * }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | children | Header actions to be rendered | |
   * | withSearch | Set to use Search Input | |
   * | searchPlaceholder | Placeholder of Search Input | "Search" |
   * | dynamicColumn | Set to use Column controlling dropdown | true |
   *
   */
  headerOptions?: ExternalHeaderProps;
  /**
   * Set for Row checkboxes
   */
  withCheckbox?: GridProps['withCheckbox'];
  /**
   * Set for visibility of Menu on Table Head Cell
   * @default true
   */
  showMenu?: GridProps['showMenu'];
  /**
   * Set for `Pagination` component in `Table`
   */
  withPagination?: GridProps['withPagination'];
  /**
   * `Pagination` component type
   */
  paginationType?: GridProps['paginationType'];
  /**
   * Number of rows to be rendered on a page
   *
   * **Also used to control number of rows to be rendered while loading: true**
   * @default 15
   */
  pageSize?: GridProps['pageSize'];
  /**
   * Schema to be used for loading state
   */
  loaderSchema?: GridProps['loaderSchema'];
  /**
   * Set to allow multiple column sorting
   * @default true
   */
  multipleSorting?: boolean;
  /**
   * Initial sortingList passed to `Table`
   * <pre className="DocPage-codeBlock">
   * SortType: 'asc' | 'desc'
   * </pre>
   */
  sortingList?: GridProps['sortingList'];
  /**
   * Initial filterList passed to `Table`
   * <pre className="DocPage-codeBlock">
   * Filter: Array of selected values passed in dropdown
   * `any[]`
   * </pre>
   */
  filterList?: GridProps['filterList'];
  /**
   * Template to be rendered when **error: true**
   */
  errorTemplate?: GridProps['errorTemplate'];
  /**
   * Callback to be called when a row is clicked in case of Table type: "resource"
   *
   * `onRowClickFunction: (data: RowData, rowIndexes?: number) => void`
   */
  onRowClick?: GridProps['onRowClick'];
  /**
   * Callback to be called when a row is selected
   * @param rowIndexes - Updated rowIndexes
   * @param selected - Updated selected value
   * @param allSelected - List of selected data in the `Table`
   * @param selectAll - Denotes selection of all records in `Table`
   */
  onSelect?: (rowIndexes: number[], selected: boolean, allSelected: RowData[], selectAll?: boolean) => void;
  /**
   * Callback to be called on page change in case of withPagination: true
   */
  onPageChange?: GridProps['onPageChange'];
}

// interface SyncTableProps extends SyncProps, SharedTableProps { };
// interface AsyncTableProps extends AsyncProps, SharedTableProps { };

export type SyncTableProps = SyncProps & SharedTableProps;
export type AsyncTableProps = AsyncProps & SharedTableProps;

export type TableProps = (AsyncTableProps & SyncTableProps);

interface TableState {
  async: boolean;
  data: GridProps['data'];
  schema: GridProps['schema'];
  sortingList: GridProps['sortingList'];
  filterList: GridProps['filterList'];
  page: GridProps['page'];
  totalRecords: GridProps['totalRecords'];
  selectAll: GridProps['selectAll'];
  searchTerm: HeaderProps['searchTerm'];
  loading: GridProps['loading'];
  error: GridProps['error'];
}

// export type ExtractType<T> = T extends SyncTableProps ? SyncTableProps : AsyncTableProps;

// export const Table = <T extends SyncTableProps, K extends AsyncTableProps>(props: T | K) => {

// export function Table(props: SyncTableProps): React.ReactElement;
// export function Table(props: AsyncTableProps): React.ReactElement;

/**
 * ###Note:
 * 1. Table props types:
 *  - async: fetchData
 *  - sync: data, schema, error, loading, onSearch
 * 2. Sync Table:
 *  - Manually toggle loading/error state to update data, schema.
 */

export class Table extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);

    const async = ('fetchData' in this.props);
    const data = props.data || [];
    const schema = props.schema || [];

    this.state = {
      async,
      data: !async ? data : [],
      schema: !async ? schema : [],
      page: 1,
      sortingList: props.sortingList || [],
      filterList: props.filterList || {},
      totalRecords: !async ? data.length : 0,
      loading: !async ? props.loading || false : true,
      error: !async ? props.error || false : false,
      selectAll: getSelectAll([]),
      searchTerm: '',
    };

    // if (async) this.updateData({});
    this.updateData({});
  }

  static defaultProps = {
    type: 'data',
    size: 'comfortable',
    showHead: true,
    showMenu: true,
    multipleSorting: true,
    headerOptions: {},
    pageSize: 15,
    loading: false,
    draggable: true
  };

  componentDidUpdate(prevProps: TableProps, prevState: TableState) {
    if (!this.state.async) {
      if (prevProps.loading !== this.props.loading
        || prevProps.error !== this.props.error) {
        const data = this.props.data || [];
        this.setState({
          data,
          loading: this.props.loading || false,
          error: this.props.error || false,
          page: 1,
          schema: this.props.schema || [],
          totalRecords: data.length || 0,
          sortingList: [],
          filterList: {},
          selectAll: getSelectAll([]),
          searchTerm: ''
        });
      }
    }

    if (prevState.page !== this.state.page) {
      const { onPageChange } = this.props;
      if (onPageChange) onPageChange(this.state.page);
    }

    if (prevState.page !== this.state.page
      || prevState.filterList !== this.state.filterList
      || prevState.sortingList !== this.state.sortingList
      || prevState.searchTerm !== this.state.searchTerm) {
      this.onSelect(-1, false);
      if (!this.props.loading) this.updateData({});
    }
  }

  updateData = debounce(250, (_options: FetchDataOptions) => {
    const {
      fetchData,
      pageSize,
      withPagination,
      data: dataProp,
      onSearch
    } = this.props;

    const {
      async,
      page,
      schema,
      sortingList,
      filterList,
      searchTerm = ''
    } = this.state;

    const opts = {
      // ...options,
      page,
      pageSize,
      sortingList,
      filterList,
      searchTerm,
    };

    if (!this.props.withPagination) {
      delete opts.page;
      delete opts.pageSize;
    }

    if (async) {
      this.setState({
        loading: true
      });
      if (fetchData) {
        fetchData(opts)
          .then((res: any) => {
            const data = res.data;
            this.setState({
              data,
              selectAll: getSelectAll(data),
              schema: this.state.schema.length ? this.state.schema : res.schema,
              totalRecords: res.count,
              loading: false,
              error: !data.length
            });
          })
          .catch(() => {
            this.setState({
              loading: false,
              error: true,
              data: []
            });
          });
      }
    } else {
      const filteredData = filterData(schema, dataProp, filterList);
      const searchedData = searchData(filteredData, opts.searchTerm, onSearch);
      const sortedData = sortData(schema, searchedData, sortingList);
      let renderedData = sortedData;
      const totalRecords = sortedData.length;
      if (withPagination && page && pageSize) {
        renderedData = paginateData(renderedData, page, pageSize);
      }

      this.setState({
        totalRecords,
        selectAll: getSelectAll(renderedData),
        schema: this.state.schema.length ? this.state.schema : schema,
        data: renderedData,
      });
    }
  });

  onSelect: onSelectFunction = (rowIndexes, selected) => {
    const {
      data
    } = this.state;

    const {
      onSelect
    } = this.props;

    const indexes = [rowIndexes];
    let newData: Data = data;
    if (rowIndexes >= 0) {
      newData = updateBatchData(data, indexes, {
        _selected: selected
      });

      this.setState({
        data: newData,
        selectAll: getSelectAll(newData)
      });
    }

    if (onSelect) {
      onSelect(indexes, selected, rowIndexes === -1 ? [] : newData.filter(d => d._selected));
    }
  }

  onSelectAll: onSelectAllFunction = (selected, selectAll) => {
    const {
      onSelect
    } = this.props;

    const {
      data
    } = this.state;

    const indexes = Array.from({ length: data.length }, (_, i) => i);

    const newData = updateBatchData(data, indexes, {
      _selected: selected
    });

    if (onSelect) {
      onSelect(indexes, selected, newData.filter(d => d._selected), selectAll);
    }

    this.setState({
      data: newData,
      selectAll: getSelectAll(newData)
    });
  }

  onPageChange: GridProps['onPageChange'] = newPage => {
    this.setState({
      page: newPage
    });
  }

  updateSchema: updateSchemaFunction = newSchema => {
    this.setState({
      schema: newSchema
    });
  }

  updateSortingList: updateSortingListFunction = newSortingList => {
    const {
      multipleSorting
    } = this.props;

    this.setState({
      sortingList: multipleSorting ? [...newSortingList] : newSortingList.slice(-1),
      page: 1,
    });
  }

  updateFilterList: updateFilterListFunction = newFilterList => {
    this.setState({
      filterList: newFilterList,
      page: 1,
    });
  }

  updateSearchTerm: updateSearchTermFunction = newSearchTerm => {
    this.setState({
      searchTerm: newSearchTerm,
      page: 1
    });
  }

  render() {
    const {
      showHead,
      type,
      size,
      draggable,
      withHeader,
      headerOptions,
      withCheckbox,
      showMenu,
      withPagination,
      paginationType,
      pageSize,
      onRowClick,
      // onPageChange: onPageChangeProp,
      // onSelect,
      loaderSchema,
      errorTemplate,
      className,
    } = this.props;

    const baseProps = extractBaseProps(this.props);

    const {
      children: headerChildren,
      ...headerAttr
    } = headerOptions as ExternalHeaderProps;

    const classes = className ? ` ${className}` : '';

    return (
      <div {...baseProps} className={`Table${classes}`}>
        {withHeader && (
          <div className="Table-header">
            <Header
              {...this.state}
              // updateData={updateData}
              updateSchema={this.updateSchema}
              // updateSortingList={updateSortingList}
              updateFilterList={this.updateFilterList}
              updateSearchTerm={this.updateSearchTerm}
              showHead={showHead}
              onSelectAll={this.onSelectAll}
              withCheckbox={withCheckbox}
              withPagination={withPagination}
              {...headerAttr}
            >
              {headerChildren}
            </Header>
          </div>
        )}
        <div className="Table-grid">
          <Grid
            {...this.state}
            updateData={this.updateData}
            updateSchema={this.updateSchema}
            updateSortingList={this.updateSortingList}
            updateFilterList={this.updateFilterList}
            withCheckbox={withCheckbox}
            onSelect={this.onSelect}
            onSelectAll={this.onSelectAll}
            showMenu={showMenu}
            showHead={showHead}
            type={type}
            size={size}
            draggable={draggable}
            withPagination={withPagination}
            paginationType={paginationType}
            pageSize={pageSize}
            loaderSchema={loaderSchema}
            errorTemplate={errorTemplate}
            onRowClick={onRowClick}
            onPageChange={this.onPageChange}
          />
        </div>
      </div>
    );
  }
}

export default Table;
