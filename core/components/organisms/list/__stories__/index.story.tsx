import * as React from 'react';
import { Card } from '@/index';
import List from '../List';
import schema from '../../grid/__stories__/_common_/schema';
import data from '../../grid/__stories__/_common_/data';
import { boolean, select, number } from '@storybook/addon-knobs';
import loaderSchema from '../../grid/__stories__/_common_/loaderSchema';
import { fetchData } from '../../grid/__stories__/_common_/fetchData';
import { action } from '@storybook/addon-actions';

export const all = () => {
  const async = boolean(
    'async',
    true
  );

  let loading;
  let error;
  let applyData;
  let applySchema;
  const applyLoaderSchema = boolean(
    'applyLoaderSchema',
    true
  );

  if (!async) {
    loading = boolean(
      'loading',
      false
    );

    error = boolean(
      'error',
      false
    );

    applySchema = boolean(
      'applySchema',
      true
    );

    applyData = boolean(
      'applyData',
      true
    );
  }

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

  const withHeader = boolean(
    'withHeader',
    false
  );

  const withCheckbox = boolean(
    'withCheckbox',
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

  const multipleSorting = boolean(
    'multipleSorting',
    false
  );

  let dataAttr = {};
  if (async) {
    dataAttr = {
      fetchData,
    };
  } else {
    dataAttr = {
      schema,
      data,
    };
  }

  return (
    <Card
      style={{
        height: '350px',
        // overflow: 'hidden'
      }}
    >
      <List
        {...dataAttr}
        withHeader={withHeader}
        headerOptions={{
          withSearch: true,
        }}
        withCheckbox={withCheckbox}
        type={type}
        size={size}
        withPagination={withPagination}
        paginationType={paginationType}
        pageSize={pageSize}
        loaderSchema={applyLoaderSchema ? loaderSchema : undefined}
        onRowClick={(rowData, rowIndex) => action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()}
        onSelect={(rowIndex, selected, selectedList) => action(`on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(selectedList)}`)()}
        onPageChange={newPage => action(`on-page-change:- ${newPage}`)()}
        multipleSorting={multipleSorting}
        sortingList={[
          { name: 'name', type: 'desc' }
        ]}
        filterList={{
          name: ['h-r', 's-z']
        }}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|List',
  component: List
};
