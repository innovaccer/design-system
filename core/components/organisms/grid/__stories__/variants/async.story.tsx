import * as React from 'react';
import { Card, Grid } from '@/index';
import { updateBatchData } from '../../utility';
import { action } from '@storybook/addon-actions';
import { onSelectFn, onSelectAllFn } from '../../Grid';
import { fetchData } from '../_common_/fetchData';
import loaderSchema from '../_common_/loaderSchema';

export const async = () => {
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

    fetchData(options)
      .then(res => {
        const {
          data,
          schema,
          totalRecords
        } = res;

        setState({
          ...state,
          data,
          schema,
          totalRecords,
          loading: false
        });
      })
      .catch(_ => {
        setState({
          ...state,
          data: [],
          loading: false
        });
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
        {...state}
        loaderSchema={loaderSchema}
        updateData={updateData}
        withCheckbox={true}
        onSelect={onSelect}
        onSelectAll={onSelectAll}
        withPagination={true}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|Grid/Variants'
};
