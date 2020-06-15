import * as React from 'react';
import { Header, ExternalHeaderProps, updateSearchTermFn } from '../grid/Header';
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
  onSelect?: (rowIndex: number[], selected: boolean, allSelected: RowData[]) => void;
  onPageChange?: GridProps['onPageChange'];
}

// interface SyncTableProps extends SyncProps, SharedTableProps { };
// interface AsyncTableProps extends AsyncProps, SharedTableProps { };

type SyncTableProps = SyncProps & SharedTableProps;
type AsyncTableProps = AsyncProps & SharedTableProps;

export type TableProps = (AsyncTableProps | SyncTableProps);

// export type ExtractType<T> = T extends SyncTableProps ? SyncTableProps : AsyncTableProps;

// export const Table = <T extends SyncTableProps, K extends AsyncTableProps>(props: T | K) => {

// export function Table(props: SyncTableProps): React.ReactElement;
// export function Table(props: AsyncTableProps): React.ReactElement;
export const Table = (props: TableProps) => {
  const {
    showHead = true,
    type,
    size,
    draggable,
    withHeader,
    headerProps = {},
    withCheckbox,
    showMenu,
    withPagination,
    paginationType,
    pageSize = 15,
    onRowClick,
    onPageChange: onPageChangeProp,
    onSelect: onSelectProp,
    // onSelect,
    loaderSchema,
    // @ts-ignore
    data: dataProp,
    // @ts-ignore
    schema: schemaProp,
    // @ts-ignore
    fetchData
  } = props;

  const async = ('fetchData' in props);

  const [state, setState] = React.useState({
    data: dataProp || [],
    schema: schemaProp || [],
    sortingList: [],
    filterList: {},
    page: 1,
    totalRecords: 0,
    loading: true,
    selectAll: getSelectAll([]),
    searchTerm: '',
  });

  const {
    page,
    data,
    schema,
    sortingList,
    filterList,
    searchTerm
  } = state;

  React.useEffect(() => {
    if (!async && (dataProp !== data || schemaProp !== schema)) {
      setState({
        loading: false,
        page: 1,
        schema: schemaProp,
        data: dataProp,
        totalRecords: dataProp.length,
        sortingList: [],
        filterList: {},
        selectAll: getSelectAll([]),
        searchTerm: ''
      });
    }
  }, [dataProp, schemaProp]);

  React.useEffect(() => {
    updateData({
      sortingList,
      filterList,
      searchTerm
    });
  }, [sortingList, filterList, searchTerm]);

  React.useEffect(() => {
    onSelect(-1, false);
    if (onPageChangeProp) onPageChangeProp(page);
  }, [page]);

  function updateData(options: FetchDataOptions) {
    setState({
      ...state,
      loading: true,
      selectAll: getSelectAll([])
    });

    const opts = {
      page,
      pageSize,
      sortingList,
      filterList,
      ...options,
    };

    if (async) {
      fetchData(opts)
        .then((res: any) => {
          setState({
            ...state,
            selectAll: getSelectAll(res.data),
            schema: state.schema.length ? state.schema : res.schema,
            data: res.data,
            totalRecords: res.totalRecords,
            loading: false,
          });
        })
        .catch(() => {
          setState({
            ...state,
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

      setState({
        ...state,
        totalRecords,
        selectAll: getSelectAll(renderedData),
        schema: state.schema.length ? state.schema : schema,
        loading: false,
        data: renderedData,
      });
    }
  }

  const onSelect: onSelectFn = (rowIndex, selected) => {
    const indexes = [rowIndex];
    let newData: Data = data;
    if (rowIndex >= 0) {
      newData = updateBatchData(state.data, indexes, {
        _selected: selected
      });

      setState({
        ...state,
        data: newData,
        selectAll: getSelectAll(newData)
      });
    }

    if (onSelectProp) {
      onSelectProp(indexes, selected, rowIndex === -1 ? [] : newData.filter(d => d._selected));
    }
  };

  const onSelectAll: onSelectAllFn = selected => {
    const indexes = Array.from({ length: state.data.length }, (_, i) => i);

    const newData = updateBatchData(state.data, indexes, {
      _selected: selected
    });

    if (onSelectProp) {
      onSelectProp(indexes, selected, newData.filter(d => d._selected));
    }

    setState({
      ...state,
      data: newData,
      selectAll: getSelectAll(newData)
    });
  };

  const onPageChange: GridProps['onPageChange'] = newPage => {
    setState({
      ...state,
      page: newPage
    });
  };

  const updateSchema: updateSchemaFn = newSchema => {
    setState({
      ...state,
      schema: newSchema
    });
  };

  const updateSortingList: updateSortingListFn = newSortingList => {
    setState({
      ...state,
      // @ts-ignore
      sortingList: [
        ...newSortingList
      ],
      page: 1,
    });

    // updateData({
    //   sortingList: newSortingList
    // });
  };

  const updateFilterList: updateFilterListFn = newFilterList => {
    setState({
      ...state,
      filterList: newFilterList,
      page: 1,
    });
  };

  const updateSearchTerm: updateSearchTermFn = newSearchTerm => {
    setState({
      ...state,
      searchTerm: newSearchTerm,
      page: 1
    });
  };

  const {
    children: headerChildren,
    ...headerAttr
  } = headerProps;

  return (
    <div className="Table">
      {withHeader && (
        <div className="Table-header">
          <Header
            {...state}
            // updateData={updateData}
            updateSchema={updateSchema}
            // updateSortingList={updateSortingList}
            updateFilterList={updateFilterList}
            updateSearchTerm={updateSearchTerm}
            showHead={showHead}
            onSelectAll={onSelectAll}
            withCheckbox={withCheckbox}
            {...headerAttr}
          >
            {headerChildren}
          </Header>
        </div>
      )}
      <div className="Table-grid">
        <Grid
          {...state}
          updateData={updateData}
          updateSchema={updateSchema}
          updateSortingList={updateSortingList}
          updateFilterList={updateFilterList}
          withCheckbox={withCheckbox}
          onSelect={onSelect}
          onSelectAll={onSelectAll}
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
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Table;
