import * as React from 'react';
import { Header } from '../../Header';
import { Button, Card, Grid } from '@/index';
import data from '../_common_/data';
import schema from '../_common_/schema';
import { transformData, updateBatchData } from '../../utility';
import { action } from '@storybook/addon-actions';
import { onSelectFn, onSelectAllFn } from '../../Grid';

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

  const updateData = (options: Record<string, any>) => {
    setState({
      ...state,
      loading: true
    });

    const totalRecords = data.length;
    const renderedData = transformData(schema, data, options);

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
        onSelect={onSelect}
        onSelectAll={onSelectAll}
        withSearch={true}
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
