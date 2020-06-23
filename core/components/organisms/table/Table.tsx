import * as React from 'react';
import { Header, ExternalHeaderProps, updateSearchTermFn, HeaderProps } from '../grid/Header';
import { Grid } from '@/index';
import {
  Data,
  Schema,
  onSelectFn,
  onSelectAllFn,
  GridProps,
  FetchDataOptions,
  fetchDataFn,
  RowData,
  updateSchemaFn,
  updateSortingListFn,
  updateFilterListFn
} from '../grid';
import { updateBatchData, filterData, sortData, paginateData, getSelectAll } from '../grid/utility';
import { debounce } from 'throttle-debounce';

interface SyncProps {
  data: Data;
  schema: Schema;
  // loading: boolean;
}

interface AsyncProps {
  fetchData: fetchDataFn;
}

interface SharedTableProps {
  showHead?: GridProps['showHead'];
  type?: GridProps['type'];
  size?: GridProps['size'];
  draggable?: boolean;
  withHeader?: boolean;
  headerProps?: ExternalHeaderProps;
  withCheckbox?: GridProps['withCheckbox'];
  showMenu?: GridProps['showMenu'];
  withPagination?: GridProps['withPagination'];
  paginationType?: GridProps['paginationType'];
  pageSize?: GridProps['pageSize'];
  loaderSchema?: GridProps['loaderSchema'];
  onRowClick?: GridProps['onRowClick'];
  onSelect?: (rowIndex: number[], selected: boolean, allSelected: RowData[], selectAll?: boolean) => void;
  onPageChange?: GridProps['onPageChange'];
}

// interface SyncTableProps extends SyncProps, SharedTableProps { };
// interface AsyncTableProps extends AsyncProps, SharedTableProps { };

type SyncTableProps = SyncProps & SharedTableProps;
type AsyncTableProps = AsyncProps & SharedTableProps;

export type TableProps = (AsyncTableProps & SyncTableProps);

interface TableState {
  async: boolean;
  data: GridProps['data'];
  schema: GridProps['schema'];
  sortingList: GridProps['sortingList'];
  filterList: GridProps['filterList'];
  page: GridProps['page'];
  totalRecords: GridProps['totalRecords'];
  loading: GridProps['loading'];
  selectAll: GridProps['selectAll'];
  searchTerm: HeaderProps['searchTerm'];
}

// export type ExtractType<T> = T extends SyncTableProps ? SyncTableProps : AsyncTableProps;

// export const Table = <T extends SyncTableProps, K extends AsyncTableProps>(props: T | K) => {

// export function Table(props: SyncTableProps): React.ReactElement;
// export function Table(props: AsyncTableProps): React.ReactElement;
export class Table extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);

    const async = ('fetchData' in this.props);

    this.state = {
      async,
      // @ts-ignore
      data: props.data || [],
      // @ts-ignore
      schema: props.schema || [],
      sortingList: [],
      filterList: {},
      page: 1,
      totalRecords: 0,
      loading: true,
      selectAll: getSelectAll([]),
      searchTerm: '',
    };

    this.updateData({});
  }

  static defaultProps = {
    showHead: true,
    headerProps: {},
    pageSize: 15
  };

  // static getDerivedStateFromProps()

  componentDidUpdate(prevProps: TableProps, prevState: TableState) {
    if (!this.state.async) {
      if (prevProps.data !== this.props.data || prevProps.schema !== this.props.schema) {
        this.setState({
          loading: this.props.schema.length === 0,
          page: 1,
          schema: this.props.schema,
          data: this.props.data,
          totalRecords: this.props.data.length,
          sortingList: [],
          filterList: {},
          selectAll: getSelectAll([]),
          searchTerm: ''
        });
      }
    }

    if (prevState.page !== this.state.page) {
      // this.onSelect(-1, false);

      const { onPageChange } = this.props;
      if (onPageChange) onPageChange(this.state.page);
    }

    if (prevState.page !== this.state.page
      || prevState.filterList !== this.state.filterList
      || prevState.sortingList !== this.state.sortingList
      || prevState.searchTerm !== this.state.searchTerm) {
      this.onSelect(-1, false);
      this.updateData({});
    }
  }

  updateData = debounce(250, (options: FetchDataOptions) => {
    const {
      fetchData,
      pageSize,
      withPagination,
      data: dataProp,
    } = this.props;

    const {
      async,
      page,
      schema,
      sortingList,
      filterList,
      searchTerm
    } = this.state;

    this.setState({
      loading: true,
      selectAll: getSelectAll([])
    });

    const opts = {
      page,
      pageSize,
      sortingList,
      filterList,
      searchTerm,
      ...options,
    };

    if (!this.props.withPagination) {
      delete opts.page;
      delete opts.pageSize;
    }

    if (async) {
      fetchData(opts)
        .then((res: any) => {
          this.setState({
            selectAll: getSelectAll(res.data),
            schema: this.state.schema.length ? this.state.schema : res.schema,
            data: res.data,
            totalRecords: res.totalRecords,
            loading: false,
          });
        })
        .catch(() => {
          this.setState({
            loading: false,
            data: []
          });
        });
    } else {
      const filteredData = filterData(schema, dataProp, filterList);
      const sortedData = sortData(schema, filteredData, sortingList);
      let renderedData = sortedData;
      const totalRecords = sortedData.length;
      if (withPagination && page && pageSize) {
        renderedData = paginateData(renderedData, page, pageSize);
      }

      this.setState({
        totalRecords,
        selectAll: getSelectAll(renderedData),
        schema: this.state.schema.length ? this.state.schema : schema,
        loading: schema.length === 0,
        data: renderedData,
      });
    }
  });

  onSelect: onSelectFn = (rowIndex, selected) => {
    const {
      data
    } = this.state;

    const {
      onSelect
    } = this.props;

    const indexes = [rowIndex];
    let newData: Data = data;
    if (rowIndex >= 0) {
      newData = updateBatchData(data, indexes, {
        _selected: selected
      });

      this.setState({
        data: newData,
        selectAll: getSelectAll(newData)
      });
    }

    if (onSelect) {
      onSelect(indexes, selected, rowIndex === -1 ? [] : newData.filter(d => d._selected));
    }
  }

  onSelectAll: onSelectAllFn = (selected, selectAll) => {
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

  updateSchema: updateSchemaFn = newSchema => {
    this.setState({
      schema: newSchema
    });
  }

  updateSortingList: updateSortingListFn = newSortingList => {
    this.setState({
      // @ts-ignore
      sortingList: [
        ...newSortingList
      ],
      page: 1,
    });
  }

  updateFilterList: updateFilterListFn = newFilterList => {
    this.setState({
      filterList: newFilterList,
      page: 1,
    });
  }

  updateSearchTerm: updateSearchTermFn = newSearchTerm => {
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
      headerProps,
      withCheckbox,
      showMenu,
      withPagination,
      paginationType,
      pageSize,
      onRowClick,
      // onPageChange: onPageChangeProp,
      // onSelect,
      loaderSchema,
    } = this.props;

    const {
      children: headerChildren,
      ...headerAttr
    } = headerProps as ExternalHeaderProps;

    return (
      <div className="Table">
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
            onRowClick={onRowClick}
            onPageChange={this.onPageChange}
          />
        </div>
      </div>
    );
  }
}

export default Table;
