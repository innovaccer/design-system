import * as React from 'react';
import { Card } from '@/index';
import List from '../List';
import schema from '../../grid/__stories__/_common_/schema';
import data from '../../grid/__stories__/_common_/data';
import { boolean, select, number } from '@storybook/addon-knobs';
import loaderSchema from '../../grid/__stories__/_common_/loaderSchema';
import { fetchData } from '../../grid/__stories__/_common_/fetchData';

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
        withCheckbox={withCheckbox}
        showMenu={showMenu}
        type={type}
        size={size}
        draggable={draggable}
        withPagination={withPagination}
        paginationType={paginationType}
        pageSize={pageSize}
        loaderSchema={loaderSchema}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|List',
  component: List
};
