import * as React from 'react';
import { Grid, Data, onSelectFn, onSelectAllFn, FetchDataOptions } from '../Grid';
import loaderSchema from './_common_/loaderSchema';
import { number, boolean, select } from '@storybook/addon-knobs';
import { Card } from '@/index';
import { action } from '@storybook/addon-actions';
import { errorTemplate } from './_common_/errorTemplate';
import data from './_common_/data';
import schema from './_common_/schema';
import { updateBatchData } from '../utility';
import { filterData, sortData, paginateData } from '../rowUtility';

export const all = () => {
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
    false
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
    totalRecords: 0
  });

  const onSelect: onSelectFn = (rowIndex, selected) => {
    action(`on select:- rowIndex:${rowIndex}, selected:${selected}`)();

    const newData = updateBatchData(state.data, [rowIndex], {
      _selected: selected
    });

    setState({
      ...state,
      data: newData
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
      data: newData
    });
  };

  const updateData = (options: FetchDataOptions) => {
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
      schema,
      totalRecords,
      loading: false,
      data: renderedData,
    });
  };

  return (
    <Card
      shadow="light"
      style={{
        height: '350px',
      }}
    >
      <Grid
        type={type}
        size={size}
        data={state.data}
        schema={state.schema}
        totalRecords={state.totalRecords}
        updateData={updateData}
        loading={state.loading}
        loaderSchema={loaderSchema}
        errorTemplate={() => errorTemplate}
        showHead={showHead}
        showMenu={showMenu}
        draggable={draggable}
        withPagination={withPagination}
        paginationType={paginationType}
        pageSize={withPagination ? pageSize : undefined}
        onPageChange={(page: number) => action(`on page change:- ${page}`)()}
        withCheckbox={withCheckbox}
        onSelect={onSelect}
        onSelectAll={onSelectAll}
        onRowClick={(rowData: Data) => action(`on row click:- ${JSON.stringify(rowData)}`)()}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|Grid',
  component: Grid
};
