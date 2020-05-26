import * as React from 'react';
import { Table, Data, TableProps } from '../Table';
import loaderSchema from './loaderSchema';
import { number, boolean, select } from '@storybook/addon-knobs';
import { Card } from '@/index';
import { action } from '@storybook/addon-actions';
import { errorTemplate } from './errorTemplate';
import { fetchData } from './fetchData';

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

  const showHeader = boolean(
    'showHeader',
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
    true
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
    <Card
      shadow="light"
      style={{
        height: '350px',
      }}
    >
      <Table
        type={type}
        size={size}
        data={state.data}
        schema={state.schema}
        totalRecords={state.totalRecords}
        updateData={updateData}
        loading={state.loading}
        loaderSchema={loaderSchema}
        errorTemplate={() => errorTemplate}
        showHeader={showHeader}
        showMenu={showMenu}
        draggable={draggable}
        withPagination={withPagination}
        paginationType={paginationType}
        pageSize={withPagination ? pageSize : undefined}
        onPageChange={(page: number) => action(`on page change:- ${page}`)()}
        withCheckbox={withCheckbox}
        onSelect={(rowIndex, selected) => action(`on select:- rowIndex:${rowIndex}, selected:${selected}`)()}
        onSelectAll={(page, selected) => action(`on select all:- page:${page}, selected:${selected}`)()}
        statusMapper={(val: string) => val === 'male' ? 'success' : 'alert'}
        onRowClick={(rowData: Data) => action(`on row click:- ${JSON.stringify(rowData)}`)()}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|Table',
  component: Table
};
