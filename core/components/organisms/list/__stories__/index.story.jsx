import * as React from 'react';
import { Card } from '@/index';
import List from '../List';
import schema from '../../grid/__stories__/_common_/schema';
import data from '../../grid/__stories__/_common_/data';
import loaderSchema from '../../grid/__stories__/_common_/loaderSchema';
import { fetchData } from '../../grid/__stories__/_common_/fetchData';
import { action } from '@/utils/action';
import { SyncList, AsyncList } from './_common_/types';
import './style.css';

export const All = () => {
  const async = true;

  const applyLoaderSchema = true;

  const type = 'resource';

  const size = 'comfortable';

  const withHeader = false;

  const withCheckbox = false;

  const withPagination = true;

  const page = 1;

  const paginationType = 'jump';

  const pageSize = 12;

  const multipleSorting = false;

  const separator = false;

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
    <div className="List-wrapper">
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
  title: 'Components/List (Deprecated)/All',
  component: List,
  parameters: {
    docs: {
      docPage: {
        isDeprecated: true,
        noStory: true,
        props: {
          components: { AsyncList, SyncList },
        },
      },
    },
  },
};
