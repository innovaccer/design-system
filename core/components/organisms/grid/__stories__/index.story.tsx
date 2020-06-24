import * as React from 'react';
import {
  Grid,
  onSelectFn,
  onSelectAllFn,
  updateDataFn,
  updateSchemaFn,
  GridProps,
  updateSortingListFn,
  updateFilterListFn
} from '../Grid';
import loaderSchema from './_common_/loaderSchema';
import { number, boolean, select } from '@storybook/addon-knobs';
import { Card } from '@/index';
import { action } from '@storybook/addon-actions';
import { errorTemplate } from './_common_/errorTemplate';
import data from './_common_/data';
import schema from './_common_/schema';
import { updateBatchData, getSelectAll } from '../utility';
import { filterData, sortData, paginateData } from '../rowUtility';
// import Header from '../Header';

export const all = () => {
  const loading = boolean(
    'loading',
    false
  );

  const error = boolean(
    'error',
    false
  );

  // const loaderSchema = boolean(
  //   'loaderSchema',
  //   true
  // );

  // const schema = boolean(
  //   'schema',
  //   false
  // );

  // const data = boolean(
  //   'data',
  //   false
  // );

  const type = select(
    'type',
    ['resource', 'data'],
    'resource'
  );

  const size = select(
    'size',
    ['comfortable', 'standard', 'compressed', 'tight'],
    'comfortable'
  );

  const showHead = boolean(
    'showHead',
    true
  );

  const showMenu = boolean(
    'showMenu',
    true
  );

  const draggable = boolean(
    'draggable',
    true
  );

  const withPagination = boolean(
    'withPagination',
    false
  );

  const paginationType = select(
    'paginationType',
    ['basic', 'jump'],
    'jump'
  );

  const pageSize = number(
    'pageSize',
    12
  );

  const withCheckbox = boolean(
    'withCheckbox',
    true
  );

  const [state, setState] = React.useState({
    loading: true,
    data: [],
    schema: [],
    page: 1,
    totalRecords: 0,
    sortingList: [
      { name: 'name', type: 'desc' }
    ],
    filterList: {
      name: ['s-z']
    },
    selectAll: {}
  });

  const onSelect: onSelectFn = (rowIndex, selected) => {
    action(`on select:- rowIndex:${rowIndex}, selected:${selected}`)();

    const newData = updateBatchData(state.data, [rowIndex], {
      _selected: selected
    });

    setState({
      ...state,
      data: newData,
      selectAll: getSelectAll(newData)
    });
  };

  const onSelectAll: onSelectAllFn = selected => {
    action(`on select all:- ${selected}`)();

    const indexes = Array.from({ length: state.data.length }, (_, i) => i);

    const newData = updateBatchData(state.data, indexes, {
      _selected: selected
    });

    setState({
      ...state,
      data: newData,
      selectAll: getSelectAll(newData)
    });
  };

  const onPageChange: GridProps['onPageChange'] = newPage => {
    action(`on page change:- ${newPage}`)();

    setState({
      ...state,
      page: newPage,
      // selectAll: getSelectAll([])
    });
  };

  const updateData: updateDataFn = options => {
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

    const filteredData = filterData(schema, data, filterList);
    const sortedData = sortData(schema, filteredData, sortingList);
    let renderedData = sortedData;
    const totalRecords = sortedData.length;
    if (withPagination && page && pageSizeOp) {
      renderedData = paginateData(renderedData, page, pageSizeOp);
    }

    setState({
      ...state,
      totalRecords,
      selectAll: getSelectAll([]),
      schema: state.schema.length ? state.schema : schema,
      loading: false,
      data: renderedData,
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
      sortingList: newSortingList,
    });

    updateData({
      sortingList: newSortingList
    });
  };

  const updateFilterList: updateFilterListFn = newFilterList => {
    setState({
      ...state,
      filterList: newFilterList,
    });

    updateData({
      filterList: newFilterList
    });
  };

  return (
    <Card
      shadow="light"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '350px',
        overflow: 'hidden'
      }}
    >
      {/* <Header
        {...state}
        // updateData={updateData}
        updateSchema={updateSchema}
        // updateSortingList={updateSortingList}
        updateFilterList={updateFilterList}
        onSelectAll={onSelectAll}
        withSearch={true}
        showHead={showHead}
        withCheckbox={true}
      >
        <Button icon="events" />
      </Header> */}
      <Grid
        {...state}
        loading={loading}
        error={error}
        type={type}
        size={size}
        totalRecords={state.totalRecords}
        updateData={updateData}
        updateSchema={updateSchema}
        updateSortingList={updateSortingList}
        updateFilterList={updateFilterList}
        loaderSchema={loaderSchema}
        errorTemplate={() => errorTemplate}
        showHead={showHead}
        showMenu={showMenu}
        draggable={draggable}
        withPagination={withPagination}
        paginationType={paginationType}
        pageSize={withPagination ? pageSize : undefined}
        onPageChange={onPageChange}
        withCheckbox={withCheckbox}
        onSelect={onSelect}
        onSelectAll={onSelectAll}
        onRowClick={(rowData, rowIndex) => action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|Grid',
  component: Grid
};
