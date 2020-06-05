import * as React from 'react';
import { Card, Heading, Grid } from '@/index';
import { GridProps } from '@/index.type';
import { action } from '@storybook/addon-actions';
import { transformData } from '../../utility';
import data from '../_common_/data';
import schema from '../_common_/schema';

// CSF format story
export const withPagination = () => {
  const values: GridProps['paginationType'][] = ['basic', 'jump'];

  const style = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  const [state, setState] = React.useState<Partial<GridProps>>({
    loading: true,
    data: [],
    schema: [],
    totalRecords: 0
  });

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
          <Heading>{`paginationType: ${v}`}</Heading>
          <Card
            shadow="light"
            style={{
              height: '350px',
            }}
          >
            <Grid
              withPagination={true}
              paginationType={v}
              onPageChange={(page: number) => action(`on page change:- ${page}`)()}
              data={state.data}
              schema={state.schema}
              totalRecords={state.totalRecords}
              updateData={updateData}
              loading={state.loading}
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Organisms|Grid/Variants',
  component: Grid
};
