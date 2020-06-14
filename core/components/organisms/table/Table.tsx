import * as React from 'react';
import { Header, ExternalHeaderProps } from '../grid/Header';
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
  updateSchemaFn
} from '../grid';
import { updateBatchData, filterData, sortData, paginateData } from '../grid/utility';

interface SyncProps {
  data: Data;
  schema: Schema;
  // loading: boolean;
}

interface AsyncProps {
  fetchData: fetchDataFn;
}

interface SharedTableProps {
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
    type,
    size,
    draggable,
    withHeader,
    headerProps = {},
    withCheckbox,
    showMenu,
    withPagination,
    paginationType,
    pageSize,
    onRowClick,
    onPageChange,
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
    totalRecords: 0,
    loading: true,
  });

  const {
    data,
    schema
  } = state;

  React.useEffect(() => {
    if (!async && (dataProp !== data || schemaProp !== schema)) {
      setState({
        loading: false,
        schema: schemaProp,
        data: schemaProp,
        totalRecords: dataProp.length
      });
    }
  }, [dataProp, schemaProp]);

  const updateSyncData = (options: FetchDataOptions) => {
    setState({
      ...state,
      loading: true
    });

    const {
      page,
      pageSize: pageSizeOp,
      sortingList,
      filterList
    } = options;

    const filteredData = filterData(schema, dataProp, filterList);
    const sortedData = sortData(schema, filteredData, sortingList);
    let renderedData = sortedData;
    const totalRecords = sortedData.length;
    if (withPagination && page && pageSizeOp) {
      renderedData = paginateData(renderedData, page, pageSizeOp);
    }

    setState({
      ...state,
      totalRecords,
      schema: state.schema.length ? state.schema : schema,
      loading: false,
      data: renderedData,
    });
  };

  const updateAsyncData = (options: FetchDataOptions) => {
    setState({
      ...state,
      loading: true
    });

    fetchData(options)
      .then((res: any) => {
        setState({
          ...state,
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
  };

  const onSelect: onSelectFn = (rowIndex, selected) => {
    const indexes = [rowIndex];
    let newData: Data = data;
    if (rowIndex >= 0) {
      newData = updateBatchData(state.data, indexes, {
        _selected: selected
      });

      setState({
        ...state,
        data: newData
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
      data: newData
    });
  };

  const updateSchema: updateSchemaFn = newSchema => {
    setState({
      ...state,
      schema: newSchema
    });
  };

  const {
    // @ts-ignore
    children: headerChildren,
    ...headerAttr
  } = headerProps;

  return (
    <div className="Table">
      {withHeader && (
        <div className="Table-header">
          <Header
            {...state}
            updateData={async ? updateAsyncData : updateSyncData}
            updateSchema={updateSchema}
            showHead={true}
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
          updateData={async ? updateAsyncData : updateSyncData}
          updateSchema={updateSchema}
          withCheckbox={withCheckbox}
          onSelect={onSelect}
          onSelectAll={onSelectAll}
          showMenu={showMenu}
          type={type}
          size={size}
          draggable={draggable}
          withPagination={withPagination}
          paginationType={paginationType}
          pageSize={pageSize}
          loaderSchema={loaderSchema}
          onRowClick={onRowClick}
          onPageChange={newPage => {
            onSelect(-1, false);
            if (onPageChange) onPageChange(newPage);
          }}
        />
      </div>
    </div>
  );
};

export default Table;
