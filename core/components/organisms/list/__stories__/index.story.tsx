import * as React from 'react';
import { Card, Button } from '@/index';
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

  const draggable = boolean(
    'draggable',
    false
  );

  const withHeader = boolean(
    'withHeader',
    false
  );

  const withCheckbox = boolean(
    'withCheckbox',
    false
  );

  const showMenu = boolean(
    'showMenu',
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
        headerProps={{
          withSearch: true,
          children: <Button icon="events" />
        }}
        withCheckbox={withCheckbox}
        type={type}
        size={size}
        withPagination={withPagination}
        paginationType={paginationType}
        pageSize={pageSize}
        loaderSchema={loaderSchema}
        onRowClick={(rowData, rowIndex) => action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()}
        onSelect={(rowIndex, selected, selectedList) => action(`on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(selectedList)}`)()}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|List',
  component: List
};
