import * as React from 'react';
import data from '../_common_/data';
import schema from '../_common_/simpleSchema';
import { Card, Heading, Grid } from '@/index';
import { GridProps } from '@/index.type';
import { action } from '@storybook/addon-actions';
import { updateDataFunction, FetchDataOptions, onSelectFunction, onSelectAllFunction } from '../../Grid';
import { filterData, sortData, paginateData, updateBatchData } from '../../utility';

// CSF format story
export const withCheckbox = () => {
  const values: GridProps['withCheckbox'][] = [true, false];

  const style = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  const [state, setState] = React.useState({
    data,
    schema,
    page: 1,
    totalRecords: 0,
    loading: true,
  });

  const onSelect: onSelectFunction = (rowIndex, selected) => {
    action(`on select:- rowIndex:${rowIndex}, selected:${selected}`)();

    const newData = updateBatchData(state.data, [rowIndex], {
      _selected: selected
    });

    setState({
      ...state,
      data: newData
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
      data: newData
    });
  };

  const onPageChange: GridProps['onPageChange'] = newPage => {
    action(`on page change:- ${newPage}`)();

    setState({
      ...state,
      page: newPage,
    });
  };

  const updateData = (withPagination: boolean, options: FetchDataOptions) => {
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
      schema: state.schema.length ? state.schema : schema,
      loading: false,
      data: renderedData,
    });
  };

  return (
    // @ts-ignore
    <div style={style}>
      {values.map((v, index) => (
        <div
          key={index}
          style={{
            margin: '20px',
            width: '45%'
          }}
        >
          <Heading>{`withPagination: ${v}`}</Heading>
          <div
            style={{
              height: '350px',
            }}
          >
            <Card
              shadow="light"
              className="h-100"
            >
              <Grid
                {...state}
                updateData={options => updateData(v, options)}
                withCheckbox={true}
                withPagination={v}
                onPageChange={onPageChange}
                onSelect={onSelect}
                onSelectAll={onSelectAll}
              />
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Organisms|Grid/Variants',
  component: Grid
};
