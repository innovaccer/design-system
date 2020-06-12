import * as React from 'react';
import { Header } from '../../Header';
import { Button, Card, Grid } from '@/index';
import data from '../_common_/data';
import schema from '../_common_/schema';
import { updateBatchData, filterData, sortData, paginateData } from '../../utility';
import { action } from '@storybook/addon-actions';
import { onSelectFn, onSelectAllFn, FetchDataOptions, updateSchemaFn } from '../../Grid';
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
      totalRecords,
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
      <Header
        {...state}
        updateData={updateData}
        updateSchema={updateSchema}
        onSelectAll={onSelectAll}
        withSearch={true}
        showHead={true}
        withCheckbox={true}
      >
        <Button icon="events" />
      </Header>
      <Grid
        {...state}
        updateData={updateData}
        updateSchema={updateSchema}
        withCheckbox={true}
        onSelect={onSelect}
        onSelectAll={onSelectAll}
        showHead={true}
        draggable={true}
        withPagination={true}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|Grid/Variants'
};
