import * as React from 'react';
import { Header } from '../../Header';
import { Button, Card, Grid } from '@/index';
import data from '../_common_/data';
import schema from '../_common_/schema';
import { updateBatchData, filterData, sortData, paginateData } from '../../utility';
import { action } from '@storybook/addon-actions';
import { onSelectFn, onSelectAllFn, FetchDataOptions } from '../../Grid';
import { withPagination } from './withPagination.story';

export const withHeader = () => {
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
      pageSize,
      sortingList,
      filterList
    } = options;

    const filteredData = filterData(schema, data, filterList);
    const sortedData = sortData(schema, filteredData, sortingList);
    let renderedData = sortedData;
    const totalRecords = sortedData.length;
    if (withPagination && page && pageSize) {
      renderedData = paginateData(renderedData, page, pageSize);
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
    <div style={{ background: 'var(--secondary-lightest' }}>
      <Header
        {...state}
        updateData={updateData}
        onSelectAll={onSelectAll}
        withSearch={true}
        showHeader={false}
      >
        <Button icon="events" />
      </Header>
      <Card
        shadow="light"
        style={{
          height: '350px',
        }}
      >
        <Grid
          {...state}
          updateData={updateData}
          // withPagination={v}
          // onPageChange={(page: number) => action(`on page change:- ${page}`)()}
          withCheckbox={true}
          onSelect={onSelect}
          onSelectAll={onSelectAll}
          showHead={false}
          withPagination={true}
        />
      </Card>
    </div>
  );
};

export default {
  title: 'Organisms|Grid/Variants'
};
