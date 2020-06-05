import * as React from 'react';
import Header from '../Header';
import { Button } from '@/index';
import { boolean } from '@storybook/addon-knobs';
import schema from './_common_/schema';
import data from './_common_/data';

export const header = () => {
  const withSearch = boolean(
    'withSearch',
    true
  );

  const children = boolean(
    'children',
    false
  );

  return (
    <Header
      data={data}
      schema={schema}
      withSearch={withSearch}
      totalRecords={50}
    >
      {children && <Button icon="events" />}
    </Header>
  );
};

export default {
  title: 'Organisms|Grid',
  component: Header,
};
