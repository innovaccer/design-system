import * as React from 'react';
import { Header } from '../../Header';
import { Button, Card, Grid } from '@/index';
import data from '../_common_/data';
import schema from '../_common_/schema';
import { updateBatchData, filterData, sortData, paginateData, getSelectAll } from '../../utility';
import { action } from '@storybook/addon-actions';
import { onSelectFunction, onSelectAllFunction, FetchDataOptions, updateSchemaFunction, GridProps } from '../../Grid';
import { withPagination } from './withPagination.story';

export const withHeader = () => {
  const [state, setState] = React.useState({
    loading: true,
    page: 1,
    data: [],
    schema: [],
    totalRecords: 0
  });

  const onSelect: onSelectFunction = (rowIndex, selected) => {
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

  const onSelectAll: onSelectAllFunction = selected => {
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
      page: newPage
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
      selectAll: getSelectAll([]),
      schema: state.schema.length ? state.schema : schema,
      loading: false,
      data: renderedData,
    });
  };

  const updateSchema: updateSchemaFunction = newSchema => {
    setState({
      ...state,
      schema: newSchema
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '350px',
        overflow: 'hidden'
      }}
    >
      <Card
        shadow="light"
        className="h-100"
      >
        <Header
          {...state}
          updateData={updateData}
          updateSchema={updateSchema}
          onSelectAll={onSelectAll}
          withSearch={true}
          showHead={false}
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
          showHead={false}
          draggable={true}
          withPagination={true}
          onPageChange={onPageChange}
        />
      </Card>
    </div>
  );
};

export default {
  title: 'Organisms|Grid/Variants'
};
