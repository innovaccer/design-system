import * as React from 'react';
import { Card, Heading, Table } from '@/index';
import { TableProps } from '@/index.type';
import { action } from '@storybook/addon-actions';
import { fetchData } from '../fetchData';

// CSF format story
export const withPagination = () => {
  const values: TableProps['paginationType'][] = ['basic', 'jump'];

  const style = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  const [state, setState] = React.useState<Partial<TableProps>>({
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
            <Table
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
  title: 'Organisms|Table/Variants',
  component: Table
};
