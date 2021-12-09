import * as React from 'react';
import { Card } from '@/index';
import List from '../List';
import schema from '../../grid/__stories__/_common_/schema';
import data from '../../grid/__stories__/_common_/data';
import { boolean, select, number } from '@storybook/addon-knobs';
import loaderSchema from '../../grid/__stories__/_common_/loaderSchema';
import { fetchData } from '../../grid/__stories__/_common_/fetchData';
import { action } from '@storybook/addon-actions';
import { SyncList, AsyncList } from './_common_/types';

export const all = () => {
  const async = boolean('async', true);

  const applyLoaderSchema = boolean('applyLoaderSchema', true);

  const type = select('type', ['resource', 'data'], 'resource');

  const size = select('size', ['comfortable', 'standard', 'compressed', 'tight'], 'comfortable');

  const withHeader = boolean('withHeader', false);

  const withCheckbox = boolean('withCheckbox', false);

  const withPagination = boolean('withPagination', true);

  const page = number('page', 1);

  const paginationType = select('paginationType', ['basic', 'jump'], 'jump');

  const pageSize = number('pageSize', 12);

  const multipleSorting = boolean('multipleSorting', false);

  const separator = boolean('separator', false);

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
    <div
      style={{
        height: '350px',
        // overflow: 'hidden'
      }}
    >
      <Card className="h-100 overflow-hidden">
        <List
          {...dataAttr}
          withHeader={withHeader}
          headerOptions={{
            withSearch: true,
          }}
          withCheckbox={withCheckbox}
          type={type}
          size={size}
          separator={separator}
          withPagination={withPagination}
          paginationType={paginationType}
          page={page}
          pageSize={pageSize}
          loaderSchema={applyLoaderSchema ? loaderSchema : undefined}
          onRowClick={(rowData, rowIndex) =>
            action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()
          }
          onSelect={(rowIndex, selected, selectedList) =>
            action(
              `on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(selectedList)}`
            )()
          }
          onPageChange={(newPage) => action(`on-page-change:- ${newPage}`)()}
          multipleSorting={multipleSorting}
          sortingList={[{ name: 'name', type: 'desc' }]}
          filterList={{
            name: ['h-r', 's-z'],
          }}
        />
      </Card>
    </div>
  );
};

export default {
  title: 'Components/List/All',
  component: List,
  parameters: {
    docs: {
      docPage: {
        noStory: true,
        props: {
          components: { AsyncList, SyncList },
          exclude: ['showHead'],
        },
      },
    },
  },
};
