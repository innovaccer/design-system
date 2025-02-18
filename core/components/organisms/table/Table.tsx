import * as React from 'react';
import { Header, ExternalHeaderProps, updateSearchTermFunction, HeaderProps } from './Header';
import { Grid, Pagination, Heading } from '@/index';
import {
  Data,
  onSelectFn,
  onSelectAllFunction,
  GridProps,
  fetchDataFunction,
  RowData,
  updateSchemaFunction,
  updateSortingListFunction,
  updateFilterListFunction,
  FetchDataOptions,
} from '../grid';
import { updateBatchData, filterData, sortData, paginateData, getSelectAll, getTotalPages } from '../grid/utility';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { debounce } from 'throttle-debounce';
import { PaginationProps } from '@/components/molecules/pagination';
import { getUpdatedData, removeDuplicate } from './utils';
import tableStyles from '@css/components/table.module.css';
import classNames from 'classnames';

export interface ErrorTemplateProps {
  errorType?: TableProps['errorType'];
}

export type FilterPosition = 'GRID' | 'HEADER';

interface TableSyncProps {
  /**
   * <pre className="DocPage-codeBlock">
   *    Data: RowData[]
   *
   *    RowData: Record<string, any> & {
   *      _selected?: boolean,
   *      disabled?: boolean,
   *      _expandNestedRow?: boolean,
   *    }
   *
   *    `_selected`  Denotes row selection
   *    `disabled` Denotes disabled row
   *    `_expandNestedRow` Denotes whether to default expand the nested row
   * </pre>
   */
  data: GridProps['data'];
  /* tslint:disable */
  /**
   * <pre className="DocPage-codeBlock">
   *    Schema: ColumnSchema[]
   *
   *    ColumnSchema: {
   *        name: string;
   *        displayName: string;
   *        width?: React.ReactText;
   *        minWidth?: React.ReactText;
   *        maxWidth?: React.ReactText;
   *        resizable?: boolean;
   *        sorting?: boolean;
   *        comparator?: (a: RowData, b: RowData) => -1 | 0 | 1;
   *        separator?: boolean;
   *        pinned?: 'left' | 'right';
   *        hidden?: boolean;
   *        filters?: DropdownProps['options'];
   *        onFilterChange?: (data: RowData, filters: Filter) => boolean;
   *        translate?: (data: RowData) => RowData,
   *        cellType?: CellType;
   *        cellRenderer?: React.FunctionComponent\<GridCellProps\>;
   *        align?: 'left' | 'right' | 'center';
   *        verticalAlign?: 'top' | 'center' | 'bottom';
   *    }
   *
   *    GridCellProps: {
   *        size: GridSize;
   *        rowIndex: number;
   *        colIndex: number;
   *        data: RowData;
   *        schema: ColumnSchema;
   *        loading: boolean;
   *        expanded: boolean;
   *    }
   *
   * | CellType | CellData | Default Width |
   * | --- | --- | --- |
   * | DEFAULT | string \| { title: string } | { width: 200 } |
   * | WITH\_META\_LIST | { title: string, metaList: string[] } | { width: 200 } |
   * | AVATAR | { firstName?: string, lastName?: string, title?: string } | { width: 50, minWidth: 50 } |
   * | AVATAR\_WITH\_TEXT | { firstName?: string, lastName?: string, title: string } | { width: 250 } |
   * | AVATAR\_WITH\_META\_LIST | { firstName?: string, lastName?: string, title: string, metaList: string[] } | { width: 250 } |
   * | ICON | { icon: string } | { width: 50, minWidth: 50 } |
   * | STATUS_HINT | { title: string, statusAppearance: string } | { width: 100 } |
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | name | key of the value in `RowData` | |
   * | displayName | Column Head Label | |
   * | width | width of the column(px or %) | |
   * | minWidth | min-width of the column(px or %) | 100 |
   * | maxWidth | max-width of the column(px or %) | 800 |
   * | resizable | Denotes if column is resizable | |
   * | sorting | Enables sorting in column | true |
   * | comparator | Sorting Function to be passed(in case of sync) | Default string comparator(localeCompare) |
   * | separator | Shows Left separator | |
   * | tooltip | Shows tooltip on hover | |
   * | pinned | Pin column | |
   * | hidden | Denotes if column is hidden | |
   * | filters | Filter options for the column | |
   * | onFilterChange | Callback to be called on Filter Change | |
   * | translate | Translate Cell Data | |
   * | cellType | Cell Type | 'DEFAULT' |
   * | cellRenderer | Custom Cell Renderer | |
   * | align | Align cell content<br>**Align applicable only for following cellTypes:<br>DEFAULT, AVATAR, ICON, STATUS_HINT** | "left" |
   * | verticalAlign | Vertical align cell content | "center" |
   */
  /* tslint:enable */
  schema: GridProps['schema'];
  /**
   * Set for loading state of Table(in case of sync)
   * @default false
   */
  loading: GridProps['loading'];
  /**
   * Set for error state of Table(in case of sync)
   * @default false
   */
  error: GridProps['error'];
  /**
   * Error type to be passed to errorTemplate props
   */
  errorType?: string;
  /**
   * Callback to be called on searchTerm change(in case of sync)
   */
  onSearch?: (data: Data, searchTerm: string) => Data;
}

interface AsyncProps {
  /**
   * Callback to be called in case of async `Table`
   *
   * <pre className="DocPage-codeBlock">
   * fetchDataFunction: (options: FetchDataOptions) => Promise<{
   *      searchTerm?: string,
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
   *
   * <pre className="DocPage-codeBlock">
   * fetchData returns a promise which
   *  - resolves with data, schema, count and searchTerm
   *  - rejects with error: true, errorType: 'FAILED\_TO\_FETCH'
   *  - resolves with no records found, error: true, errorType: 'NO\_RECORDS\_FOUND'
   * </pre>
   */
  fetchData?: fetchDataFunction;
}

interface SharedTableProps extends BaseProps {
  /**
   * Controls Table Head display
   */
  showHead: GridProps['showHead'];
  /**
   * Type of Table
   *
   * **Requires `onRowClick` for 'resource' Table**
   * @default "data"
   */
  type: GridProps['type'];
  /**
   * Table cell size
   * @default "standard"
   */
  size: GridProps['size'];
  /**
   * Allow Column reordering
   * @default true
   */
  draggable: GridProps['draggable'];
  /**
   * Allow nested rows
   */
  nestedRows?: GridProps['nestedRows'];
  /**
   * Renderer to be used for nested rows
   *
   * <pre className="DocPage-codeBlock">
   * NestedRowProps: {
   *    rowIndex: number;
   *    data: RowData;
   *    schema: GridProps['schema'];
   *    loading: boolean;
   *    expanded?: boolean;
   * }
   * </pre>
   */
  nestedRowRenderer?: GridProps['nestedRowRenderer'];
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
   *    allowSelectAll?: boolean;
   *    customSelectionLabel?: string;
   *    globalActionRenderer?: (data: Data) => React.ReactNode;
   *    selectionActionRenderer?: (selectedRows: RowData[], selectAll?: boolean) => React.ReactNode;
   * }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | children | Header actions to be rendered | |
   * | withSearch | Set to use Search Input | |
   * | searchPlaceholder | Placeholder of Search Input | "Search" |
   * | dynamicColumn | Set to use Column controlling dropdown | true |
   * | allowSelectAll | Set to show Select All button | |
   * | customSelectionLabel | Set to show custom label on row selection | 'items' |
   * | globalActionRenderer | global actions to be rendered | |
   * | selectionActionRenderer | Set to show custom actions to be rendered on selection | |
   *
   */
  headerOptions?: ExternalHeaderProps;
  /**
   * Set for Row checkboxes
   */
  withCheckbox?: GridProps['withCheckbox'];
  /**
   * Set for visibility of Menu on Table Head Cell
   */
  showMenu?: GridProps['showMenu'];
  /**
   * Set for `Pagination` component in `Table`(**Not applied if pageSize >= totalRecords**)
   * @default true
   */
  withPagination: GridProps['withPagination'];
  /**
   * Initial page passed to `Table`
   * @default 1
   */
  page: GridProps['page'];
  /**
   * Debounce duration to call in case of page jump
   * @default 750
   */
  pageJumpDebounceDuration: PaginationProps['pageJumpDebounceDuration'];
  /**
   * `Pagination` component type
   * @default "jump"
   */
  paginationType: PaginationProps['type'];
  /**
   * Number of rows to be rendered on a page
   *
   * **Also used to control number of rows to be rendered while loading: true**
   * @default 15
   */
  pageSize: GridProps['pageSize'];
  /**
   * Schema to be used for loading state **only when `schema: undefined`**
   */
  loaderSchema: GridProps['loaderSchema'];
  /**
   * Set to allow multiple column sorting
   * @default true
   */
  multipleSorting: boolean;
  /**
   * Initial sortingList passed to `Table`
   *
   * <pre className="DocPage-codeBlock">
   * SortType: 'asc' | 'desc'
   * </pre>
   * @default []
   */
  sortingList: GridProps['sortingList'];
  /**
   * Initial filterList passed to `Table`
   *
   * <pre className="DocPage-codeBlock">
   * Filter: Array of selected values passed in dropdown
   * `any[]`
   * </pre>
   * @default {}
   */
  filterList: GridProps['filterList'];
  /**
   * Template to be rendered when **error: true**
   *
   * <pre className="DocPage-codeBlock">
   * ErrorTemplateProps: {
   *    errorType: TableProps['errorType']
   * }
   * </pre>
   *
   * Default errorTemplate:
   *
   * <pre class="DocPage-codeBlock mx-6 mb-7">
   * (props) => {
   *      const { errorType = 'DEFAULT' } = props;
   *      const errorMessages = {
   *        'FAILED\_TO\_FETCH': 'Failed to fetch data',
   *        'NO\_RECORDS\_FOUND': 'No results found',
   *        'DEFAULT': 'No results found'
   *      }
   *      return(
   *        \<Heading>{errorMessages[errorType]}\</Heading>
   *      );
   * }
   * </pre>
   */
  errorTemplate?: React.FunctionComponent<ErrorTemplateProps>;
  /**
   * Debounce duration to call updateData in case of search term update
   * @default 750
   */
  searchDebounceDuration: number;
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
  onPageChange?: PaginationProps['onPageChange'];
  /**
   * Shows tooltip on Head Cell hover
   */
  headCellTooltip?: GridProps['headCellTooltip'];
  /**
   * Shows left separator to all columns
   *
   * **Can be override by Column Schema**
   */
  separator?: GridProps['headCellTooltip'];
  /**
   * Filters position in the Table
   *
   * `FilterPosition: 'HEADER' | 'GRID'`
   * @default 'GRID'
   */
  filterPosition: FilterPosition;
  /**
   * Set `true` to allow selection of disabled row
   */
  selectDisabledRow?: boolean;
  /**
   * Provide name of unique column for persistent selection
   */
  uniqueColumnName?: string;
  /***
   * Defines position of checkbox in the row
   */
  checkboxAlignment?: 'top' | 'center' | 'bottom';
  /**
   * Enable row virtualization
   */
  enableRowVirtualization?: GridProps['enableRowVirtualization'];
  /**
   * Virtual Scroll Options
   * <pre className="DocPage-codeBlock">
   * VirtualScrollProps: {
   *   preFetchRows: number;
   *   buffer: number;
   *   visibleRows: number;
   *   loadMoreThreshold: 'early' | 'balanced' | 'lazy' | 'near-end';
   *   onScroll: (event: Event, scrollTop: number) => void;
   * }
   * </pre>
   *
   * | Name | Value |
   * | --- | --- |
   * | early | 50% |
   * | balanced | 75% |
   * | lazy | 90% |
   * | near-end | 0 |
   *
   * <br />
   * <br />
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | preFetchRows | Number of rows to Pre-fetch at a time in case of async table | 50 |
   * | buffer | Number of additional rows to render before and after the visible rows | 10 |
   * | visibleRows | Number of rows to be rendered within the visible viewport | 20 |
   * | loadMoreThreshold | the distance from the end of the scrollable content at which new data should start fetching in case of async table | balanced |
   * | onScroll | Callback to be called on scroll | |
   *
   */
  virtualScrollOptions?: GridProps['virtualScrollOptions'];
}

export type SyncTableProps = SharedTableProps & TableSyncProps;
export type AsyncTableProps = SharedTableProps & AsyncProps;
export type TableProps = AsyncTableProps & SyncTableProps;

interface TableState {
  async: boolean;
  data: TableProps['data'];
  displayData: TableProps['data'];
  schema: TableProps['schema'];
  sortingList: TableProps['sortingList'];
  filterList: TableProps['filterList'];
  page: TableProps['page'];
  totalRecords: GridProps['totalRecords'];
  selectAll: GridProps['selectAll'];
  searchTerm: HeaderProps['searchTerm'];
  loading: TableProps['loading'];
  error: TableProps['error'];
  errorType?: TableProps['errorType'];
  startOffset: number;
}

const defaultErrorTemplate = (props: ErrorTemplateProps) => {
  const { errorType = 'DEFAULT' } = props;

  const errorMessages: Record<string, string> = {
    FAILED_TO_FETCH: 'Failed to fetch data',
    NO_RECORDS_FOUND: 'No results found',
    DEFAULT: 'No results found',
  };
  return <Heading>{errorMessages[errorType]}</Heading>;
};

export const defaultProps = {
  type: 'data',
  size: 'standard',
  showHead: true,
  showMenu: true,
  multipleSorting: true,
  headerOptions: {},
  withPagination: true,
  paginationType: 'jump',
  page: 1,
  pageSize: 15,
  draggable: true,
  data: [],
  displayData: [],
  schema: [],
  loading: false,
  error: false,
  loaderSchema: [],
  sortingList: [],
  filterList: {},
  filterPosition: 'GRID',
  searchDebounceDuration: 750,
  pageJumpDebounceDuration: 750,
  errorTemplate: defaultErrorTemplate,
  virtualScrollOptions: {
    preFetchRows: 50,
    buffer: 10,
    visibleRows: 20,
    loadMoreThreshold: 0,
    maxDataLimit: 500,
  },
};

export class Table extends React.Component<TableProps, TableState> {
  static defaultProps = defaultProps;
  debounceUpdate: () => void;
  selectedRowsRef: React.MutableRefObject<any> = React.createRef<[] | null>();
  clearSelectionRef: React.MutableRefObject<any> = React.createRef<boolean | null>();
  selectAllRef: React.MutableRefObject<any> = React.createRef<boolean | null>();

  constructor(props: TableProps) {
    super(props);

    const async = 'fetchData' in this.props;
    const data = props.data || [];
    const schema = props.schema || [];

    this.state = {
      async,
      data: !async ? data : [],
      displayData: !async ? data : [],
      schema: !async ? schema : [],
      page: props.page,
      sortingList: props.sortingList,
      filterList: props.filterList,
      totalRecords: !async ? data.length : 0,
      loading: !async ? props.loading : true,
      error: !async ? props.error : false,
      errorType: props.errorType,
      selectAll: getSelectAll([]),
      searchTerm: undefined,
      startOffset: 0,
    };

    this.debounceUpdate = debounce(props.searchDebounceDuration, this.updateDataFn);
  }

  componentDidMount() {
    this.updateData();
  }

  componentDidUpdate(prevProps: TableProps, prevState: TableState) {
    if (!this.state.async) {
      if (prevProps.error !== this.props.error) {
        const { data = [], schema = [] } = this.props;

        this.setState({
          data,
          displayData: data,
          schema,
          error: this.props.error || false,
          errorType: this.props.errorType,
          page: 1,
          totalRecords: data.length || 0,
          selectAll: getSelectAll([]),
        });
      }
      if (prevProps.loading !== this.props.loading) {
        const { data = [], schema = [] } = this.props;
        this.setState(
          {
            data,
            displayData: data,
            schema,
            loading: this.props.loading || false,
            error: this.props.error || false,
            errorType: this.props.errorType,
            page: 1,
            totalRecords: data.length || 0,
            selectAll: getSelectAll([]),
          },
          () => {
            this.updateData();
          }
        );
      }
    }

    if (prevState.page !== this.state.page) {
      const { onPageChange } = this.props;
      if (onPageChange) onPageChange(this.state.page);
    }

    if (
      prevState.page !== this.state.page ||
      prevState.filterList !== this.state.filterList ||
      prevState.sortingList !== this.state.sortingList ||
      prevState.searchTerm !== this.state.searchTerm
    ) {
      if (!this.props.loading) {
        const searchUpdate = prevState.searchTerm !== this.state.searchTerm;
        this.updateData(searchUpdate);
      }

      // else if (this.props.enableRowVirtualization && this.state.searchTerm === '') {
      //   this.updateVirtualData({
      //     page: 1,
      //     preFetchRows: 120,
      //   });
      // }
    }
  }

  updateData = (searchUpdate?: boolean) => {
    if (this.state.async) {
      this.setState({
        loading: true,
      });
    }

    // if (this.props.enableRowVirtualization) {
    //   this.updateVirtualData({
    //     page: this.state.page,
    //     preFetchRows: this.props.virtualScrollOptions?.preFetchRows || 50,
    //   });
    // } else {
    //   if (searchUpdate) {
    //     this.debounceUpdate();
    //   } else {
    //     this.updateDataFn();
    //   }
    // }

    if (searchUpdate) {
      this.debounceUpdate();
    } else {
      this.updateDataFn();
    }
  };

  updateVirtualData = async (props: { page: number; preFetchRows: number }) => {
    const {
      sortingList,
      filterList,
      searchTerm,
      // startOffset
    } = this.state;

    const {
      fetchData,
      // virtualScrollOptions,
      uniqueColumnName,
    } = this.props;
    // const { maxDataLimit = 1000 } = virtualScrollOptions || {};

    const { page, preFetchRows } = props;

    const opts: FetchDataOptions = {
      page,
      pageSize: preFetchRows,
      sortingList,
      filterList,
      searchTerm,
    };

    if (fetchData) {
      try {
        const res = await fetchData(opts);

        const newList = [...this.state.data, ...res.data];

        // add prop for maxDataLimit-> 500

        // if (newList.length > maxDataLimit) {
        //   this.setState({
        //     startOffset: startOffset + preFetchRows,
        //   });

        //   newList.splice(0, newList.length - maxDataLimit);
        //   // newList.splice(preFetchRows, newList.length - preFetchRows);
        // }

        const data = newList;
        const dataReplica = JSON.parse(JSON.stringify(data));
        const preSelectedRows = data.filter((item: RowData) => item._selected);

        if (this.clearSelectionRef.current) {
          this.selectedRowsRef.current = [];
        } else {
          this.selectedRowsRef.current = this.selectedRowsRef.current
            ? removeDuplicate([...this.selectedRowsRef.current, ...preSelectedRows], uniqueColumnName)
            : removeDuplicate([...preSelectedRows], uniqueColumnName);
        }

        const selectedData = getUpdatedData(
          dataReplica,
          this.selectedRowsRef.current,
          uniqueColumnName,
          this.clearSelectionRef.current,
          this.selectAllRef.current
        );

        console.log('>>>aaaa selectedData>>>', selectedData);

        this.setState({
          data: selectedData,
          totalRecords: selectedData.length,
        });
        return res.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
    }

    return [];
  };

  updateDataFn = () => {
    console.log('>>>aaaa updateData');

    const {
      fetchData,
      pageSize,
      withPagination,
      data: dataProp,
      onSearch,
      uniqueColumnName,
      virtualScrollOptions,
      enableRowVirtualization,
    } = this.props;

    const { preFetchRows } = virtualScrollOptions || {};

    const { async, page, sortingList, filterList, searchTerm } = this.state;

    this.onSelect(-1, false);

    const opts: FetchDataOptions = {
      page,
      pageSize: enableRowVirtualization ? preFetchRows : pageSize,
      sortingList,
      filterList,
      searchTerm,
    };

    if (!withPagination && !enableRowVirtualization) {
      // if (!this.props.withPagination) {
      delete opts.page;
      delete opts.pageSize;
    }

    if (async) {
      if (fetchData) {
        fetchData(opts)
          .then((res: any) => {
            if (!res.searchTerm || (res.searchTerm && res.searchTerm === this.state.searchTerm)) {
              const data = res.data;
              const dataReplica = JSON.parse(JSON.stringify(data));
              const schema = this.state.schema.length ? this.state.schema : res.schema;
              const preSelectedRows = data.filter((item: RowData) => item._selected);

              if (this.clearSelectionRef.current) {
                this.selectedRowsRef.current = [];
              } else {
                this.selectedRowsRef.current = this.selectedRowsRef.current
                  ? removeDuplicate([...this.selectedRowsRef.current, ...preSelectedRows], uniqueColumnName)
                  : removeDuplicate([...preSelectedRows], uniqueColumnName);
              }

              const selectedData = getUpdatedData(
                dataReplica,
                this.selectedRowsRef.current,
                uniqueColumnName,
                this.clearSelectionRef.current,
                this.selectAllRef.current
              );
              this.setState({
                data: selectedData,
                displayData: data,
                schema,
                selectAll: getSelectAll(selectedData, this.props.selectDisabledRow, this.clearSelectionRef.current),
                totalRecords: res.count,
                loading: false,
                error: !data.length,
                errorType: 'NO_RECORDS_FOUND',
              });
            }
          })
          .catch(() => {
            this.setState({
              loading: false,
              error: true,
              errorType: 'FAILED_TO_FETCH',
            });
          });
      }
    } else {
      const { schema } = this.state;

      const filteredData = filterData(schema, dataProp, filterList);
      const searchedData =
        onSearch && opts.searchTerm !== undefined ? onSearch(filteredData, opts.searchTerm) : filteredData;
      const sortedData = sortData(schema, searchedData, sortingList);
      let renderedData = sortedData;
      const totalRecords = sortedData.length;
      if (withPagination && page && pageSize) {
        renderedData = paginateData(renderedData, page, pageSize);
      }

      const renderedSchema = this.state.schema.length ? this.state.schema : schema;
      const preSelectedRows = renderedData.filter((item: RowData) => item._selected);
      const renderedDataReplica = JSON.parse(JSON.stringify(renderedData));

      if (this.clearSelectionRef.current) {
        this.selectedRowsRef.current = [];
      } else {
        this.selectedRowsRef.current = this.selectedRowsRef.current
          ? removeDuplicate([...this.selectedRowsRef.current, ...preSelectedRows], uniqueColumnName)
          : removeDuplicate([...preSelectedRows], uniqueColumnName);
      }

      const selectedData = getUpdatedData(
        renderedDataReplica,
        this.selectedRowsRef.current,
        uniqueColumnName,
        this.clearSelectionRef.current,
        this.selectAllRef.current
      );

      this.setState({
        totalRecords,
        error: !renderedData.length,
        errorType: 'NO_RECORDS_FOUND',
        selectAll: getSelectAll(renderedData, this.props.selectDisabledRow, this.clearSelectionRef.current),
        schema: renderedSchema,
        displayData: sortedData,
        data: selectedData,
      });
    }
  };

  onSelect: onSelectFn = (rowIndexes, selected) => {
    const { data } = this.state;

    const { onSelect, uniqueColumnName } = this.props;

    if (this.selectAllRef.current && rowIndexes !== -1 && !selected) {
      this.selectAllRef.current = false;
      this.selectedRowsRef.current = [];

      const indexes = Array.from({ length: data.length }, (_, i) => i);

      const newData = updateBatchData(
        data,
        indexes,
        {
          _selected: false,
        },
        this.props.selectDisabledRow
      );

      this.setState({
        data: newData,
        selectAll: { checked: false, indeterminate: false },
      });

      if (onSelect) {
        if (this.props.uniqueColumnName) {
          onSelect(indexes, selected, this.selectedRowsRef.current, this.selectAllRef.current);
        } else {
          // To avoid breaking the current selection flow
          onSelect(indexes, selected, rowIndexes === -1 ? [] : newData.filter((d) => d._selected));
        }
      }

      return;
    }

    const indexes = [rowIndexes];
    const rowData = data[rowIndexes];
    let selectedItemList = rowIndexes === -1 ? [] : [rowData];

    let newData: Data = data;
    if (rowIndexes >= 0) {
      newData = updateBatchData(
        data,
        indexes,
        {
          _selected: selected,
        },
        this.props.selectDisabledRow
      );

      this.resetClearSelection();

      this.setState({
        data: newData,
        selectAll: getSelectAll(newData, this.props.selectDisabledRow, this.clearSelectionRef.current),
      });

      if (this.selectedRowsRef.current && selected) {
        selectedItemList = [{ ...rowData, _selected: selected }, ...this.selectedRowsRef.current];
      }

      if (!selected && uniqueColumnName) {
        selectedItemList = this.selectedRowsRef.current.filter(
          (item: RowData) => item[uniqueColumnName] !== rowData[uniqueColumnName]
        );
      }
      this.selectedRowsRef.current = removeDuplicate(selectedItemList, uniqueColumnName);
    } else if (rowIndexes === -1 && this.selectedRowsRef.current) {
      selectedItemList = this.selectedRowsRef.current;
    }

    if (onSelect) {
      if (this.props.uniqueColumnName) {
        onSelect(
          indexes,
          selected,
          rowIndexes === -1 && selectedItemList?.length === 0 ? [] : this.selectedRowsRef.current,
          this.selectAllRef.current
        );
      } else {
        // To avoid breaking the current selection flow
        onSelect(indexes, selected, rowIndexes === -1 ? [] : newData.filter((d) => d._selected));
      }
    }
  };

  onSelectAll: onSelectAllFunction = (selected, selectAll, headerCheckbox) => {
    const { onSelect, uniqueColumnName } = this.props;

    const { data } = this.state;

    const indexes = Array.from({ length: data.length }, (_, i) => i);

    const newData = updateBatchData(
      data,
      indexes,
      {
        _selected: selected,
      },
      this.props.selectDisabledRow
    );

    const selectedIndex: number[] = [];

    newData.forEach((item, key) => {
      if (item._selected) {
        selectedIndex.push(key);
      }
    });

    let selectedData = [];

    if (selected) {
      this.resetClearSelection();
      selectedData =
        selectAll === undefined
          ? [...(this.selectedRowsRef.current || []), ...newData.filter((d) => d._selected)]
          : this.selectedRowsRef.current;
    } else if (!selected && headerCheckbox && uniqueColumnName) {
      this.selectAllRef.current = false;
      this.selectedRowsRef.current = [...(this.selectedRowsRef.current || []), ...newData];

      this.selectedRowsRef.current = this.selectedRowsRef.current.filter((item1: RowData) => {
        return !newData.some((item2) => item1[uniqueColumnName] === item2[uniqueColumnName]);
      });
    } else {
      this.selectedRowsRef.current = [];
      this.selectAllRef.current = false;
    }

    if (!(headerCheckbox && !selected)) {
      this.selectedRowsRef.current = removeDuplicate(selectedData, uniqueColumnName);
    }

    if (onSelect) {
      if (this.props.uniqueColumnName) {
        if (headerCheckbox && !selected) {
          onSelect(
            selectedIndex,
            selected,
            removeDuplicate(this.selectedRowsRef.current, uniqueColumnName),
            this.selectAllRef.current
          );
        } else {
          onSelect(selectedIndex, selected, removeDuplicate(selectedData, uniqueColumnName), this.selectAllRef.current);
        }
      } else {
        onSelect(
          selectedIndex,
          selected,
          newData.filter((d) => d._selected),
          selectAll
        );
      }
    }

    this.setState({
      data: newData,
      selectAll: getSelectAll(newData, this.props.selectDisabledRow),
    });
  };

  onPageChange: PaginationProps['onPageChange'] = (newPage) => {
    this.setState({
      page: newPage,
    });
  };

  updateSchema: updateSchemaFunction = (newSchema) => {
    this.setState({
      schema: newSchema,
    });
  };

  updateSortingList: updateSortingListFunction = (newSortingList) => {
    const { multipleSorting } = this.props;

    this.setState({
      sortingList: multipleSorting ? [...newSortingList] : newSortingList.slice(-1),
      page: 1,
    });
  };

  updateFilterList: updateFilterListFunction = (newFilterList) => {
    this.setState({
      filterList: newFilterList,
      page: 1,
    });
  };

  updateSearchTerm: updateSearchTermFunction = (newSearchTerm) => {
    this.setState({
      searchTerm: newSearchTerm,
      page: 1,
    });
  };

  onClearSelection = () => {
    this.selectedRowsRef.current = [];
    this.clearSelectionRef.current = true;
    this.selectAllRef.current = false;

    this.onSelectAll(false);

    this.setState({
      selectAll: getSelectAll([], this.props.selectDisabledRow, this.clearSelectionRef.current),
    });
  };

  resetClearSelection = () => {
    this.clearSelectionRef.current = false;
  };

  onSelectAllRows = () => {
    this.selectAllRef.current = this.props.uniqueColumnName ? true : false;
    this.onSelectAll(true, true);
  };

  render() {
    const {
      showHead,
      type,
      size,
      headCellTooltip,
      separator,
      draggable,
      nestedRows,
      nestedRowRenderer,
      withHeader,
      headerOptions,
      withCheckbox,
      showMenu,
      withPagination,
      paginationType,
      pageSize,
      pageJumpDebounceDuration,
      onRowClick,
      loaderSchema,
      errorTemplate,
      className,
      filterPosition,
      uniqueColumnName,
      checkboxAlignment,
      virtualScrollOptions,
    } = this.props;

    const baseProps = extractBaseProps(this.props);

    const { children: headerChildren, ...headerAttr } = headerOptions as ExternalHeaderProps;

    const classes = className ? ` ${className}` : '';

    const { totalRecords } = this.state;
    const totalPages = getTotalPages(totalRecords, pageSize);
    const tableClass = classNames(tableStyles['Table'], classes);

    return (
      <div {...baseProps} className={tableClass} data-test="DesignSystem-Table-wrapper">
        {withHeader && (
          <div data-test="DesignSystem-Table-header">
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
              pageSize={pageSize}
              showFilters={filterPosition === 'HEADER'}
              selectedRowsRef={this.selectedRowsRef}
              onClearSelection={this.onClearSelection}
              onSelectAllRows={this.onSelectAllRows}
              selectedAllRef={this.selectAllRef}
              uniqueColumnName={uniqueColumnName}
              {...headerAttr}
            >
              {headerChildren}
            </Header>
          </div>
        )}
        <div className={tableStyles['Table-grid']}>
          <Grid
            {...this.state}
            key={this.state.searchTerm}
            updateData={this.updateData}
            updateSchema={this.updateSchema}
            updateSortingList={this.updateSortingList}
            updateFilterList={this.updateFilterList}
            withCheckbox={withCheckbox}
            checkboxAlignment={checkboxAlignment}
            onSelect={this.onSelect}
            onSelectAll={this.onSelectAll}
            showMenu={showMenu}
            showHead={showHead}
            type={type}
            size={size}
            headCellTooltip={headCellTooltip}
            separator={separator}
            draggable={draggable}
            nestedRows={nestedRows}
            nestedRowRenderer={nestedRowRenderer}
            withPagination={withPagination && totalPages > 1}
            pageSize={pageSize}
            loaderSchema={loaderSchema}
            errorTemplate={errorTemplate && errorTemplate({ errorType: this.state.errorType })}
            onRowClick={onRowClick}
            showFilters={filterPosition === 'GRID'}
            updateVirtualData={this.updateVirtualData}
            virtualScrollOptions={virtualScrollOptions}
            enableRowVirtualization={this.props.enableRowVirtualization}
          />
        </div>
        {withPagination && !this.state.loading && !this.state.error && totalPages > 1 && (
          <div className={tableStyles['Table-pagination']}>
            <Pagination
              page={this.state.page}
              totalPages={getTotalPages(totalRecords, pageSize)}
              type={paginationType}
              onPageChange={this.onPageChange}
              pageJumpDebounceDuration={pageJumpDebounceDuration}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Table;
