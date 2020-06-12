import * as React from 'react';
import Header from '../Header';
import { Button } from '@/index';
import { boolean, text } from '@storybook/addon-knobs';
import schema from './_common_/schema';
import data from './_common_/data';

export const header = () => {
  const withSearch = boolean(
    'withSearch',
    true
  );

  const showHead = boolean(
    'showHead',
    false
  );

  const children = boolean(
    'children',
    false
  );

  const withCheckbox = boolean(
    'withCheckbox',
    true
  );

  const searchPlaceholder = text(
    'searchPlaceholer',
    'Search'
  );

  return (
    <Header
      data={data}
      schema={schema}
      withSearch={withSearch}
      showHead={showHead}
      withCheckbox={withCheckbox}
      totalRecords={50}
      searchPlaceholder={searchPlaceholder}
    >
      {children && <Button icon="events" />}
    </Header>
  );
};

export default {
  title: 'Organisms|Grid',
  component: Header,
};
