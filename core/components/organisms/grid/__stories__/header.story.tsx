import * as React from 'react';
import Header from '../Header';
import { Button } from '@/index';
import { boolean, text } from '@storybook/addon-knobs';
import schema from './_common_/schema';
import data from './_common_/data';
import { getSelectAll, updateBatchData } from '../utility';
import { onSelectAllFunction } from '..';
import { action } from '@storybook/addon-actions';

export const header = () => {
  const withSearch = boolean(
    'withSearch',
    true
  );

  const dynamicColumn = boolean(
    'dynamicColumn',
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

  const withPagination = boolean(
    'withPagination',
    true
  );

  const withCheckbox = boolean(
    'withCheckbox',
    true
  );

  const searchPlaceholder = text(
    'searchPlaceholer',
    'Search'
  );

  const [state, setState] = React.useState({
    data,
    selectAll: getSelectAll(data)
  });

  const onSelectAll: onSelectAllFunction = (selected, selectAll) => {
    action(`on select all:- selected: ${selected}, selectAll: ${selectAll}`)();

    const indexes = Array.from({ length: state.data.length }, (_, i) => i);

    const newData = updateBatchData(state.data, indexes, {
      _selected: selected
    });

    setState({
      ...state,
      data: newData,
      selectAll: getSelectAll(newData)
    });
  };

  return (
    <Header
      {...state}
      data={state.data.slice(0, 10)}
      schema={schema}
      withSearch={withSearch}
      dynamicColumn={dynamicColumn}
      showHead={showHead}
      withPagination={withPagination}
      withCheckbox={withCheckbox}
      totalRecords={50}
      searchPlaceholder={searchPlaceholder}
      onSelectAll={onSelectAll}
    >
      {children && <Button icon="events" />}
    </Header>
  );
};

export default {
  title: 'Organisms|Grid',
  component: Header,
};
